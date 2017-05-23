import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'ng2-translate';

@Component({
  selector: 'app-lbackground',
  templateUrl: './lbackground.component.html',
  styleUrls: ['./lbackground.component.css']
})
export class LBackgroundComponent implements OnInit {

  constructor(public translate: TranslateService) { }

  ngOnInit() {
  }

}
