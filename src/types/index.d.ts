/// <reference types="jquery" />
declare type Props = {
    prefixCls?: string;
    vertical?: boolean;
    reverse?: boolean;
    disabled?: boolean;
    values?: number[];
    min?: number;
    max?: number;
    classNames?: string[];
    style?: Style;
    mark?: Mark;
    dot?: Dot;
    step?: number;
    onChange?: (value: number[]) => void;
    onBeforeChange?: (value: number[]) => void;
    onAfterChange?: (value: number[]) => void;
    track?: Track;
    handle?: Handle;
    startPoint?: number;
    rail?: Rail;
    tooltip?: Tooltip;
    indent?: number;
    precision?: number;
    index?: number;
};
declare type DefaultProps = {
    prefixCls: string;
    vertical: boolean;
    reverse: boolean;
    disabled: boolean;
    values: number[];
    min: number;
    max: number;
    precision: number;
    classNames?: string[];
    style?: Style;
    mark?: Mark;
    step?: number;
    onChange?: (value: number[]) => void;
    onBeforeChange?: (value: number[]) => void;
    onAfterChange?: (value: number[]) => void;
    track?: Track;
    handle?: Handle;
    dot?: Dot;
    rail?: Rail;
    startPoint?: number;
    tooltip?: Tooltip;
    indent?: number;
    index?: number;
};
declare type DefaultPropsView = {
    prefixCls: string;
    vertical: boolean;
    reverse: boolean;
    disabled: boolean;
    values: number[];
    min: number;
    max: number;
    precision: number;
    classNames?: string[];
    style?: Style;
    mark?: Mark;
    step?: number;
    onChange?: (value: number[]) => void;
    onBeforeChange?: (value: number[]) => void;
    onAfterChange?: (value: number[]) => void;
    track?: Track;
    handle?: Handle;
    dot?: Dot;
    rail?: Rail;
    startPoint?: number;
    tooltip?: Tooltip;
    indent?: number;
    index?: number;
};
declare type KeyDefaultProps = keyof DefaultProps;
declare type KeyProps = keyof Props;
declare type Addition = {
    index: number;
    handles?: {
        [key: string]: Handler;
    };
    value?: number;
    active?: boolean;
};
declare type Handler = (index: number, event: JQuery.Event, value?: number) => void;
declare type Handle = {
    classNames?: string[];
    styles: Style[];
};
declare type Track = {
    classNames?: string[];
    styles?: Style[];
    on?: boolean;
};
declare type Rail = {
    className?: string;
    style?: Style;
    on?: boolean;
};
declare type Dot = {
    wrapClassName?: string;
    className?: string;
    style?: Style;
    on?: boolean;
};
declare type Tooltip = {
    className?: string[];
    style?: Style;
    render?: Render;
    on?: boolean;
    always?: boolean;
};
declare type Mark = {
    wrapClassName?: string;
    className?: string;
    style?: Style;
    render?: Render;
    values?: number[];
    on?: boolean;
    dot?: boolean;
};
declare type Callback = (data: any) => void;
declare type Style = {
    [key: string]: string;
};
declare type Render = (value: number) => string | JQuery<HTMLElement> | JQuery<HTMLElement>[] | HTMLElement | HTMLElement[] | undefined;
export { Callback, Mark, Tooltip, Rail, Dot, Track, Handle, Handler, Addition, KeyDefaultProps, DefaultProps, DefaultPropsView, Props, Style, Render, KeyProps, };
