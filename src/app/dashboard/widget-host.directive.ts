import { Directive, Input, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appWidgetHost]'
})
export class WidgetHostDirective {
  private data: any;
  @Input('appWidgetHost') set appWidgetHost(data: any) {
    this.data = data;
  }
  constructor(public viewContainerRef: ViewContainerRef) { }

}
