import React from 'react';

import 'lazysizes/lazysizes.min.js';
import 'lazysizes/plugins/bgset/ls.bgset.min.js';

import multipleRender from "react-multiple-render";
import Slider from './components/slider';
import SliderImgs from './components/sliderImgs';
import QuotationFormFixed from './components/quotation_form_fixed';
import Contact from './components/contact';
import PostsSlider from './components/posts_slider';

multipleRender(Slider, '.ra-slider');

multipleRender(QuotationFormFixed, '.ra-quotation-form-fixed');

multipleRender(Contact, '.ra-contact');

multipleRender(PostsSlider, '.ra-posts-slider');

function hasClass(el, classNm) {
  if(el.className.indexOf(classNm) > -1) {
    return true;
  }

  return false;
}

function addClass(el, classNm) {
  if(!hasClass(el, classNm)) {
    el.className += ` ${classNm}`;
  }
}

function removeClass(el, classNm) {
  if(hasClass(el, classNm)) {
    const cls = el.className.replace(` ${classNm}`, '');
    el.className = cls;
  }
}

let els = document.querySelectorAll('.menu-item-has-children');

[...els].forEach(el => {

  el.addEventListener('click', (e) => {
     e.stopPropagation();
     e.currentTarget.preventDefault();
     console.log(this);
    const subMenu = e.currentTarget.querySelector('.sub-menu');
    if(hasClass(subMenu, 'sub-menu--open')) {
      removeClass(subMenu, 'sub-menu--open');
    } else {
      addClass(subMenu, 'sub-menu--open');
    }

  });

});
