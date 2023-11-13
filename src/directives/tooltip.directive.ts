import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
  OnInit,
  OnDestroy
} from '@angular/core';

const tooltipContainerStyle = {
  position: 'absolute',
  'background-color': 'transparent',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  'pointer-events': 'none',
};

const tooltipStyle: any = {
  'max-width': '320px',
  position: 'absolute',
  'background-color': 'rgba(51, 51, 51, 50%)',
  color: '#fff',
  padding: '12px',
  'border-radius': '4px',
  'font-size': '12px',
  'z-index': '9999',
  'text-align': 'start',
};
const resetStyleNames =['top','bottom','left','right'];

@Directive({
  selector: '[appTooltip]',
})
export class TooltipDirective implements OnInit, OnDestroy {
  @Input('appTooltip') tooltipText!: string;
  @Input('tooltipPosition') set tooltipPosition(value: string){
    this._tooltipPosition = value
  }

  private tooltipElement!: HTMLElement | null;
  private tooltipContainer!: HTMLElement | null;
  private text!: HTMLElement | null;;
  
  private _tooltipPosition!: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    console.log('---constructor')
  }

  ngOnInit(): void {
    console.log('---init')  
  }

  ngOnDestroy(): void {
    console.log('---destroy')  
  }

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.showTooltip();
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.hideTooltip();
  }

  private showTooltip(): void {
    if( !this.tooltipElement){
    this.tooltipElement = this.renderer.createElement('div');}
    if(!this.tooltipContainer){
    this.tooltipContainer = this.renderer.createElement('span');}
    this.tooltipText =
    this.tooltipText === ''
      ? `Esto es una prueba de un tooltip que posee un contenido muy largo.
         Deberá ajustarse a las dimensiones de la pantalla asdf asdf asdfa ss fsadff d asdfsadf sa
         sdafas sdfas as`
      : this.tooltipText;
    if(!this.text){
      this.text = this.renderer.createText(this.tooltipText);
    }
 
    this.renderer.appendChild(this.tooltipContainer, this.text);
    this.renderer.appendChild(this.tooltipElement, this.tooltipContainer);

    const rootElement = document.querySelector('body');
    this.renderer.appendChild(rootElement, this.tooltipElement);

    this.addStyle(tooltipContainerStyle, this.tooltipElement);
    this.addStyle(tooltipStyle, this.tooltipContainer);
    this.addPosition();
  }

  private addPosition() {
    const { innerWidth, innerHeight } = window;
    console.log('innerWidth:', innerWidth, ' innerHeight:', innerHeight);

    const { top, bottom, right, left, width, height } =
      this.el.nativeElement.getBoundingClientRect();
    console.log('top:',top, ' bottom:', bottom, ' right:',right, ' left:',left, ' width:',width, ' height:',height)
    const clientHeight = this.tooltipContainer?.clientHeight || 0;
    const clientWidth = this.tooltipContainer?.clientWidth || 0;
    console.log('clientHeight: ', clientHeight, ' clientWidth:', clientWidth);
    console.log('---position:', this._tooltipPosition)
    switch (this._tooltipPosition) {
      case 'top-right':
        this.renderer.setStyle(this.tooltipContainer, 'bottom', `${innerHeight - top}px`);
        this.renderer.setStyle(this.tooltipContainer, 'left', `${right}px`);
        break;
      case 'center-right':
        this.renderer.setStyle(this.tooltipContainer, 'top',`${top + (height - clientHeight) / 2}px`);
        this.renderer.setStyle(this.tooltipContainer, 'left', `${right}px`);
        break;
      case 'bottom-right':
        this.renderer.setStyle(this.tooltipContainer, 'top', `${bottom}px`);
        this.renderer.setStyle(this.tooltipContainer, 'left', `${right}px`);
        break;
      case 'top-center':
        this.renderer.setStyle(this.tooltipContainer, 'bottom', `${innerHeight - top}px`);
        this.renderer.setStyle(this.tooltipContainer, 'left', `${left -(clientWidth - width)/2}px`);
        break;
      case 'bottom-center':
        this.renderer.setStyle(this.tooltipContainer, 'top', `${bottom}px`);
        this.renderer.setStyle(this.tooltipContainer, 'left', `${(left -(clientWidth - width)/2)}px`);
        break;
      case 'top-left':
        this.renderer.setStyle(this.tooltipContainer, 'bottom', `${innerHeight - top}px`);
        this.renderer.setStyle(this.tooltipContainer, 'right', `${innerWidth - left}px`);
        break;
      case 'center-left':
        this.renderer.setStyle(this.tooltipContainer, 'top',`${top + (height - clientHeight) / 2}px`);
        this.renderer.setStyle(this.tooltipContainer, 'right', `${innerWidth - left}px`);
        break;
      case 'bottom-left':
        this.renderer.setStyle(this.tooltipContainer, 'top', `${bottom}px`);
        this.renderer.setStyle(this.tooltipContainer, 'right', `${innerWidth - left}px`);
        break;
      default:
        break;
    }
    this.setOutOfLimits();
  }

  private setOutOfLimits(): void {
    console.log('offsetHeight:', this.tooltipContainer?.offsetHeight, ' offsetWidth:', this.tooltipContainer?.offsetWidth)
    if (this.tooltipContainer?.offsetTop && this.tooltipContainer?.offsetTop < 0) {
      this._tooltipPosition = `bottom-${this._tooltipPosition.split('-')[1]}`;
      this.resetStyle()
      this.addPosition();
    } else if (this.tooltipContainer?.offsetLeft && this.tooltipContainer?.offsetLeft < 0) {
      this._tooltipPosition = `${this._tooltipPosition.split('-')[0]}-right`;
      this.resetStyle()
      this.addPosition();
    }
    if (this.tooltipContainer?.offsetWidth && this.tooltipContainer?.offsetWidth < 0) {
      console.log('offsetWidth')
      // this.renderer.setStyle(this.tooltipContainer, 'right', `0px`);
    }
    if (this.tooltipContainer?.offsetHeight && this.tooltipContainer?.offsetHeight < 0) {
      console.log('offsetHeight')
      // this.renderer.setStyle(this.tooltipContainer, 'bottom', `0px`);
    }

  }

  private resetStyle(){
    resetStyleNames.forEach(e=>{
      this.renderer.removeStyle(this.tooltipContainer, e);
    });
  }

  private addStyle(styleObj: any, element: HTMLElement | null) {
    if (element) {
      Object.keys(styleObj).forEach((e) => {
        const value = styleObj[e];
        this.renderer.setStyle(element, e, value);
      });
    }
  }

  private hideTooltip(): void {
      this.resetStyle();
      this.tooltipContainer?.remove();
      this.tooltipElement?.remove();
      this.text?.remove();
      this.tooltipElement = null;
      this.tooltipContainer = null;
      this.text=null;
  }
}
