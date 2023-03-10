/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { ImageClickEvent } from "./components/my-carousel/my-carousel-image";
export namespace Components {
    interface MyCarousel {
        "source": string;
        "time": number;
    }
    interface MyCarouselImage {
        "active": boolean;
        "alt": string;
        "src": string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
}
export interface MyCarouselImageCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLMyCarouselImageElement;
}
declare global {
    interface HTMLMyCarouselElement extends Components.MyCarousel, HTMLStencilElement {
    }
    var HTMLMyCarouselElement: {
        prototype: HTMLMyCarouselElement;
        new (): HTMLMyCarouselElement;
    };
    interface HTMLMyCarouselImageElement extends Components.MyCarouselImage, HTMLStencilElement {
    }
    var HTMLMyCarouselImageElement: {
        prototype: HTMLMyCarouselImageElement;
        new (): HTMLMyCarouselImageElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLElementTagNameMap {
        "my-carousel": HTMLMyCarouselElement;
        "my-carousel-image": HTMLMyCarouselImageElement;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface MyCarousel {
        "source": string;
        "time"?: number;
    }
    interface MyCarouselImage {
        "active"?: boolean;
        "alt": string;
        "onImageClick"?: (event: MyCarouselImageCustomEvent<ImageClickEvent>) => void;
        "src": string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface IntrinsicElements {
        "my-carousel": MyCarousel;
        "my-carousel-image": MyCarouselImage;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-carousel": LocalJSX.MyCarousel & JSXBase.HTMLAttributes<HTMLMyCarouselElement>;
            "my-carousel-image": LocalJSX.MyCarouselImage & JSXBase.HTMLAttributes<HTMLMyCarouselImageElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}
