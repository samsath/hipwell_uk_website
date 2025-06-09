# Bradley Strategy Group Website

To run local version
```sh
yarn dev
```

## 🚀 Project Structure
It uses:
- React (frontend framework)
- Astro (static site generator
- sst (infrastructure as code)
- EmailJs (email service)
- Prismic (headless CMS)
- GitHub Actions (CI/CD)

./src = were most of the code lives
./infra = were the infrastructure lives


## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `yarn install`             | Installs dependencies                            |
| `yarn dev`             | Starts local dev server at `localhost:4321`      |
| `yarn build`           | Build your production site to `./dist/`          |
| `yarn preview`         | Preview your build locally, before deploying     |
| `yarn astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `yarn astro -- --help` | Get help using the Astro CLI                     |


## 🧞 Publishing
When a document is published in Prismic, a Webhook is called to an AWS lambda function which then triggers a GitHub Action to deploy the site.
