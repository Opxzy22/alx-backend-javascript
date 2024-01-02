<!DOCTYPE html>
<html lang="en">
  <head>
      
  </head>

  <body>
    <div class="container">
      <div class="project row">
        <div class="col-xs-12 col-md-10 col-lg-8 contains-images">
            <h1 class="gap">0x00. ES6 BASICS</h1>
        </div>
      </div> 
      <div class="panel panel-default">
        <div class="panel-heading">
             <h3 class="panel-title">Concepts</h3>
        </div>
        <div class="panel-body">
            <ul>
                <li>
                 <a href="/concepts/541">Modern Javascript</a>
                </li>
                <li>
                 <a href="/concepts/542">Software Linter</a>
                </li>
            </ul>
        </div>
  </div>
  <div class="panel panel-default" id="project-description">
    <div class="panel-body">
        <p><img src="https://s3.amazonaws.com/alx-intranet.hbtn.io/uploads/medias/2019/12/08806026ef621f900121.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUSBVO6H7D%2F20240102%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240102T054802Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=c01cc4306d709571cc4996bc8c850f963a666a662e9c879070a4e07aa83931bc" alt="" loading='lazy' style="" /></p>
        <h2>Resources</h2>
        <p><strong>Read or watch</strong>:</p>
        <ul>
            <li><a href="/rltoken/NW1dFLFExQ12_hD8yvkV3A" title="ECMAScript 6 - ECMAScript 2015" target="_blank">ECMAScript 6 - ECMAScript 2015</a></li>
            <li><a href="/rltoken/sroRUsUvOZV28V99MHDenw" title="Statements and declarations" target="_blank">Statements and declarations</a></li>
            <li><a href="/rltoken/N2WLylppCtkkX3YFFtyUHw" title="Arrow functions" target="_blank">Arrow functions</a></li>
            <li><a href="/rltoken/kbw9gMO6sdeOKAY23SYVgA" title="Default parameters" target="_blank">Default parameters</a></li>
            <li><a href="/rltoken/erZfCvacuGVk9z1CQlJvYQ" title="Rest parameter" target="_blank">Rest parameter</a></li>
            <li><a href="/rltoken/d-ywF0As4yiTsobm9rtGZw" title="Javascript ES6 — Iterables and Iterators" target="_blank">Javascript ES6 — Iterables and Iterators</a></li>
        </ul>
        <h2>Learning Objectives</h2>
        <ul>
            <li>What ES6 is</li>
            <li>New features introduced in ES6</li>
            <li>The difference between a constant and a variable</li>
            <li>Block-scoped variables</li>
            <li>Arrow functions and function parameters default to them</li>
            <li>Rest and spread function parameters</li>
            <li>String templating in ES6</li>
            <li>Object creation and their properties in ES6</li>
            <li>Iterators and for-of loops</li>
        </ul>
        <h2>Requirements</h2>
<ul>
<li>All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x</li>
<li>Allowed editors: <code>vi</code>, <code>vim</code>, <code>emacs</code>, <code>Visual Studio Code</code></li>
<li>All your files should end with a new line</li>
<li>A <code>README.md</code> file, at the root of the folder of the project, is mandatory</li>
<li>Your code should use the <code>js</code> extension</li>
<li>Your code will be tested using the <a href="/rltoken/ECZpKsJ3fm1qRA7lDyhd_Q" title="Jest Testing Framework" target="_blank">Jest Testing Framework</a></li>
<li>Your code will be analyzed using the linter <a href="/rltoken/Ttd9w5jERwTErJW3DDbVoQ" title="ESLint" target="_blank">ESLint</a> along with specific rules that we&rsquo;ll provide</li>
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

<p>Add the files below to your project directory</p>

<h3><code>package.json</code></h3>
</code>
</pre>
</details>
<h3><code>babel.config.js</code></h3>
</code>
</pre>
</details>
<h3><code>.eslintrc.js</code></h3>

  </div>
</div>
    <h2 class="gap">Tasks</h2>
    <div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      0. Const or let?
    </h3>
    <div>
        <span class=>
          <h4>mandatory</h4>
        </span>
    </div>
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="251885"></span>
    <p>Modify</p>

<ul>
<li>function <code>taskFirst</code> to instantiate variables using <code>const</code></li>
<li>function <code>taskNext</code> to instantiate variables using <code>let</code></li>
</ul>

 </div>
   <div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      1. Block Scope
    </h3>
</div>

  <div class="panel-body">
    <span id="user_id" data-id="251885"></span>
  </div>

  <div class="list-group">
    <div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      2. Arrow functions
    </h3>
  </div>
     <!-- Task Body -->
    <p>Rewrite the following standard function to use ES6&rsquo;s arrow syntax of the function <code>add</code> (it will be an anonymous function after)</p>
  </div>
</div>
  <div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      3. Parameter defaults
    </h3>
  </div>
  <div class="panel-body">
    <span id="user_id" data-id="251885"></span>
     <p>Condense the internals of the following function to 1 line - without changing the name of each function/variable. </p>
     <p><em>Hint:</em> The key here to define default parameter values for the function parameters.</p>
  </div>
        
  </div>
</div>
   <div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      4. Rest parameter syntax for functions
    </h3>
    
  </div>
    
  <div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      5. The wonders of spread syntax
    </h3>

  </div>
   <div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      6. Take advantage of template literals
    </h3>
    
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="251885"></span>
   </div>
    </div>
    <div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      7. Object property value shorthand syntax
    </h3>
      <!-- Progress vs Score -->
    <!-- Task Body -->
    <p>Notice how the keys and the variable names are the same?</p>

<p>Modify the following function&rsquo;s <code>budget</code> object to simply use the keyname instead.</p>
 </div>
</div>

  <div class="panel-heading panel-heading-actions">
    <h3 class="panel-title">
      8. No need to create empty objects before adding in properties
    </h3>
   
  </div>

  <div class="panel-body">
    <span id="user_id" data-id="251885"></span>
    <!-- Progress vs Score -->
    <!-- Task Body -->
    <p>Rewrite the <code>getBudgetForCurrentYear</code> function to use ES6 computed property names on the <code>budget</code> object</p>

<p>The function should return an object with the following properties:</p>

  </div>
</div>
  

  </body>
</html>
