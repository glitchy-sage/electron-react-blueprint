# Electron-react - Template

## Introduction
Template for creating electron-react applications. Setup in 2 parts, react frontend and electron backend. Run NPM Install on the initial directory.

### Note: This was built using webpack manually, there may still be some tweaks to configuration required.

## Instructions

1. Run npm install in root. This will also call the postinstall script which will update the lower packages.
` 
PS C:\electron-react> npm install 
`

2. Create React frontend in the 'react' subdirectory. You can run react on a dev server with npm start, or build your static files with npm build (Note: a postbuild script will run to move your finished build folder to the electron backend).
` 
PS C:\electron-react\react> npm start 
PS C:\electron-react\react> npm build 
`

3. Create Electron backend in the 'electron' subdirectory. You can run elecron on a dev server with npm start, or build your finished application with npm build.
` 
PS C:\electron-react\electron> npm start 
PS C:\electron-react\electron> npm build 
`

4. Don't be afraid to edit it and mess around! This is not tried and tested but surely we can get there.
