import { Directive, ElementRef, HostListener, Input, Renderer2, inject } from '@angular/core';

const variantStyles: any = {
  primary: {
    normal: { color: '#76cd76', border: 'blue' },
    hover: { color: 'red', border: 'pink' },
  },
  secondary: { 
    normal: { color: 'black', border: 'blue' },
    hover: { color: 'yellow', border: 'orange' },
   },
};

@Directive({
  selector: '[appMouseActions]',
  standalone: true
})
export class MouseActionsDirective{
  private variant='';
  private elRef = inject(ElementRef);
  private renderer2 = inject(Renderer2);

  @Input() 
  set appMouseActions(value: string){ 
    this.variant= value || 'primary'
  }

  @HostListener('mouseover')
  onmouseover() {
    this.setStyle('color', variantStyles[this.variant].hover.color)
  }

  @HostListener('mouseout') onMouseOut(){
    this.setStyle('color', variantStyles[this.variant].normal.color)
  }

  private setStyle(attr: string, value: string){
    this.renderer2.setStyle(this.elRef.nativeElement, attr, value);
  }
}
