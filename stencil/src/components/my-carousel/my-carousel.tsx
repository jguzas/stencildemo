import { Component, Host, h, Prop, Element, State, Listen } from '@stencil/core';
import { ImageClickEvent } from './my-carousel-image';

@Component({
  tag: 'my-carousel',
  styleUrl: 'my-carousel.css',
  shadow: true,
})

export class MyCarousel {

  @Prop() time: number;

  @State() activeItem: number = 1;

  @Element() element!: HTMLElement;

  @Listen("imageClick")
  handleImageClick(e: CustomEvent<ImageClickEvent>) {
    console.log("image clicked ", e.detail.src);
  }

  container: HTMLElement;

  images = [
    {src: "https://images.unsplash.com/photo-1491002052546-bf38f186af56?w=700", alt: "winter"},
    {src: "https://images.unsplash.com/photo-1548777123-e216912df7d8?w=700", alt: "winter2"},
    {src: "https://images.unsplash.com/photo-1517299321609-52687d1bc55a?w=700", alt: "winter3"},
  ];

  itemsCount = this.images.length;

  interval: any;

  next = () => this.activeItem === this.itemsCount ? this.activeItem = 1 : this.activeItem++;

  previuos = () => this.activeItem === 1 ? this.activeItem = this.itemsCount : this.activeItem--;

  isActive = (i: number) => (i + 1) === this.activeItem;


  handleClick = (direction: 'previous' | 'next') => {
    clearInterval(this.interval);

    if(direction === 'next') {
      this.next();
      return;
    }

    this.previuos();
  };

  componentDidLoad() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion)').matches;

    if (!prefersReducedMotion) {
      this.interval = setInterval(() => { this.next() }, this.time || 2000);
    }
  }

  disconnectedCallback() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <Host>
        {this.images.map((img, i) =>
          <my-carousel-image
            src={img.src}
            alt={img.alt}
            active={this.isActive(i)}
          />
        )}

        <ul class="indicator">
          {this.images.map((_img, i) =>
            <li class={`indicator__item ${this.isActive(i) ? 'active' : ''}`}></li>
          )}
        </ul>
        
        <div class="navigation">
          <button class="button button--left" onClick={() => this.handleClick('previous')}>
            <span class="visually-hidden">previous</span>
            <svg viewBox="0 0 512 512" class="button__icon">
              <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M328 112L184 256l144 144"/>
            </svg>
          </button>
          <button class="button button--right" onClick={() => this.handleClick('next')}>
            <span class="visually-hidden">next</span>
            <svg viewBox="0 0 512 512" class="button__icon">
              <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M184 112l144 144-144 144"/>
            </svg>
          </button>
        </div>
      </Host>
    );
  }
}
