import { Component, OnInit, ViewChild, AfterViewInit, ComponentFactoryResolver, Input } from '@angular/core';
import { TabsDirective } from '../tabs.directive';

@Component({
  selector: 'app-tabs-content',
  template: '<ng-template appTabs></ng-template>'
})
export class TabsContentComponent implements OnInit, AfterViewInit {

  @ViewChild(TabsDirective) tabsContainerView: TabsDirective;
  @Input() tabContent;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    const component = this.componentFactoryResolver.resolveComponentFactory(this.tabContent.component);
    this.tabsContainerView.viewContainerRef.createComponent(component);
  }

}
