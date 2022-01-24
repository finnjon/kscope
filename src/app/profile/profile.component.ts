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
  faculty;
  teacher;
  teacherEmail;
  studentEmail;
  studentName;
  submitted: Boolean = false;


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
    submission.feedback = this.feedback || "";
    console.log(submission);
    this.http.post('https://kaleidoscope.helsinki.fi/node', submission)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log("message failed"),
        () => this.submitted = true
      );
  }

}
