import { Component, OnInit } from '@angular/core';
import { TranslateService } from 'ng2-translate';

@Component({
  selector: 'app-cskills',
  templateUrl: './cskills.component.html',
  styleUrls: ['./cskills.component.css']
})
export class CSkillsComponent implements OnInit {

  constructor(private translate: TranslateService) { }

  ngOnInit() {
  }

}
