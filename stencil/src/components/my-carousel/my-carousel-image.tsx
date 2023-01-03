import { Component, Host, h, Prop, Event, EventEmitter, Listen } from '@stencil/core';

export type ImageClickEvent = {
  src: string
}

@Component({
  tag: 'my-carousel-image',
  styleUrl: 'my-carousel-image.css',
  shadow: true,
})

export class MyCarouselImage {

  @Prop() active: boolean;
  @Prop() src!: string;
  @Prop() alt!: string;
  @Event() imageClick: EventEmitter<ImageClickEvent>

  @Listen("click")
  handleClick () {
    this.imageClick.emit({ src: this.src});
  }

  render() {
    return (
      <Host>
        <img class={`image ${this.active ? 'active' : ''}`} src={this.src} alt={this.alt} aria-hidden={`${!this.active}`}/>
      </Host>
    );
  }
}
