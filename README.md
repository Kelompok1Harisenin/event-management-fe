# EVENT MANAGEMENT FRONTEND 📆

## Features
* **_Vite + React_** created using vite
* **_Tailwind CSS_** created with tailwind configuration
* **_DaisyUI_** tailwind design component


## Contents
* [Getting started](#1)
* [Project structure](#2)


## <a name="1"></a>Getting started

### Installation
_Node.js_ 16 or higher is required.

### `npm install`

Install all dependencies 

### `npm run dev`

Runs the app in the development mode.\
Open [http://127.0.0.1:5173/](http://127.0.0.1:5173/) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


## <a name="2"></a>Project structure

- App
    - **src/** source code folder
        - **src/assets/** assets folder
        - **src/components/** components folder
        - **src/config/** config folder
        - **src/pages/** pages folder
        - **src/routes/** routes folder
        - **src/App.jsx** main _.jsx_ App 
        - **src/main.jsx** main root _.jsx_
        - **src/config.js** app configuration
    - **index.html** call the _main.jsx_ file

- Scripts & configuration files
    - **package.json** _npm_ options & scripts
    - **env-example.txt** example of _.env_ (require to be updated regularly when there are changes on _.env_)
    - **tailwind.config.js** contain the configuration for _Tailwind CSS_
    - **postcss.config.js** contain the configuration for _Tailwind Post CSS_
    - **vite.config.js** contain the configuration for _Vite_
    - **.editorconfig** contain editorconfig for _node.js_ (require to install EditorConfig for VS Code extension)
    - **.eslintrc.cjs** contain eslint configuration
