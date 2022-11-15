<center><h1>Electron-React-Blueprint</h1></center>
<center>
    <img src="./react/public/favicon.ico" title="Electron Logo" alt="Electron Logo" style="width: 25%; height: auto;"/>
</center>

<center><h2>Introduction</h2></center>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Template for creating electron-react applications. Setup in 2 parts, react frontend and electron backend. Run NPM Install on the initial directory.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Note: This was built using webpack manually, there may still be some tweaks to configuration required.

<center><h2>Instructions</h2></center>

<center><h3>&darr; Learn the root-level commands below &darr;</h3></center>

<br/>

<center><h3>Root-Level Commands</h3></center>

1. npm install - Runs install in root file and electron/react sub-directories. Note: This command will also run npm run postinstall automatically afterwards. This script is responsible for installing lower dependencies.

```powershell
PS C:\electron-react> npm install 
```

<br/>

2. npm run update - Runs update in root file and electron/react sub-directories. Note: Must be NPM RUN UPDATE, not just NPM UPDATE.

```powershell
PS C:\electron-react> npm run update 
```

<br/>

3. Serve Development Enviroment Commands

- npm start - Runs headless react server, then launches electron afterwards to communicate with the localhost:3000.

```powershell
PS C:\electron-react> npm start 
```

<br/>

- npm run serve:react - Runs react server on localhost:3000, then opens browser for viewing.

```powershell
PS C:\electron-react> npm run serve:react 
```

<br/>

- npm run serve:electron - Runs electron to communicate with the localhost:3000.

```powershell
PS C:\electron-react> npm run serve:electron 
```

<br/>
3. Application Build Commands

- npm run build - Runs build command for react, once completed it then runs electron build.

```powershell
PS C:\electron-react> npm run build 
```

<br/>

- npm run build:react - Runs build command for react. Note: At the end of this command, the build file is copied to the electron directory as "public". This is for the next phase of development.

```powershell
PS C:\electron-react> npm run build:react 
```

<br/>

- npm run build:electron - Runs build command for electron. Note: This command utilizes the config file found in './electron-react/electron/electron-builder.json. In order to edit these configurations I recommend reading up on [electron-builder](https://www.electron.build/ "electron-builder docs").

```powershell
PS C:\electron-react> npm run build:electron 
```

<br/>

<center><h3>React-Level Commands</h3></center>

1. npm install - Runs install in react file.

```powershell
PS C:\electron-react\react> npm install 
```

<br/>

2. Start Commands

- npm start - Runs react server on localhost:3000, then opens browser for viewing.

```powershell
PS C:\electron-react\react> npm start 
```

<br/>

- npm run start:headless - Runs react server on localhost:3000, this does not open a browser for your viewing.

```powershell
PS C:\electron-react\react> npm run start:headless 
```

<br/>

3. Build Commands

- npm run build - Build's react files into static files and places into './build' directory.

```powershell
PS C:\electron-react\react> npm run build 
```

<br/>

- npm run postbuild - Note: This is run automatically after build, you should not need to call this manually. Runs Powershell script to move './build/' folder to electron folder as './public/'.

```powershell
PS C:\electron-react\react> npm run postbuild 
```

<br/>

<center><h3>Electron-Level Commands</h3></center>

1. npm install - Runs install in electron file.

```powershell
PS C:\electron-react\electron> npm install 
```

<br/>

2. npm start - Runs electron as specified in the './src/main.js' file.

```powershell
PS C:\electron-react\electron> npm start 
```
