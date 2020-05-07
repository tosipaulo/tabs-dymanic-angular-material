import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';

import { TabsComponent } from './tabs.component';
import { TabsDirective } from './tabs.directive';
import { TabsContentComponent } from './tabs-content/tabs-content.component';



@NgModule({
  declarations: [TabsComponent, TabsDirective, TabsContentComponent],
  exports: [TabsComponent],
  entryComponents: [TabsComponent],
  imports: [
    CommonModule,
    MatTabsModule
  ]
})
export class TabsModule { }
