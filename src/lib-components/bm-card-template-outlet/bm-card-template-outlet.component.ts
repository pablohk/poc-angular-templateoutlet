import { ChangeDetectionStrategy, Component, Input, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'bm-card-template-outlet',
  standalone:true,
  templateUrl: './bm-card-template-outlet.component.html',
  styleUrls: ['./bm-card-template-outlet.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule]
})
export class BmCardTemplateOutletComponent {
  @Input() cardTemplateRef!: TemplateRef<any>;
  @Input() mode='normal' 
}
