# Electron-react - Template

## Introduction

Template for creating electron-react applications. Setup in 2 parts, react frontend and electron backend. Run NPM Install on the initial directory.

#### Note: This was built using webpack manually, there may still be some tweaks to configuration required

## Instructions

<br/>

1. Run npm install in root. This will also call the postinstall script which will update the lower packages.

```
PS C:\electron-react> npm install 
```

<br/>

2. Learn the root-level command below

```
PS C:\electron-react\react> npm start 
PS C:\electron-react\react> npm build 
```

<br/>

3. Don't be afraid to edit it and mess around! This is not tried and tested but surely we can get there.

## Root-Level Commands

<br/>

1. npm install - Runs install in root file and electron/react sub-directories.

```
PS C:\electron-react> npm install 
```

<br/>

2. npm run update - Runs update in root file and electron/react sub-directories. Note: Must be NPM RUN UPDATE, not just NPM UPDATE.

```
PS C:\electron-react> npm run update 
```

<br/>

3. Serve Development Enviroment Commands

<br/>

- npm start - Runs headless react server, then launches electron afterwards to communicate with the localhost:3000.

```
PS C:\electron-react> npm start 
```

<br/>

- npm run serve:react - Runs react server on localhost:3000, then opens browser for viewing.

```
PS C:\electron-react> npm run serve:react 
```

<br/>

- npm run serve:electron - Runs electron to communicate with the localhost:3000.

```
PS C:\electron-react> npm run serve:electron 
```

<br/>
3. Application Build Commands

<br/>

- npm run build - Runs build command for react, once completed it then runs electron build.

```
PS C:\electron-react> npm run build 
```

<br/>

- npm run build:react - Runs build command for react. Note: At the end of this command, the build file is copied to the electron directory as "public". This is for the next phase of development.

```
PS C:\electron-react> npm run build:react 
```

<br/>

- npm run build:electron - Runs build command for electron. Note: This command utilizes the config file found in './electron-react/electron/electron-builder.json. In order to edit these configurations I recommend reading up on [electron-builder](https://www.electron.build/ "electron-builder docs")

```
PS C:\electron-react> npm run build:electron 
```

<br/>

## React-Level Commands

<br/>

1. npm install - Runs install in react file.

```
PS C:\electron-react\react> npm install 
```

<br/>

2. Start Commands

<br/>

- npm start - Runs react server on localhost:3000, then opens browser for viewing.

```
PS C:\electron-react\react> npm start 
```

<br/>

- npm run start:headless - Runs react server on localhost:3000, this does not open a browser for your viewing.

```
PS C:\electron-react\react> npm run start:headless 
```

3. Build Commands

<br/>

- npm run build - Build's react files into static files and places into './build' directory.

```
PS C:\electron-react\react> npm run build 
```

<br/>

- npm run postbuild - Note: This is run automatically after build, you should not need to call this manually. Runs Powershell script to move './build/' folder to electron folder as './public/'.

```
PS C:\electron-react\react> npm run postbuild 
```

<br/>

## Electron-Level Commands

<br/>

1. npm install - Runs install in electron file.

```
PS C:\electron-react\electron> npm install 
```

<br/>

2. npm start - Runs electron as specified in the './src/main.js' file.

```
PS C:\electron-react\electron> npm start 
```
