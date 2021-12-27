import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[highlightcomplete]',
})
export class HighlightcompleteDirective {
  @HostListener('mouseenter') onMouseEnter() {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') onMouseOut() {
    this.backgroundColor = this.defaultColor;
  }

  @HostBinding('style.backgroundColor') get getHostBinding() {
    return this.backgroundColor;
  }

  private backgroundColor: string = '';

  @Input() defaultColor: string = 'white';
  @Input() highlightColor: string = 'yellow';

  constructor() {}

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }
}
