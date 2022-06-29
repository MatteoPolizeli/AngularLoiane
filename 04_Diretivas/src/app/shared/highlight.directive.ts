import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
  Input
} from '@angular/core';

@Directive({
  selector: '[Highlight]',
})
export class HighlightDirective {
  @HostListener('mouseenter') onMouseOver() {
    this.backgroundColor = this.HLColor;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = this.defaultColor;
  }

  @HostBinding('style.backgroundColor') backgroundColor: string;

  @Input() defaultColor: string = 'white';
  @Input() HLColor: string = 'yellow';

  constructor(private _elementRef: ElementRef, private _renderer: Renderer2) {}

  ngOnInit(){
    this.backgroundColor = this.defaultColor
  }
}
