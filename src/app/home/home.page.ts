import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appShadow]'
})
export class ShadowDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.setStyle(this.element.nativeElement, "box-shadow", "10px 10px 5px grey");
  }
}