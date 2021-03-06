import $ from 'jquery';

import {
  setFunctionGetBoundingClientRectHTMLElement,
  defaultProps,
  uniqId,
} from '../../helpers/utils';
import View from '../../View';
import { Dot, Mark, Tooltip } from '../../types';

describe('slider', () => {
  describe('view', () => {
    test('create view', () => {
      const view = new View();
      expect(view).toBeInstanceOf(View);

      expect(view).toEqual(
        expect.objectContaining({
          setProps: expect.any(Function),
          render: expect.any(Function),
          remove: expect.any(Function),
        })
      );
    });

    test('render view', () => {
      setFunctionGetBoundingClientRectHTMLElement();
      $('body').append('<div class="slider__wrapper"/>');
      const view = new View();
      const $parent = $('.slider__wrapper');
      view.render($parent);
      let $slider = $(`.${defaultProps.prefixCls}`, $parent);
      expect($slider.length).toBe(0);

      view.setProps(defaultProps);
      $slider = $(`.${defaultProps.prefixCls}`, $parent);
      expect($slider.length).toBe(1);
    });

    test('render view check count handle', () => {
      setFunctionGetBoundingClientRectHTMLElement();
      $('body').append('<div class="slider__wrapper1"/>');
      const view = new View();
      const $parent = $('.slider__wrapper1');
      view.setProps(defaultProps);
      view.render($parent);
      let $handle = $(`.${defaultProps.prefixCls}__handle`, $parent);
      expect($handle.length).toBe(1);

      view.setProps({ ...defaultProps, values: [20, 80] });
      $handle = $(`.${defaultProps.prefixCls}__handle`, $parent);
      expect($handle.length).toBe(2);

      view.setProps({ ...defaultProps, values: [20, 80, 50] });
      $handle = $(`.${defaultProps.prefixCls}__handle`, $parent);
      expect($handle.length).toBe(3);

      view.setProps({ ...defaultProps, values: [20] });
      $handle = $(`.${defaultProps.prefixCls}__handle`, $parent);
      expect($handle.length).toBe(1);
    });

    test('render view check count track', () => {
      setFunctionGetBoundingClientRectHTMLElement();
      $('body').append('<div class="slider__wrapper2"/>');
      const view = new View();
      const $parent = $('.slider__wrapper2');
      view.setProps(defaultProps);
      view.render($parent);
      let $tracks = $(`.${defaultProps.prefixCls}__track`, $parent);
      expect($tracks.length).toBe(1);

      let values: number[] = [20, 80];
      view.setProps({ ...defaultProps, values });
      $tracks = $(`.${defaultProps.prefixCls}__track`, $parent);

      expect($tracks.length).toBe(
        values.length > 1 ? values.length - 1 : values.length
      );
      values = [20, 80, 50];
      view.setProps({ ...defaultProps, values });
      $tracks = $(`.${defaultProps.prefixCls}__track`, $parent);

      expect($tracks.length).toBe(
        values.length > 1 ? values.length - 1 : values.length
      );
      values = [20];
      view.setProps({ ...defaultProps, values });
      $tracks = $(`.${defaultProps.prefixCls}__track`, $parent);

      expect($tracks.length).toBe(
        values.length > 1 ? values.length - 1 : values.length
      );
    });

    test('render view check count dots', () => {
      setFunctionGetBoundingClientRectHTMLElement();
      $('body').append('<div class="slider__wrapper3"/>');
      const view = new View();
      const $parent = $('.slider__wrapper3');
      let dot: Dot = { on: true };
      let props = { ...defaultProps };
      view.setProps(props);
      view.render($parent);
      let $dot = $(`.${defaultProps.prefixCls}__dot`, $parent);
      expect($dot.length).toBe(0);

      view.setProps({ ...defaultProps, dot });
      $dot = $(`.${defaultProps.prefixCls}__dot`, $parent);
      expect($dot.length).toBe(0);

      props = { ...defaultProps, dot, step: 10 };
      view.setProps(props);
      $dot = $(`.${defaultProps.prefixCls}__dot`, $parent);
      expect($dot.length).toBe(11);

      props = { ...defaultProps, dot, step: 50 };
      view.setProps(props);
      $dot = $(`.${defaultProps.prefixCls}__dot`, $parent);
      expect($dot.length).toBe(3);

      props = { ...defaultProps, dot, step: 50, mark: { on: true } };
      view.setProps(props);
      $dot = $(`.${defaultProps.prefixCls}__dot`, $parent);
      expect($dot.length).toBe(3);

      props = {
        ...defaultProps,
        dot,
        step: 50,
        mark: { on: true, values: [20] },
      };
      view.setProps(props);
      $dot = $(`.${defaultProps.prefixCls}__dot`, $parent);
      expect($dot.length).toBe(3);

      props = {
        ...defaultProps,
        dot,
        step: 50,
        mark: { on: true, values: [20], dot: true },
      };
      view.setProps(props);
      $dot = $(`.${defaultProps.prefixCls}__dot`, $parent);
      expect($dot.length).toBe(4);
    });

    test('render view check count marks', () => {
      setFunctionGetBoundingClientRectHTMLElement();
      const className = `slider__wrapper-${uniqId()}`;
      $('body').append(`<div class="${className}"/>`);
      const $parent = $(`.${className}`);
      const view = new View();
      let mark: Mark = { on: true };
      view.setProps({ ...defaultProps });
      view.render($parent);
      let $mark = $(`.${defaultProps.prefixCls}__mark`, $parent);
      expect($mark.length).toBe(0);
      view.setProps({ ...defaultProps, mark });
      $mark = $(`.${defaultProps.prefixCls}__mark`, $parent);
      expect($mark.length).toBe(0);
      view.setProps({
        ...defaultProps,
        mark,
        step: 10,
      });
      $mark = $(`.${defaultProps.prefixCls}__mark`, $parent);
      expect($mark.length).toBe(11);

      view.setProps({
        ...defaultProps,
        mark: { on: true, values: [15] },
        step: 20,
      });
      $mark = $(`.${defaultProps.prefixCls}__mark`, $parent);
      expect($mark.length).toBe(7);
    });

    test('render view check count tooltip', () => {
      setFunctionGetBoundingClientRectHTMLElement();
      const className = 'slider__wrapper5';
      const findClassName = `.${defaultProps.prefixCls}__tooltip`;
      $('body').append(`<div class="${className}"/>`);
      const view = new View();
      const $parent = $(`.${className}`);
      let tooltip: Tooltip = { on: true };
      view.setProps({ ...defaultProps });
      view.render($parent);
      let $mark = $(findClassName, $parent);
      expect($mark.length).toBe(0);

      view.setProps({ ...defaultProps, tooltip });
      $mark = $(findClassName, $parent);
      expect($mark.length).toBe(1);

      view.setProps({ ...defaultProps, tooltip, values: [20, 40] });
      $mark = $(findClassName, $parent);
      expect($mark.length).toBe(2);

      view.setProps({ ...defaultProps, tooltip, values: [20, 40, 30] });
      $mark = $(findClassName, $parent);
      expect($mark.length).toBe(3);

      view.setProps({ ...defaultProps, tooltip, values: [20] });
      $mark = $(findClassName, $parent);
      expect($mark.length).toBe(1);

      view.setProps({
        ...defaultProps,
        tooltip: { ...tooltip, always: true },
        values: [20],
      });
      $mark = $(`.${defaultProps.prefixCls}__tooltip_always`, $parent);
      expect($mark.length).toBe(1);
    });

    test('view check any subscribe, publish', () => {
      setFunctionGetBoundingClientRectHTMLElement();
      const className = 'slider__wrapper6';
      $('body').append(`<div class="${className}"/>`);
      const view = new View();
      const mockCallback = jest.fn((data: any): void => {});
      view.subscribe('anyCallback', mockCallback);
      const $parent = $(`.${className}`);
      view.setProps({ ...defaultProps });
      view.render($parent);
      view.publish('anyCallback', 5);
      expect(mockCallback.mock.calls.length).toBe(1);

      expect(mockCallback.mock.calls[0][0]).toBe(5);
    });

    test('onChange', () => {
      setFunctionGetBoundingClientRectHTMLElement({ width: 100, height: 100 });
      const className = `slider__wrapper-${uniqId()}`;
      $('body').append(`<div class="${className}"/>`);
      const view = new View();
      const $parent = $(`.${className}`);
      view.setProps(defaultProps);
      view.render($parent);
      let mockCallback = jest.fn(
        (options: {
          coordinateX?: number;
          coordinateY?: number;
          start: number;
          length: number;
          action?: string;
        }): void => {}
      );
      view.subscribe('onChange', mockCallback);
      let $rail = $(`.${defaultProps.prefixCls}__rail`, $parent);
      $rail.trigger('click');
      expect(mockCallback.mock.calls.length).toBe(1);
      expect(mockCallback.mock.calls[0][0]).toStrictEqual({
        coordinateX: 0,
        coordinateY: 0,
        start: 0,
        length: 100,
        action: 'onAfterChange',
      });
    });

    test('onBeforeChange slider view', () => {
      setFunctionGetBoundingClientRectHTMLElement({ width: 100, height: 100 });
      const className = `slider__wrapper-${uniqId()}`;
      $('body').append(`<div class="${className}"/>`);
      const view = new View();
      const $parent = $(`.${className}`);
      view.setProps({ ...defaultProps, dot: { on: true } });
      view.render($parent);
      let mockCallback = jest.fn((options: { index: number }): void => {});
      view.subscribe('onBeforeChange', mockCallback);
      const $handle = $(`.${defaultProps.prefixCls}__handle`, $parent);
      $handle.trigger('mousedown');
      expect(mockCallback.mock.calls.length).toBe(1);
      expect(mockCallback.mock.calls[0][0]).toStrictEqual({ index: 0 });
    });

    test('onAfterChange slider view', () => {
      setFunctionGetBoundingClientRectHTMLElement({
        width: 100,
        height: 100,
      });
      const className = `slider__wrapper-${uniqId()}`;
      $('body').append(`<div class="${className}"/>`);
      const $parent = $(`.${className}`);
      const view = new View();
      view.render($parent);
      view.setProps(defaultProps);
      let mockCallback = jest.fn((): void => {});
      view.subscribe('onAfterChange', mockCallback);
      window.dispatchEvent(new Event('mouseup'));
      expect(mockCallback.mock.calls.length).toBe(0);
      const $handle = $(`.${defaultProps.prefixCls}__handle`, $parent);
      $handle.trigger('mousedown');
      $handle.trigger('mouseup');
      expect(mockCallback.mock.calls.length).toBe(1);
    });

    test('onChange slider view', () => {
      setFunctionGetBoundingClientRectHTMLElement({
        width: 100,
        height: 100,
      });
      const className = `slider__wrapper-${uniqId()}`;
      $('body').append(`<div class="${className}"/>`);
      const $parent = $(`.${className}`);
      const view = new View();
      view.render($parent);
      view.setProps(defaultProps);
      let mockCallback = jest.fn(
        (options: {
          coordinateX?: number;
          coordinateY?: number;
          start: number;
          length: number;
          action?: string;
        }): void => {}
      );
      view.subscribe('onChange', mockCallback);
      expect(mockCallback.mock.calls.length).toBe(0);
      const $handle = $(`.${defaultProps.prefixCls}__handle`, $parent);
      $handle.trigger('mousedown');
      let event = new MouseEvent('mousemove');
      window.dispatchEvent(event);
      expect(mockCallback.mock.calls.length).toBe(1);
      expect(mockCallback.mock.calls[0][0]).toStrictEqual({
        coordinateX: 0,
        coordinateY: 0,
        start: 0,
        length: 100,
      });
    });

    test('handleWindowMouseUpForHandleFocusout slider view', () => {
      setFunctionGetBoundingClientRectHTMLElement({
        width: 100,
        height: 100,
      });
      const className = `slider__wrapper-${uniqId()}`;
      $('body').append(`<div class="${className}"/>`);
      const $parent = $(`.${className}`);
      const view = new View();
      view.render($parent);
      view.setProps(defaultProps);
      let mockCallback = jest.fn((options: { index: number }): void => {});
      view.subscribe('setIndex', mockCallback);
      const $handle = $(`.${defaultProps.prefixCls}__handle`, $parent);
      $handle.trigger('mousedown');
      let event = new MouseEvent('mouseup');
      window.dispatchEvent(event);
      expect(mockCallback.mock.calls.length).toBe(0);
      $handle.trigger('mouseup');
      window.dispatchEvent(event);
      expect(mockCallback.mock.calls.length).toBe(1);
      $handle.trigger('mouseup');
      let $rail = $(`.${defaultProps.prefixCls}__rail`, $parent);
      $handle.trigger('mouseup');
      $rail.trigger('mouseup');
      expect(mockCallback.mock.calls.length).toBe(1);
      $rail.trigger('click');
      $rail.trigger('mouseup');
      expect(mockCallback.mock.calls.length).toBe(1);
      window.dispatchEvent(event);
      expect(mockCallback.mock.calls.length).toBe(2);
    });
  });
});
