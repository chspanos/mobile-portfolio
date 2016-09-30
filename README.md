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

#### How I used grunt to automate optimizations

(insert instruction here)


### Part 2: Optimize Frames per Second in pizza.html

To optimize views/pizza.html, you will need to modify views/js/main.js until your frames per second rate is 60 fps or higher. You will find instructive comments in main.js.

You might find the FPS Counter/HUD Display useful in Chrome developer tools described here: [Chrome Dev Tools tips-and-tricks](https://developer.chrome.com/devtools/docs/tips-and-tricks).


#### Customization with Bootstrap
The portfolio was built on Twitter's <a href="http://getbootstrap.com/">Bootstrap</a> framework.

* <a href="http://getbootstrap.com/css/">Bootstrap's CSS Classes</a>
* <a href="http://getbootstrap.com/components/">Bootstrap's Components</a>
