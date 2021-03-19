# Air range slider

Customizable jQuery range slider, built with es5 and css-flexbox.

## Quick start

1. Install plugin via npm or you can download files directly from [GitHub](https://github.com/victordesyatkin/air-range-slider.git):

```
npm i air-range-slider
```

2. Import JQuery version 3.5.1 and plugin in your project:

```javascript
import $ from 'jquery';
import 'air-range-slider';
import 'air-range-slider/dist/style.css';
```

3. Initialize plugin:

```html
<div class="my-selector"></div>
```

```javascript
$('.my-selector').slider([options]);
```

4. Access instance of plugin:

```javascript
$('.my-selector').data('slider');
```

## Demo and docs

- [In Russian](https://github.com/victordesyatkin/slider)
