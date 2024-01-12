<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <meta name="description" content="">
    <meta name="google" content="notranslate">

   
    
<meta name="csrf-token" content="N-zAF9AfWLJhEEwH3EXj3DE09-88LNsFG2aY_D6Zt3SkH0A9j4eiHW1dkM9J-dQTcv4Vp1OpIDIViiyonjUb2w" />

     
  </head>

  <body>
    <h1 class="gap">0x04. Typescript</h1>

  <div data-react-class="tags/Tags" data-react-props="{&quot;tags&quot;:[{&quot;id&quot;:46,&quot;value&quot;:&quot;JavaScript&quot;,&quot;author_id&quot;:null,&quot;created_at&quot;:&quot;2022-06-16T01:59:38.000Z&quot;,&quot;updated_at&quot;:&quot;2022-06-16T01:59:38.000Z&quot;},{&quot;id&quot;:53,&quot;value&quot;:&quot;TypeScript&quot;,&quot;author_id&quot;:null,&quot;created_at&quot;:&quot;2022-06-16T01:59:38.000Z&quot;,&quot;updated_at&quot;:&quot;2022-06-16T01:59:38.000Z&quot;}]}" data-react-cache-id="tags/Tags-0"></div>

  <div data-react-class="projects/ProjectMetadata" data-react-props="{&quot;metadata&quot;:{&quot;author&quot;:&quot;Johann Kerbrat, Engineering Manager at Uber Works&quot;,&quot;weight&quot;:1,&quot;correction&quot;:{&quot;released&quot;:false,&quot;requires_auto_correction&quot;:false,&quot;requires_manual_correction&quot;:true},&quot;bpi&quot;:{&quot;current&quot;:true,&quot;started&quot;:false,&quot;in_second_deadline&quot;:false,&quot;starts_at&quot;:&quot;2024-01-10T06:00:00.000+02:00&quot;,&quot;ends_at&quot;:&quot;2024-01-11T06:00:00.000+02:00&quot;,&quot;second_deadline_at&quot;:&quot;2024-01-13T06:00:00.000+02:00&quot;}}}" data-react-cache-id="projects/ProjectMetadata-0"></div>
  <div class="panel panel-default" id="project-description">
  <div class="panel-body">
    <p><img src="https://s3.amazonaws.com/alx-intranet.hbtn.io/uploads/medias/2019/12/baea85b5e9a9fb5c36ec.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUSBVO6H7D%2F20240110%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240110T075050Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=522c2244ff85e6cae83c2e45d1440f0eca94058176bddb3aea021cbb06a1afac" alt="" loading='lazy' style="" /></p>

<h2>Resources</h2>

<p><strong>Read or watch</strong>:</p>

<ul>
<li><a href="/rltoken/waTSa9Mguj912pel9On57w" title="TypeScript in 5 minutes" target="_blank">TypeScript in 5 minutes</a></li>
<li><a href="/rltoken/iPO8DlHCGzc1jnojLoP9HA" title="TypeScript documentation" target="_blank">TypeScript documentation</a></li>
</ul>

<h2>Learning Objectives</h2>

<p>At the end of this project, you are expected to be able to <a href="/rltoken/PM-5MDItTT0M8Aaa2QIEyQ" title="explain to anyone" target="_blank">explain to anyone</a>, <strong>without the help of Google</strong>:</p>

<ul>
<li>Basic types in Typescript</li>
<li>Interfaces, Classes, and functions</li>
<li>How to work with the DOM and Typescript</li>
<li>Generic types</li>
<li>How to use namespaces</li>
<li>How to merge declarations</li>
<li>How to use an ambient Namespace to import an external library</li>
<li>Basic nominal typing with Typescript</li>
</ul>

<h2>Requirements</h2>

<ul>
<li>Allowed editors: <code>vi</code>, <code>vim</code>, <code>emacs</code>, <code>Visual Studio Code</code></li>
<li>All your files should end with a new line</li>
<li>All your files will be transpiled on Ubuntu 18.04</li>
<li>Your TS scripts will be checked with <code>jest</code> (version 24.9.* )</li>
<li>A <code>README.md</code> file, at the root of the folder of the project, is mandatory</li>
<li>Your code should use the <code>ts</code> extension when possible</li>
<li>The Typescript compiler should not show any warning or error when compiling your code</li>
</ul>

<h2>Configuration Files</h2>

<p>Please use these files for the following tasks</p>

<h3><code>package.json</code></h3>

<details>
<summary>Click to show/hide file contents</summary>
<pre>
<code>
{
  "name": "typescript_dependencies",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start-dev": "webpack-dev-server --open",
    "build": "webpack",
    "test": "jest"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@babel/plugin-proposal-export-default-from": "^7.5.2",
    "@babel/preset-typescript": "^7.7.2",
    "@types/jest": "^24.0.23",
    "@typescript-eslint/eslint-plugin": "^2.4.0",
    "@typescript-eslint/parser": "^2.4.0",
    "clean-webpack-plugin": "^3.0.0",
    "fork-ts-checker-webpack-plugin": "^1.5.1",
    "html-webpack-plugin": "^3.2.0",
    "jest": "^24.9.0",
    "source-map": "^0.7.3",
    "ts-jest": "^24.1.0",
    "ts-loader": "^6.2.0",
    "typescript": "^3.6.4",
    "webpack": "^4.41.2",
    "webpack-cli": "^3.3.9",
    "webpack-dev-server": "^3.8.2"
  }
}
</code>
</pre>
</details>

<h3><code>.eslintrc.js</code></h3>

<details>
<summary>Click to show/hide file contents</summary>
<pre>
<code>
module.exports =  {
  parser:  '@typescript-eslint/parser',
  extends:  [
    'plugin:@typescript-eslint/recommended',  // Uses the recommended rules from @typescript-eslint/eslint-plugin
  ],
  parserOptions:  {
    ecmaVersion:  2018,
    sourceType:  'module',
  },
  rules:  {
  },
};
</code>
</pre>
</details>

<h3><code>tsconfig.json</code></h3>

<details>
<summary>Click to show/hide file contents</summary>
<pre>
<code>
{
  "compilerOptions": {
    "outDir": "./dist/",
    "sourceMap": true,
    "noImplicitAny": true,
    "module": "es6",
    "target": "es5",
    "allowJs": true,
    "moduleResolution": "node",
        "skipLibCheck": true
  }
}
</code>
</pre>
</details>

<h3><code>webpack.config.js</code></h3>

<details>
<summary>Click to show/hide file contents</summary>
<pre>
<code>
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  entry: "./js/main.ts",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true
        }
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  devServer: {
    contentBase: "./dist"
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Development"
    })
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  }
};
</code>
</pre>
</details>

  </div>
</div>
</body>
</html>