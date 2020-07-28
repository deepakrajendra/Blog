import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HtmlComponent} from './html.component';
import { HtmlMainComponent } from './html-main/html-main.component';

const routes: Routes = [
  {
    path: ':slug',
    component: HtmlComponent,
  },
  {
    path: '**',
    component: HtmlMainComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HtmlRoutingModule {}

