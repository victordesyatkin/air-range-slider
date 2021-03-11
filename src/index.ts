import $ from 'jquery';

import { Props } from './types';
import { Slider, createSlider } from './slider/index';
import './style.scss';

// (function handleWindowLoaded($: JQueryStatic) {
//   // eslint-disable-next-line no-param-reassign
//   console.log('JQuery $ : ', $);
//   console.log('$.fn1 : ', $.fn);
//   $.fn.slider = function makeCreateSlider(props?: Props): JQuery {
//     console.log('makeCreateSlider this : ', this);
//     return createSlider(this, props);
//   };
//   console.log('$.fn2 : ', $.fn);
// })(JQuery);

// console.log('JQuery : ', JQuery);

console.log('$$$ : ', $);

$.fn.slider = function makeCreateSlider(props?: Props): JQuery {
  console.log('makeCreateSlider this : ', this);
  return createSlider(this, props);
};

console.log('$.fn : ', $.fn);

console.log('createSlider : ', createSlider);

export default Slider;
