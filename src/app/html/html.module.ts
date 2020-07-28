import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ScullyLibModule} from '@scullyio/ng-lib';
import {HtmlRoutingModule} from './html-routing.module';
import {HtmlComponent} from './html.component';
import { HtmlMainComponent } from './html-main/html-main.component';

@NgModule({
  declarations: [HtmlComponent, HtmlMainComponent],
  imports: [CommonModule, HtmlRoutingModule, ScullyLibModule],
})
export class HtmlModule {}
