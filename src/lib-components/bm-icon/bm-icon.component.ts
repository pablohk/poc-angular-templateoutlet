import {
  Component,
  Input,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter
} from '@angular/core';

const ICONS_MAP: any = {
  left: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M15.293 3.293 6.586 12l8.707 8.707 1.414-1.414L9.414 12l7.293-7.293-1.414-1.414z"/></svg>',
  right:
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"/></svg>',
  top: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="m12 6.586-8.707 8.707 1.414 1.414L12 9.414l7.293 7.293 1.414-1.414L12 6.586z"/></svg>',
  bottom:
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z"/></svg>',
};

@Component({
  selector: 'bm-icon',
  templateUrl: './bm-icon.component.html',
  styleUrls: ['./bm-icon.component.css'],
})
export class BMIconComponent implements AfterViewInit, OnChanges {
  @ViewChild('iconWrapper')
  iconWrappper!: ElementRef;

  @Input() icon = '';
  @Output() handleIconClick = new EventEmitter<void>();
  
  ngOnChanges(changes: SimpleChanges): void {
    const iconSch = changes['icon'];
    if (
      !iconSch.isFirstChange() &&
      iconSch.previousValue !== iconSch.currentValue
    ) {
      this.updateIcon();
    }
  }
  ngAfterViewInit() {
    this.updateIcon();
  }

  private updateIcon() {
    this.iconWrappper.nativeElement.innerHTML = ICONS_MAP[this.icon];
  }

  handleClick() {
    this.handleIconClick.emit();
  }
}
