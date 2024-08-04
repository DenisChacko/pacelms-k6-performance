<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>k6 Load Testing README</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
        }
        h1, h2, h3 {
            color: #2c3e50;
        }
        pre {
            background-color: #f4f4f4;
            padding: 10px;
            border-radius: 5px;
            overflow-x: auto;
        }
        code {
            font-family: monospace;
            background-color: #f4f4f4;
            padding: 2px 4px;
            border-radius: 3px;
        }
        .highlight {
            background-color: #e7f3fe;
            border-left: 4px solid #2196F3;
            padding: 10px;
        }
        ul {
            list-style: none;
            padding: 0;
        }
        ul li {
            padding: 5px 0;
        }
    </style>
</head>
<body>

<h2>
    <details open="open">
        <summary class="normal">Table of Contents</summary>
        <h5>
          <ol>
            <li>
              <a href="#about-the-project">About the Project</a>
              <ul>
                <li>Below:</li>
                <li><a href="#built-with">Built With</a></li>
              </ul>
            </li>
            <li>
              <a href="#getting-started">Getting Started</a>
              <ul>
                <li><a href="#prerequisites">Prerequisites</a></li>
                <li><a href="#installation">Installation</a></li>
              </ul>
            </li>
            <li><a href="#usage">Usage</a></li>
            <li><a href="#reports">Reports</a></li>
            <li><a href="#docker">Docker</a></li>
          </ol>
        </h5>    
    </details>
</h2>

<h2 id="about-the-project">About the Project</h2>

<p>This project is based on k6, an open-source load testing tool that makes performance testing easy and productive.</p>

<p>Top Features:</p>
<ul>
    <li>Easy to script in JavaScript/ES6.</li>
    <li>Support for testing various protocols and systems.</li>
    <li>Extensive community and official libraries for common needs.</li>
    <li>Flexible configuration options for different testing scenarios.</li>
    <li>Ability to scale tests both locally and in the cloud.</li>
    <li>Rich visualization and reporting options.</li>
    <li>CI/CD integration for automated performance testing.</li>
    <li>Real-time performance metrics and health checks.</li>
    <li>Support for custom metrics and monitoring.</li>
</ul>

<h2 id="built-with">Built With</h2>
<ul>
    <li><a href="https://k6.io/">k6</a></li>
    <li><a href="https://nodejs.org/">Node.js</a></li>
    <li><a href="https://www.typescriptlang.org/">TypeScript</a></li>
</ul>

<h2 id="getting-started">Getting Started</h2>

<h3 id="prerequisites">Prerequisites</h3>
<p>The following software are required:</p>
<ul>
    <li>Node.js: Download and Install Node JS from <a href="https://nodejs.org/en/download/">https://nodejs.org/en/download/</a></li>
    <li>k6: Install k6 using the following command:</li>
</ul>
<pre><code>brew install k6</code></pre>
<p>or for Windows:</p>
<pre><code>choco install k6</code></pre>

<h3 id="installation">Installation</h3>
<ol>
    <li>Clone the repo using the URL:</li>
    <pre><code>https://github.com/YourUsername/k6-demo.git</code></pre>
    <li>Navigate to the folder and install npm packages using:</li>
    <pre><code>npm install</code></pre>
</ol>

<h2 id="usage">Usage</h2>
<p>Here's how to use the k6 testing script:</p>
<ol>
    <li>To run the tests, use the following command:</li>
    <pre><code>k6 run script.js</code></pre>
    <p>Replace <code>script.js</code> with the name of your test script.</p>
    <li>For more advanced usage, refer to the <a href="https://k6.io/docs/" target="_blank">k6 documentation</a>.</li>
</ol>

<h2 id="reports">Reports</h2>
<p>k6 provides various reporting options, including:</p>
<ul>
    <li>Summary reports in the console</li>
    <li>JSON output for custom analysis</li>
    <li>Integration with Grafana for real-time dashboards</li>
</ul>

<h2 id="sonarqube">SonarQube</h2>
<p>To include SonarQube in your project, follow these steps:</p>
<ol>
    <li>Install Java 17 and add the Java path to the "PATH" environment variable.</li>
    <li>Download SonarQube & Sonar Scanner:</li>
    <pre><code>brew install sonar
brew install sonar-scanner</code></pre>
    <li>Set the SonarQube environment variable:</li>
    <pre><code>export SONAR_HOME=/usr/local/Cellar/sonar-scanner/{version}/libexec
export SONAR=$SONAR_HOME/bin
export PATH=$SONAR:$PATH</code></pre>
</ol>

<h2 id="env">ENV</h2>
<p>For running the tests on a different env</p>
<ol>
    <li>You can set the environment variable BASE_URL and then run your K6 script. For example, in a Unix-like shell:</li>
    <pre><code>export BASE_URL=https://gql.kaplanlearn.com</code></pre>
    <li>For Windows Command Prompt:</li>
    <pre><code>set BASE_URL=https://gql.kaplanlearn.com</code></pre>
        <li>For PowerShell:</li>
    <pre><code>$env:BASE_URL = "https://gql.kaplanlearn.com"</code></pre>
</ol>

</body>
</html>
