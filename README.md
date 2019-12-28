# Nate's Front End Web Template

As a web developer, instead of creating the file and folder structure for every front end site or app, I'm making this template to include:
1. A reset.css file.
2. A custom css file and javascript file.
3. Commonly used libraries such as Bootstrap, jQuery, and Popper.js (which Bootstrap relies on).
4. The Font Awesome icon set.

## Description:

Everything in this template is hosted locally and doesn't rely on a [CDN](https://www.cloudflare.com/learning/cdn/what-is-a-cdn/). All included files have been added to index.html.

#### Reset CSS:
* assets/css/meyerweb.karbassi.2013.reset.css. Found at [https://gist.github.com/karbassi/5256094](https://gist.github.com/karbassi/5256094). A Google search led to an un-modified fork of this original repo.

#### Custom style.css and script.js files:
* assets/css/style.css
  * Bootstrap's default mobile-first breakpoints have been included. The documentation can be viewed at [https://getbootstrap.com/docs/4.4/layout/overview/#responsive-breakpoints](https://getbootstrap.com/docs/4.4/layout/overview/#responsive-breakpoints).
* assets/js/script.js

#### Bootstrap v4.4.1:
* assets/css/bootstrap-4.4.1.min.css
* assets/js/bootstrap-4.4.1.min.js

#### jQuery v3.4.1:
* assets/js/jquery-3.4.1.min.js

#### Popper.js v1.16.0:
* assets/js/popper-1.16.0.min.js

#### Font Awesome Free v5.12.0:
* assets/css/fontawesome-free-5.12.0.all.min.css
  * assets/webfonts
* assets/js/fontawesome-free-5.12.0.all.min.js

## Installation and Use:

Please feel free to use this template as you wish. This repo consists of front end web files. See the comments inside each file for further information.

#### index.html:
* Font Awesome: You can use either the .js version or the .css version. If you do use the .js version, the assets/webfonts folder can be deleted. I've opted to use the .css version in order to account for users with older computers. See [https://fontawesome.com/how-to-use/on-the-web/other-topics/performance](https://fontawesome.com/how-to-use/on-the-web/other-topics/performance) for more information.

#### script.js:
* A couple empty functions have already been included. Delete them if they are deemed unnecessary. See [https://www.sitepoint.com/jquery-document-ready-plain-javascript](https://www.sitepoint.com/jquery-document-ready-plain-javascript/) for more information.
