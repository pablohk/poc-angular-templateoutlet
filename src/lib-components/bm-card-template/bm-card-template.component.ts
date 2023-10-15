import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'bm-card-template',
  standalone:true,
  templateUrl: './bm-card-template.component.html',
  styleUrls: ['./bm-card-template.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BmCardTemplateComponent {

}
