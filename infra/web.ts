export const bucket = new sst.aws.Bucket(`HipwellUKWebsite-WebsiteContent-${$app.stage}`, {
    access: "public"
});

export const front = new sst.aws.Astro(`HipwellUKWebsite-${$app.stage}`, {
    link: [bucket],
    domain: {
        name: "www.hipwell.uk",
        dns: false,
        cert: "arn:aws:acm:us-east-1:799530565835:certificate/1ee414d3-54bc-4e5c-8690-165cff5ff7a1",
    },
});
