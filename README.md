# Chuck_Norris_Task

# Small chance that beauty will actually save the world, but Chuck Norris jokes most definitely will!!! :)

A small project that generates 100 unique Chuck Norris jokes from https://api.chucknorris.io" and saves the data in a csv file,
once the file is filled with the necessary amount of jokes it is uploaded to Dropbox,

---

## Requirements

For development, you will only need Node.js and a node global package, Yarn, installed in your environement.

### Node

- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
  Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

###

### Yarn installation

After installing node, this project will need yarn too, so just run the following command.

      $ npm install -g yarn

---

## Install

    $ git clone https://github.com/YOUR_USERNAME/PROJECT_TITLE
    $ cd PROJECT_TITLE
    $ npm install

## Configure app

Create an .env file in the root folder of the project and fill it with data as in .env.sample file, You will need:

- a Dropbox Dev Account and a token for the Dropbox API;
- to Specify a file path for the csv file

## Running the project

    $ npm start

## Running tests

    $ npm test

## Simple build for production

    $ npm build
