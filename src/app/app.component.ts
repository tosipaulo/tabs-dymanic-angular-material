import { Component } from '@angular/core';
import { Component01Component } from './component01/component01.component';
import { Component02Component } from './component02/component02.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'component-dynamic';
  tabs = [
    {
      title: 'Label 01',
      component: Component01Component
    },
    {
      title: 'Label 02',
      component: Component02Component
    }
  ]
}
