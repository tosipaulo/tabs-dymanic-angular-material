import { Component, OnInit, ViewChild, AfterViewInit, ComponentFactoryResolver, Input } from '@angular/core';
import { TabsDirective } from './tabs.directive';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  @ViewChild(TabsDirective) tabsContainerView: TabsDirective;
  @Input() tabs;

  constructor() { }

  ngOnInit(): void {
    
  }

}
