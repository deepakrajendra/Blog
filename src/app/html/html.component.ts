import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router, ROUTES} from '@angular/router';
import { HighlightService } from '../highlight.service';

declare var ng: any;

@Component({
  selector: 'app-html',
  templateUrl: './html.component.html',
  styleUrls: ['./html.component.css'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated

})
export class HtmlComponent implements OnInit {
  ngOnInit() {}

  constructor(private router: Router, private route: ActivatedRoute, private highlightService: HighlightService) {
  }

  ngAfterViewChecked() {
    console.log("highlight called");
    this.highlightService.highlightAll();
  }
}
