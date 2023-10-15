import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BMIconModule } from '../bm-icon/bm-icon.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'bm-card',
  standalone:true,
  templateUrl: './bm-card.component.html',
  styleUrls: ['./bm-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, BMIconModule]
})
export class BmCardComponent {
  @Input() title = '';
  @Input() iconName ='';
  @Input() text = '';
  @Input() code = '';


  handleIconChange() {
    this.iconName = this.iconName === 'top' ? 'bottom': 'top'
  }
}
