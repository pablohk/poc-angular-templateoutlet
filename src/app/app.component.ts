import { Component } from '@angular/core';
const icons = ['left', 'right', 'top', 'bottom'];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  icon = 'bottom';
  iconTemplate = 'bottom';
  iconTemplateTemplate = 'bottom';
  tooltipPosition = [
    'top-right',
    'center-right',
    'bottom-right',
    'top-center',
    'bottom-center',
    'top-left',
    'center-left',
    'bottom-left',
  ];

  public ttPos = this.tooltipPosition[2];

  handletooltip(event: string) {
    this.ttPos = event;
  }

  handleIcon() {
    const rdn = Math.floor(Math.random() * icons.length);
    this.icon = icons[rdn];
  }

  handleIconTemplate() {
    this.iconTemplate = this.iconTemplate === 'bottom' ? 'top' : 'bottom';
  }

  handleIconTemplateTemplate() {
    this.iconTemplateTemplate =
      this.iconTemplateTemplate === 'bottom' ? 'top' : 'bottom';
  }
}
