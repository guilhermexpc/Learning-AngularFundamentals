import {
  Directive,
  HostListener,
  HostBinding,
  ElementRef,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[highlightMouse]',
})
export class HighlightMouseDirective {
  private backgroundColor: string = '';

  @HostListener('mouseenter') onMouseOver() {
    // this.batataRender.setStyle(
    //   this.elRef.nativeElement,
    //   'background-color',
    //   'yellow'
    // );
    // this.batata('yellow');
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseOut() {
    // this.batataRender.setStyle(
    //   this.elRef.nativeElement,
    //   'background-color',
    //   'white'
    // );
    // this.batata('white');
    this.backgroundColor = 'white';
  }

  @HostBinding('style.backgroundColor') get getHostBinding() {
    return this.backgroundColor;
  }

  constructor(private elRef: ElementRef, private batataRender: Renderer2) {}
}
