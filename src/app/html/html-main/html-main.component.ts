import { Component, OnInit } from '@angular/core';
import { ScullyRoutesService } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-html-main',
  templateUrl: './html-main.component.html',
  styleUrls: ['./html-main.component.scss']
})
export class HtmlMainComponent implements OnInit {
  links$: Observable<any> = this.scully.available$;
  allLinks: [] = [];
  htmlLinks: [] = [];

  constructor(private scully: ScullyRoutesService) { }


  ngOnInit(): void {
    this.links$.subscribe(links => {
      this.allLinks = links;
      this.htmlLinks = links.filter(link => link.route.includes('/html/'));
      console.log(this.allLinks);
      console.log(this.htmlLinks);
    });
  }

}
