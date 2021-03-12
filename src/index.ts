import JQuery from 'jquery';

// (function handleWindowLoaded($: JQueryStatic) {
//   // eslint-disable-next-line no-param-reassign
//   console.log('JQuery $ : ', $);
//   console.log('$.fn1 : ', $.fn);
//   $.fn.slider = function makeCreateSlider(props?: Props): JQuery {
//     console.log('makeCreateSlider this : ', this);
//     return createSlider(this, props);
//   };
//   console.log('$.fn2 : ', $.fn);
// })(jQuery);

// console.log('JQuery : ', JQuery);

console.log('HELLO WORLD');

console.log('$$$ : ', $);
(function foo($: JQueryStatic): void {
  $.fn.slider = function makeCreateSlider(props?: { index: number }): JQuery {
    console.log('makeCreateSlider this : ', this);
    console.log('makeCreateSlider props : ', props);
    const a = () => {};
    const b = () => {};
    return this;
  };
})(JQuery);

console.log('$.fn : ', $.fn);
console.log('$.fn.slider : ', $.fn.slider);

const qwerty = () => {
  console.log('qwerty!!!');
  $.fn.slider = function makeCreateSlider(props?: { index: number }): JQuery {
    console.log('makeCreateSlider this : ', this);
    console.log('makeCreateSlider props : ', props);
    const a = () => {};
    const b = () => {};
    return this;
  };
  console.log('$.fn.slider !!!: ', $.fn.slider);
};

export default qwerty;
