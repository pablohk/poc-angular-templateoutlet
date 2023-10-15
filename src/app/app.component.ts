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
