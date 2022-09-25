'use strict';

const DomElement = function(selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
  this.newElem = function() {
    if(this.selector.slice(0, 1) === '.') {
      const div = document.createElement('div');
      div.classList.add(this.selector.slice(1, this.selector.length));
      div.innerHTML = '<strong>Всем привет!</strong> Ураааа, получилось создать div.';
      div.style.cssText = `height:${this.height}px; 
      width:${this.width}px; font-size:${this.fontSize}px; background:${this.bg}`;
      document.body.prepend(div);
    } else if(this.selector.slice(0, 1) === '#') {
      const elem = document.createElement('p');
      elem.id = this.selector.slice(1, this.selector.length);
      elem.innerHTML = '<strong>Всем привет!</strong> Ураааа, получилось создать параграф.';
      elem.style.cssText = `height:${this.height}px; 
      width:${this.width}px; font-size:${this.fontSize}px; background:${this.bg}`;
      document.body.prepend(elem);
    }
  };
};

const div1 = new DomElement('.main', 100, 1000, 'yellow', 30);
const div2 = new DomElement('#main', 100, 1000, 'green', 30);

div1.newElem();
div2.newElem();
