import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'urlAssets',
  standalone: true,
})
export class UrlAssetsPipe implements PipeTransform {

  transform(pathname: string): string {
    const urlObject =  new URL(pathname, document.baseURI || self.location.href);
    return urlObject?.href || pathname;
  }

}
