

<h1><strong>Wodo GameHub Web UI 1.0</strong> <br>Web interface for the Wodo Gaming Hub</h1>

<p>
	<img src="https://raw.githubusercontent.com/wodo-platform/wg-web-ui/master/app/img/_src/branding/wodo_brandingimg/dst/svg?token=AAESYQUT2HAOJ2HJP2UGRVTBSI5BS" alt="Wodo Gaming">
</p>

<p>Author: <a href="https://bekirdag.com" target="_blank">Bekir Dağ</a></p>

<p>Wodo Gaming Hub Web UI is an HTML5 template with Gulp, Sass, Browsersync, Autoprefixer, Clean-CSS, Uglify, Rsync and Bower (libs path) support. The template contains a <strong>.htaccess</strong> file with caching rules for web server.</p>

<p><strong>Wodo Game Hub Web UI</strong> Start Template uses the best practices of web development.</p>

<p>Cross-browser compatibility: IE9+.</p>

<p>The template uses a Sass with <strong>Sass</strong> or <strong>Scss</strong> syntax (optional).</p>

<h2>How to</h2>

<ol>
	<li>Install Node Modules: <strong>npm i</strong>;</li>
	<li>Run the template: <strong>gulp</strong>.</li>
</ol>

<h2>Gulp tasks:</h2>

<ul>
	<li><strong>gulp</strong>: run default gulp task (sass, js, watch, browserSync) for web development;</li>
</ul>

<h2>Rules for working with the starting HTML template</h2>

<ol>
	<li>All HTML files should have similar initial content as in <strong>app/index.html</strong>;</li>
	<li><strong>Template Basic Images Start</strong> comment in app/index.html - all your custom template basic images (og:image for social networking, favicons for a variety of devices);</li>
	<li><strong>Custom Browsers Color Start</strong> comment in app/index.html: set the color of the browser head on a variety of devices;</li>
	<li><strong>Custom HTML</strong> comment in app/index.html - all your custom HTML;</li>
	<li>For installing new jQuery library, just run the command "<strong>bower i plugin-name</strong>" in the terminal. Libraries are automatically placed in the folder <strong>app/libs</strong>. Bower must be installed in the system (npm i -g bower). Then place all jQuery libraries paths in the <strong>'libs'</strong> task (gulpfile.js);</li>
	<li>All custom JS located in <strong>app/js/common.js</strong>;</li>
	<li>All Sass vars placed in <strong>app/sass/_vars.sass | app/scss/_vars.scss</strong>;</li>
	<li>All Bootstrap media queries placed in <strong>app/sass/_media.sass | app/scss/_media.scss</strong>;</li>
	<li>All libraries CSS styles placed in <strong>app/sass/_libs.sass | app/scss/_libs.scss</strong>;</li>
	<li>Rename <strong>ht.access</strong> to <strong>.htaccess</strong> before place it in your web server. This file contain rules for files caching on web server.</li>
</ol>


<h2>Popup</h2>

<p>To open any link inside a popup, you need to add a few attributes to the element such as below: </p>

```html
<a class="button purple login withimage popup_link" popup_title="Hello World!" popup_content="/popup_sample/popup_sample.html">SIGN IN/ SIGN UP</a>
```

<p>You can find an example on popup_sample/popup_sample.html to see how to add an image and how to wrap the buttons</p>

<h2>Slider</h2>

<p>If you create the html as follows, it builds the slider up out of the box</p>

```html
<div class="slider">
	<div class="items_container">
		<div class="slide_item">
			<div class="slide_item_content">
				<div class="sample_container1">
					<p>Some content</p>
				</div>
				<div class="sample_container2">
					<p>Some other content</p>
				</div>
			</div>
		</div>
		<div class="slide_item">
			<div class="slide_item_content">
				<div class="sample_container1">
					<p>Some content</p>
				</div>
				<div class="sample_container2">
					<p>Some other content</p>
				</div>
			</div>
		</div>
	</div>
	
</div>
```
