import {
  Directive,
  Input,
  OnChanges,
  ViewContainerRef,
  ComponentFactoryResolver,
  ComponentRef
} from '@angular/core';
import { ChartComponent } from './chart/chart.component';
import { TableComponent } from './table/table.component';
const components = {
  chart: ChartComponent,
  table: TableComponent
};

export class LayoutItemDirective implements OnChanges {
  @Input() componentRef: string;
  component: ComponentRef<any>;
  
  constructor(
    private container: ViewContainerRef,
    private resolver: ComponentFactoryResolver
  ) { }
  ngOnChanges(): void {
    const component = components[this.componentRef];
    
    if (component) {
      const factory = this.resolver.resolveComponentFactory<any>(component);
      this.component = this.container.createComponent(factory);
    }
  }
}