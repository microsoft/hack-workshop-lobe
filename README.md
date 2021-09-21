# Scenario : The Loved Mutt

According to the American Society for the Prevention of Cruelty to Animals (ASPCA), animal shelters receive about 3 million dogs annually - about 6 dogs per minute! While euthanasia rates have dropped, over 500,000 dogs are euthanized because they could not be matched with their original owners or an adoptive family.

Your team will aid a fictional adoption agency with deploying their website to the cloud. The application is designed to raise awareness of different dog breeds. A potential adopter can use the app to flip through pictures of various dogs and come up with potential names for each dog. This can be a great way to get a family excited about the possibility of adopting a new pet!

The agency has already created the website using [Svelte](https://svelte.dev/) and [Svelte Kit](https://kit.svelte.dev/) for the front end, [Azure Functions](https://docs.microsoft.com/azure/azure-functions/functions-overview?WT.mc_id=academic-28005-chrhar) and a [MongoDB API database](https://docs.mongodb.com/drivers/node/current/) for the back-end. They have provided documentation your team can review to gain an understanding of how it works, and run it locally for testing purposes.

## Prerequisites

Each team member will need an Azure account. With [Azure for Students](https://aka.ms/a4s?WT.mc_id=academic-28005-chrhar), you can access $100 in free credit, and a large suite of free services!

Your team should be familiar with the following:

- Git and GitHub
  - [Forking](https://docs.github.com/github/getting-started-with-github/quickstart/fork-a-repo) and [cloning](https://docs.github.com/github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository) repositories
  - [Creating and managing branches](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/making-changes-in-a-branch/managing-branches)
- HTML, CSS and JavaScript

Each member of your team will also need the following software installed:

- [Git](https://git-scm.com/downloads)
  - [Install git on macOS](https://git-scm.com/download/mac)
  - [Install git on Windows](https://git-scm.com/download/win)
  - [Install git on Linux](https://git-scm.com/download/linux)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Node.js](https://nodejs.org/)
  - [Install Node.js on Windows](https://docs.microsoft.com/windows/dev-environment/javascript/nodejs-on-windows?WT.mc_id=academic-28005-chrhar)
  - [Install Node.js on Linux or MacOS](https://github.com/nvm-sh/nvm#installing-and-updating)
- [Azure Functions Core Tools](https://www.npmjs.com/package/azure-functions-core-tools), which can be installed by running the following command (after Node.js and npm are installed)

  ```bash
  npm i -g azure-functions-core-tools@3 --unsafe-perm true
  ```

## Resources

A series of resources will be provided to help your team determine the appropriate steps for completion. The resources provided should provide your team with enough information to achieve each goal. If you get stuck, you can always ask a mentor for additional help.

A [sample of the site](https://calm-glacier-0b7804d10.azurestaticapps.net/) has been deployed so you can see how it looks in action.

## Exploring the source code

There are two key folders for the application: [src/routes](../src/routes), which contains the Svelte files used for the front-end, and [api](../api), which contains the Azure Functions used for the back-end. The flow of the application is as follows:

1. A user navigates to the page and is presented with the option to login (and sees a picture of a cute dog)
1. User authenticates using their GitHub credentials
1. After authenticating, the user can now name dogs. Each time they name a dog, it's saved to a Mongo API database.
1. The user can click on the "named dogs" link to review the list of dogs they've named

> **Note**: No updates to the application code will be made during this workshop. Your team will be able to successfully complete the workshop without any experience with Svelte. The only file your team will modify is *staticwebapp.config.json*.

![Flow of the app](./goals/media/app-flow.svg)

## Goals

Your team will obtain the starter, deploy the application to the cloud, enable authentication, and create and configure the database.

1. [Obtain the source code](./goals/0-obtain-source.md):
   The first step when working with any codebase is to download it. Your team's first goal will be to obtain the code from GitHub.
1. [Deploy to the cloud](./goals/1-deploy.md):
   Because the Loved Mutt wants the application to be publicly available, your team will need to deploy the application. For this workshop, your team will use Azure Static Web Apps, which is able to host the application and run the Azure Functions.
1. [Enable authentication](./goals/2-authentication.md):
   A key component of the app is allowing users to name dogs and have the names saved to a list. This requires authentication, which is built-in to Azure Static Web Apps. To achieve this goal, your team will configure the application so *only* GitHub authentication is enabled.
1. [Add a database](./goals/3-database.md):
   Saving information typically requires a database, and this application is no different. The code has already been added to use a Mongo API database, which is available through Cosmos DB on Azure. Your team will create a Cosmos DB account, and then update the application on Azure Static Web Apps to use your newly created database.

## Validation

This workshop is designed to be a goal-oriented self-exploration of Azure and related technologies. Your team can use the [validation tool](https://ashy-mushroom-0609d7c10.azurestaticapps.net/) to confirm the *Deploy to the cloud* and *Enable authentication* goals have been met. Validating the final goal of *Add a database* will be manual - you'll use the application your team deployed and confirm it works as expected.

## Where do we go from here?

This project is designed as a potential seed for future development. If you were to continue with this idea, your team could potentially:

- Use the [Petfinder API](https://www.petfinder.com/developers/) to create an application to match potential adopters with dogs
- Use the [Bing Maps API](https://docs.microsoft.com/bingmaps/getting-started/?WT.mc_id=academic-28005-chrhar) to search based on location
- Use [Custom Vision](https://azure.microsoft.com/services/cognitive-services/custom-vision-service/?WT.mc_id=academic-28005-chrhar) to identify dog breeds
