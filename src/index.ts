import jQuery from 'jquery';

import { Props } from './types';
import Slider from './Slider';

(function makeSlider($: JQueryStatic) {
  // eslint-disable-next-line no-param-reassign
  $.fn.slider = function makeCreateSlider(props?: Props): JQuery {
    return Slider.createSlider(this, props);
  };
})(jQuery);

export default Slider;
