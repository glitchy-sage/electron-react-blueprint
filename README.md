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

2. Create React frontend in the 'react' subdirectory. You can run react on a dev server with npm start, or build your static files with npm build (Note: a postbuild script will run to move your finished build folder to the electron backend).

```
PS C:\electron-react\react> npm start 
PS C:\electron-react\react> npm build 
```

<br/>

3. Create Electron backend in the 'electron' subdirectory. You can run elecron on a dev server with npm start, or build your finished application with npm build.

```
PS C:\electron-react\electron> npm start 
PS C:\electron-react\electron> npm build 
```

<br/>

4. Don't be afraid to edit it and mess around! This is not tried and tested but surely we can get there.

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
PS C:\electron-react\electron> npm start 
```

<br/>

- npm run serve:react - Runs react server on localhost:3000, then opens browser for viewing.

```
PS C:\electron-react\electron> npm run serve:react 
```

<br/>

- npm run serve:electron - Runs electron to communicate with the localhost:3000.

```
PS C:\electron-react\electron> npm run serve:electron 
```

<br/>
3. Application Build Commands

<br/>

- npm run build - Runs build command for react, once completed it then runs electron build.

```
PS C:\electron-react\electron> npm run build 
```

<br/>

- npm run build:react - Runs build command for react. Note: At the end of this command, the build file is copied to the electron directory as "public". This is for the next phase of development.

```
PS C:\electron-react\electron> npm run build:react 
```

<br/>

- npm run build:electron - Runs build command for electron. Note: This command utilizes the config file found in './electron-react/electron/electron-builder.json. In order to edit these configurations I recommend reading up on [electron-builder](https://www.electron.build/ "electron-builder docs")

```
PS C:\electron-react\electron> npm run build:electron 
```
