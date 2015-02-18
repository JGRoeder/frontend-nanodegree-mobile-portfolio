# frontend-nanodegree-mobile-portfolio
P4 Udacity Front-end Nanodegree Program

[View Project](http://jgroeder.github.io/frontend-nanodegree-mobile-portfolio/views/pizza.html)

##To Build Project Locally

`clone` the repo, and navigate to its root directory

With gulpJs, nodeJs & Npm ( generally included in nodeJs ) installed, in the project directory simply run:

`npm install`

and once dependencies are finished installing

`gulp` or `gulp build`

will output a build in /dist

##Portfolio Index

In general, followed page speed insights recommendations.

Implemented gulp automation for:

- Image Minification
- CSS & Javascript inline includes & minification
- HTML Minification

Images were also posterized by hand where applicable, to manually reduce color depth.

##60 FPS, Main.js

- Moved capitalization from String.prototype.capitalize to a css rule
- De-nested the following function delcarations:
    * changleSliderLabel
    * determineDx
    * changePizzaSizes
    * sizedSwitcher
- Debounced onScroll Animation
- Moved DOM queries out of loops where applicable
- Switched for loops to stored value ( cached versions ) where applicable
- Switched animation from operating on left to more performant translateX property
- Switched # of moving pizzas from a static value to one calculated based on availwidth & availheight ( reduces overall count )
- Replaced querySelector & querySelectorAll with thie more performant counterparts where applicable.
- added translate3d property to moving pizza elements to force 3d acceleration **

*<sub> **also adds elements to their own composite layers. backface-visibility seems to trigger acceleration as well. Depending on whether or not the additional composite layers are helping or hindering performance, that might be a better alternative.</sub>*
