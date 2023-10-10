import { Component, AfterContentInit, ContentChildren, ElementRef, TemplateRef, Input, QueryList } from '@angular/core';
import { BMIconComponent } from '../bm-icon/bm-icon.component';


@Component({
  selector: 'bm-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements AfterContentInit {
@Input() labelText!: string;
@Input() data!: number;
@Input() template!: TemplateRef<any>;
@Input() link!: TemplateRef<any>

@ContentChildren(BMIconComponent, { read: ElementRef }) rawIcon?: QueryList<
ElementRef<BMIconComponent>
>;

ngAfterContentInit(): void {
  console.log('---', this.rawIcon?.toArray())
  console.log('---', this.template)
}

}
