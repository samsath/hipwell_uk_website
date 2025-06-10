import emailjs from '@emailjs/browser';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { ContactFormSchema, type ContactFormType } from '@/components/ContactForm/ContactForm.types.ts';

const schema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email'),
  message: z.string().min(10, 'Please provide more detail')
});

type FormData = z.infer<typeof schema>;

export const ContactForm = (input: ContactFormType) => {
  const result = ContactFormSchema.safeParse(input);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset
  } = useForm<FormData>({
    resolver: zodResolver(schema)
  });

  if (!result.success) {
    return <></>;
  }
  const { title, body, email } = result.data;

  const onSubmit = async (data: FormData) => {
    try {
      await emailjs.send(
        'service_fadlvnx',
        'template_q4t75rl',
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message
        },
        {
          publicKey: '1Zt4URhr_x26LYq3s'
        }
      );
      reset();
    } catch (error) {
      console.error('EmailJS Error:', error);
      alert('Failed to send enquiry.');
    }
  };

  return (
    <section className="contact">
      <div className="container">
        <div className="contact-content">
          <h2>{ title }</h2>
          <div dangerouslySetInnerHTML={body ? { __html: body } : { __html: '' }}></div>
          {isSubmitSuccessful ? (
            <div className="contact-form">
              <p>Thank you for your enquiry. I will get back to you as soon as possible.</p>
              <p>If you would like to contact me directly, please use the email below.</p>
            </div>
            ) : (
            <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input {...register('name')} />
                {errors.name && <p className='form-error'>{errors.name.message}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" {...register('email')} />
                {errors.email && <p className='form-error'>{errors.email.message}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="project">Project Description</label>
                <textarea id="project" {...register('message')}></textarea>
              </div>
              {errors.message && <p className='form-error'>{errors.message.message}</p>}
              <button
                type="submit"
                disabled={isSubmitting}
                className="submit-btn">{isSubmitting ? 'Sending...' : 'Send Message'}</button>
            </form>
          )}

          <a href={`mailto:${email}?subject=homepage link`} className="email-link">{email}</a>
        </div>
      </div>
    </section>
  );
};
