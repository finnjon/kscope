import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { NgForm } from '@angular/forms';
import { Http } from '@angular/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile;
  feedback;

  constructor(
    public profileService: ProfileService,
    private http: Http
  ) { }

  ngOnInit() {
    this.profile = this.profileService.profile;
  }

  onSubmit(form: NgForm) {
    var submission = form.value;
    submission.profile = this.profileService.profile;
    submission.feedback = this.feedback;
    console.log(submission);
    this.http.post('https://jons-email-server.appspot.com/sendProfile', submission)
      .subscribe(
        (response) => console.log("message sent"),
        (error) => console.log("message failed"),
        () => console.log("and then this")
      );
  }

}
