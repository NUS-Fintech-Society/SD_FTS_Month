# DevOps_FTS_Month

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Deployment](#deployment)

## General info
This repository contains the code for the FTS month website.
The site diplays information on sign ups, dates, sponsers, and timeline of the events.

## Technologies
Project is created with:
* ReactJS
* Material UI
* NUS server (deployment)

## Setup
- To run this repository, git clone it to your local environment.
- cd into fintech-month, and key in "yarn install" to install all dependencies for the project.
- Type 'yarn start' in the terminal to run the website.

## Deployment

- Run yarn build to generate all the required files for deployment.
- In the build folder, create '.htaccess' file. (To prevent directory issues)
- Include the following lines of code in the file and save:

```javascript
RewriteEngine On
RewriteCond %{DOCUMENT_ROOT}%{REQUEST_URI} -f [OR]
RewriteCond %{DOCUMENT_ROOT}%{REQUEST_URI} -d
RewriteRule ^ - [L]
RewriteRule ^ ./index.html
```

- Refer to [this](https://dochub.comp.nus.edu.sg/cf/guides/network/vpn) guide to setup SoC VPN.
- After connection, key in "ssh nusfintechmonth@web1.comp.nus.edu.sg" in the terminal.
- Contact the Software Dev Director for password to proceed.
- Refer to [this](https://linuxize.com/post/how-to-use-scp-command-to-securely-transfer-files/) to scp files onto remote folder.

