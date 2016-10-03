# Website Performance Optimization

The goal of this project was to optimize this online portfolio for speed. The assignment had two parts.
* First, we were challenged to optimize the critical rendering path to make the ```index.html``` page render as quickly as possible by applying the techniques we learned in the _Web Performance Optimization_ course.
* Second, we were challenged to optimize Frames per Second in the ```views/pizza.html``` page by applying the techniques we learned in the _Browser Rendering Optimization_ course.

You can view my optimized portfolio on my github page [here](https://chspanos.github.io/mobile-portfolio).

###  Part 1: Optimize PageSpeed Insights score for index.html

My optimized portfolio achieved a mobile score of **95/100** and a desktop score of **97/100** on [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/).

To obtain this score, I made the following optimizations to the code:
* Used media queries to take ```print.css``` out of the critical rendering path
* Made the Google analytics script asynchronous
* Used grunt-responsive-images to resize the ```pizzeria.jpg``` image to a width of 100px for use on the ```index.html``` page
* Moved the Google fonts styles to the bottom of ```index.html``` and deferred loading
* In-lined ```style.css```
* Used grunt tools to minify the CSS, JavaScript files, and images, then updated all references in ```index.html``` and the project.html code to use the minified versions
* Used grunt-responsive-images to resize the ```pizzeria.jpg``` image to a width of 750px to reduce load time on the ```pizza.html``` page.

#### Viewing my optimized portfolio

The easiest way to view my optimized website is via my github page [here](https://chspanos.github.io/mobile-portfolio).

Alternatively, you can:
1. Clone a copy of my website from my github repository
[here](https://github.com/chspanos/mobile-portfolio).
2. Start your favorite web browser.
3. Open the root directory version of ```index.html``` in the web browser.

From my github repository, you can also inspect the project files.
* A complete copy of the original un-optimized portfolio is stored the subdirectory ```src/```. You can use this to inspect the starting point for this project.
* The ```dist/``` subdirectory contains all the minified and optimized CSS, JS, and image resources. These were generated automatically using grunt.
* The modified ```index.html``` and sub-project html files are located in the root directory.

#### How I used grunt to automate optimizations

1. If you don't already have it, download Grunt following the instructions given on the [Grunt Getting Started page](http://gruntjs.com/getting-started).
2. Change to the project root directory
3. In my root directory, you will find the ```package.json``` and ```Gruntfile.js``` files I used for my automations.
4. Install the project dependencies with ```npm install```. My ```Gruntfile.js``` requires installing the following plug-ins:
  ```
  npm install grunt-responsive-images --save-dev
  npm install grunt-contrib-clean --save-dev
  npm install grunt-contrib-copy --save-dev
  npm install grunt-mkdir --save-dev
  npm install grunt-contrib-imagemin --save-dev
  npm install grunt-contrib-cssmin --save-dev
  npm install grunt-contrib-uglify --save-dev
  ```
5. Run Grunt with ```grunt```.

This will automatically perform the following actions:
* Clean and create a new subdirectory called ```dist/``` under the root directory with subdirectories for CSS files, JS files, and images.
* Resize selected images using ```responsive_images```
* Optimize images using ```imagemin```
* Minify the CSS files using ```cssmin```
* Minify the JavaScript files using ```uglify```
* Store the optimized versions in the ```dist/``` subdirectory.

Note: You can run these steps individually, using ```grunt <option-name>```. For example, to minify the CSS files, run ```grunt cssmin```.

### Part 2: Optimize Frames per Second in pizza.html

The goal of this part of the project was to get rid of jank in ```views/pizza.html```. Specifically, we were assigned two challenges:
* Frame Rate - Optimize ```views/js/main.js``` to make ```pizza.html``` render at a consistent 60 fps when scrolling.
* Computation Efficiency - Reduce the time to resize the pizzas to less than 5 ms when using the pizza size slider.

To achieve these goals, I made the following optimizations to the code (All changes are in ```views/js/main.js``` unless otherwise indicated):
* Refactored the ```changePizzaSizes()``` function to eliminate a forced synchronous layout.
* Refactored the ```updatePositions()``` function to eliminate another forced synchronous layout.
* Incorporated a ```requestAnimationFrame``` into the scroll function to smooth rendering.
* Used a more efficient DOM selector to select the moving pizzas in ```updatePositions()```
* Refactored the code for generating moving pizzas (See the ```eventListener``` code for ```DOMContentLoaded```) to create only as many moving pizzas as fit on the screen.
* Since there are now many fewer moving pizzas, I put each one into its own layer with a ```will-change``` directive in ```views/css/style.css```.

#### Customization with Bootstrap
The portfolio was built on Twitter's <a href="http://getbootstrap.com/">Bootstrap</a> framework.

* <a href="http://getbootstrap.com/css/">Bootstrap's CSS Classes</a>
* <a href="http://getbootstrap.com/components/">Bootstrap's Components</a>
