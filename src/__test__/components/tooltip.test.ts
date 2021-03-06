import $ from 'jquery';

import TooltipView from '../../components/TooltipView';
import {
  setFunctionGetBoundingClientRectHTMLElement,
  defaultProps,
} from '../../helpers/utils';
import { DefaultProps, Addition } from '../../types';

describe('tooltip', () => {
  describe('view', () => {
    test('create tooltip view', () => {
      const addition = { index: 0 };
      const view = new TooltipView(addition);
      expect(view).toBeInstanceOf(TooltipView);

      expect(view).toEqual(
        expect.objectContaining({
          setProps: expect.any(Function),
          render: expect.any(Function),
          remove: expect.any(Function),
        })
      );
    });

    test('render tooltip view', () => {
      setFunctionGetBoundingClientRectHTMLElement();
      $('body').append('<div class="slider__wrapper"/>');
      const view = new TooltipView({ index: 0 });
      const $parent = $('.slider__wrapper');
      view.render($parent);
      let $element = $(`.${defaultProps.prefixCls}__tooltip`, $parent);
      expect($element.length).toBe(0);

      view.setProps(defaultProps);
      $element = $(`.${defaultProps.prefixCls}__tooltip`, $parent);
      expect($element.length).toBe(0);

      view.setAddition({ index: 0, value: 47 });
      view.setProps(defaultProps);
      $element = $(`.${defaultProps.prefixCls}__tooltip`, $parent);
      expect($element.length).toBe(1);
    });

    test('prepareStyle view tooltip', () => {
      let addition = { index: 0, value: 80 };
      let view = new TooltipView(addition);
      let className = 'slider__wrapper-0';
      $('body').append(`<div class="${className}"/>`);
      const $parent = $(`.${className}`);
      view.render($parent);
      let $element = $(`.${defaultProps.prefixCls}__tooltip`, $parent);
      expect($element.css('color')).toBeUndefined();

      let props: DefaultProps = { ...defaultProps, tooltip: { on: true } };
      view.setProps(props);
      $element = $(`.${defaultProps.prefixCls}__tooltip`, $parent);
      expect($element.css('color')).toBe('');

      props = {
        ...defaultProps,
        tooltip: { on: true, style: { color: 'red' } },
      };
      view.setProps(props);
      $element = $(`.${defaultProps.prefixCls}__tooltip`, $parent);
      expect($element.css('color')).toBe('red');
    });

    test('prepareContent view tooltip', () => {
      let mockCallback = jest.fn((value: number): string => {
        return `${value}%`;
      });
      let addition = { index: 0, value: 80 };
      let className = 'slider__wrapper-1';
      $('body').append(`<div class="${className}"/>`);
      const $parent = $(`.${className}`);
      let view = new TooltipView(addition);
      view.render($parent);
      let $element = $(`.${defaultProps.prefixCls}__tooltip`, $parent);
      expect($element.text()).toBe('');

      let props: DefaultProps = { ...defaultProps, tooltip: { on: true } };
      view.setProps(props);
      $element = $(`.${defaultProps.prefixCls}__tooltip`, $parent);
      expect($element.text()).toBe('80');
      props = { ...defaultProps, tooltip: { on: true, render: mockCallback } };
      view.setProps(props);
      $element = $(`.${defaultProps.prefixCls}__tooltip`, $parent);
      expect($element.text()).toBe('80%');
    });
    test('updateView view tooltip', () => {
      let mockCallback = jest.fn((value: number): string => {
        return `${value}%`;
      });
      let addition = { index: 0, value: 80 };
      let className = 'slider__wrapper-2';
      $('body').append(`<div class="${className}"/>`);
      const $parent = $(`.${className}`);
      let view = new TooltipView(addition);
      view.render($parent);
      let $element = $(`.${defaultProps.prefixCls}__tooltip`, $parent);
      let props: DefaultProps = { ...defaultProps, tooltip: { on: true } };
      view.setProps(props);
      $element = $(`.${defaultProps.prefixCls}__tooltip`, $parent);
      expect($element.length).toBe(1);
      props = { ...defaultProps, tooltip: { on: false } };
      view.setProps(props);
      $element = $(`.${defaultProps.prefixCls}__tooltip`, $parent);
      expect($element.length).toBe(0);
    });
    test('getAddition tooltip view', () => {
      let addition: Addition = {
        index: 0,
        value: 80,
      };
      const view = new TooltipView(addition);
      expect(view.getAddition()).toEqual(addition);
    });
  });
});
