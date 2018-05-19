import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { WidgetHostDirective } from './widget-host.directive';
import { HelloWorldComponent } from './widgets/hello-world/hello-world.component';
import { GridsterItem } from 'angular-gridster2';

@Component({
  selector: 'app-widget-container',
  template: `<div [appWidgetHost]=data ></div>`,
})
export class WidgetContainerComponent implements OnInit {
  @Input() data: GridsterItem;
  @ViewChild(WidgetHostDirective) widgetHostDirective: WidgetHostDirective;
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }


  private injectComponent() {
    if (this.data.widget.component === null) {
      return;
    }
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.data.widget.component);
    const componentRef = this.widgetHostDirective.viewContainerRef.createComponent(componentFactory);
    componentRef.instance['data'] = this.data;
  }
  ngOnInit() {
    this.injectComponent();
  }

}
