# NUS FinTech Month

This repository contains the code for the frontend of the official NUS FinTech Website.

It is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Instructions for Setup:

1.  Ensure NodeJS, NPM and Yarn are installed in your workstation
2.  Clone this repository

        git clone https://github.com/NUS-Fintech-Society/SD_FTS_Month.git

3.  Install all module dependencies

        yarn

4.  Run the development server

        yarn dev

5.  Access the local version of the website at [http://localhost:3000](http://localhost:3000)

## Code Quality:

The project has in place:

- Material UI theme and typography configuration, which can be found in src/themes.
- makeStyles approach over writing .css files for styling.
- Husky for lint fixes prior to every commit

Please take a look at the example component in src/component/Example before getting started, and follow the conventions.

## Instructions for Pull Requests:

1. Ensure the branch you are working on is named semantically based on the task at hand. Eg. **add-faq-page**
2. Submit the Pull Request with **master** as the target branch.
3. If any, link the GitHub issue to the Pull Request.
4. Once all checks have passed, view the Preview website and verify if changes are as expected.
5. Assign a reviewer to review the Pull Request.
6. Once the reviewer has approved the Pull Request, merge it and delete the source branch.
