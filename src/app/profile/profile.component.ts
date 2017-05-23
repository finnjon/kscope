import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile;

  constructor(public profileService: ProfileService) { }

  ngOnInit() {
    this.profile = this.profileService.profile;
    console.log(this.profile);
  }

}
