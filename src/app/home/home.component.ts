import { Component, OnInit } from '@angular/core';
import { ScullyRoutesService } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  links$: Observable<any> = this.scully.available$;
  allLinks:[] = [];
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
