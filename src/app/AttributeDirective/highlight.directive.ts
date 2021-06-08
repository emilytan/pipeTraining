import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) { }

  @Input() defaultColor: string;

  @Input('appHighlight') highlightColor: string;

  @HostBinding('class.italicstyle') private ishovering: boolean;

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || this.defaultColor || 'red');
    this.ishovering = true;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
    this.ishovering = false;
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }


}
