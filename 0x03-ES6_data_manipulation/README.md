<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <meta name="description" content="">
   </head>
   <body>
         <h1 class="gap">0x03. ES6 data manipulation</h1>
          <div class="panel panel-default" id="project-description">
          <div class="panel-body">
          <p><img src="https://s3.amazonaws.com/alx-intranet.hbtn.io/uploads/medias/2019/12/6ab7bec4727cb5c91257.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUSBVO6H7D%2F20240108%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240108T233139Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=501e01a1492a9cc51cd281e97f942db1df03a002c79e93d70b36f711d01f22e8" alt="" loading='lazy' style="" /></p>

<h2>Resources</h2>

<p><strong>Read or watch</strong>:</p>

<ul>
<li><a href="/rltoken/bcXqK1IaIHtrZ45sv0RxsQ" title="Array" target="_blank">Array</a></li>
<li><a href="/rltoken/YZ5RtzAPTaWtF00MYbXuVw" title="Typed Array" target="_blank">Typed Array</a></li>
<li><a href="/rltoken/Ch8vq39y9QnlTMr8CymgEg" title="Set Data Structure" target="_blank">Set Data Structure</a></li>
<li><a href="/rltoken/W29MV3f8Ii4HmeJSALNIpw" title="Map Data Structure" target="_blank">Map Data Structure</a></li>
<li><a href="/rltoken/pSetFVFeIR660GPE0flPdg" title="WeakMap" target="_blank">WeakMap</a></li>
</ul>

<h2>KNOWLEDGE CHECK</h2>
<ul>
<li>How to use map, filter and reduce on arrays</li>
<li>Typed arrays</li>
<li>The Set, Map, and Weak link data structures</li>
</ul>

<h2>Requirements</h2>

<ul>
<li>All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x</li>
<li>Allowed editors: <code>vi</code>, <code>vim</code>, <code>emacs</code>, <code>Visual Studio Code</code></li>
<li>All your files should end with a new line</li>
<li>A <code>README.md</code> file, at the root of the folder of the project, is mandatory</li>
<li>Your code should use the <code>js</code> extension</li>
<li>Your code will be tested using <code>Jest</code> and the command <code>npm run test</code></li>
<li>Your code will be verified against lint using ESLint</li>
<li>Your code needs to pass all the tests and lint. You can verify the entire project running <code>npm run full-test</code></li>
<li>All of your functions must be exported</li>
</ul>

<h2>Setup</h2>

<h3>Install NodeJS 12.11.x</h3>

<p>(in your home directory): </p>

<pre><code>curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
</code></pre>

<pre><code>$ nodejs -v
v12.11.1
$ npm -v
6.11.3
</code></pre>

<h3>Install Jest, Babel, and ESLint</h3>

<p>in your project directory, install Jest, Babel and ESList by using the supplied <code>package.json</code> and run <code>npm install</code>.</p>

<h2>Configuration files</h2>

<p>Add the following files to your project directory </p>

<h3><code>package.json</code></h3>

<details>
<summary>Click to show/hide file contents</summary>
<pre>
<code>
{
  "scripts": {
    "lint": "./node_modules/.bin/eslint",
    "check-lint": "lint [0-9]*.js",
    "dev": "npx babel-node",
    "test": "jest",
    "full-test": "./node_modules/.bin/eslint [0-9]*.js && jest"
  },
  "devDependencies": {
    "@babel/core": "^7.6.0",
    "@babel/node": "^7.8.0",
    "@babel/preset-env": "^7.6.0",
    "eslint": "^6.4.0",
    "eslint-config-airbnb-base": "^14.0.0",
    "eslint-plugin-import": "^2.18.2",
    "eslint-plugin-jest": "^22.17.0",
    "jest": "^24.9.0"
  }
}
</code>
</pre>
</details>

<h3><code>babel.config.js</code></h3>

<details>
<summary>Click to show/hide file contents</summary>
<pre>
<code>
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};
</code>
</pre>
</details>

<h3><code>.eslintrc.js</code></h3>

<details>
<summary>Click to show/hide file contents</summary>
<pre>
<code>
module.exports = {
  env: {
    browser: false,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:jest/all',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['jest'],
  rules: {
    'max-classes-per-file': 'off',
    'no-underscore-dangle': 'off',
    'no-console': 'off',
    'no-shadow': 'off',
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement',
    ],
  },
  overrides:[
    {
      files: ['*.js'],
      excludedFiles: 'babel.config.js',
    }
  ]
};
</code>
</pre>
</details>

<h3>and&hellip;</h3>

<p>Don&rsquo;t forget to run <code>$ npm install</code> when you have the <code>package.json</code></p>

  </div>
</div>
 contains the following students in order: </p>

<ul>
<li><code>Guillaume</code>, id: <code>1</code>, in <code>San Francisco</code></li>
<li><code>James</code>, id: <code>2</code>, in <code>Columbia</code></li>
<li><code>Serena</code>, id: <code>5</code>, in <code>San Francisco</code></li>
</ul>
</body>
</html>
