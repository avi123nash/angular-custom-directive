import { Directive, ElementRef, Renderer, Input, HostListener, OnInit } from '@angular/core';
import { isUndefined } from 'lodash';

@Directive({
  selector: '[appDivisionStyling]'
})
export class DivisionStylingDirective implements OnInit {

  @Input() backColor: string;
  @Input() textColor: string;
  @Input() fontSize: string;

  constructor(private el: ElementRef, private renderer: Renderer) { 
  }

  ngOnInit() {
    this.changeBgColor(this.backColor);
  }
  @HostListener('keyup') onkeyup() {
    if (this.backColor !== '' && typeof this.backColor !== undefined){
    this.changeBgColor(this.backColor);
    }
    if (this.textColor !== '' && !isUndefined(this.textColor)) {
    this.changeFontColor(this.textColor);
    }
    if (this.fontSize) {
    this.changeFontSize(this.fontSize);
    }
  }
  private changeBgColor(backColor) {
    let part = this.el.nativeElement.querySelector('.styling-text');
    this.renderer.setElementStyle(part, 'background-color', backColor);
  }

  private changeFontColor(fontColor) {
    let part = this.el.nativeElement.querySelector('.styling-text');
    this.renderer.setElementStyle(part, 'color', fontColor);
  }

  private changeFontSize(fontSize) {
    let part = this.el.nativeElement.querySelector('.styling-text');
    fontSize = parseInt(fontSize) + 'px';
    this.renderer.setElementStyle(part, 'font-size', fontSize);
  }

}
