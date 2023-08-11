import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { NgForm } from '@angular/forms';
import { Http } from '@angular/http';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

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

  generatePdf() {
    var profile = this.profileService.profile;
    var feedback = this.feedback || "";
     
      const documentDefinition = {
        content: [
          { text: 'Kaleidoscope Profile', style: 'title' },
          { text: 'Needs', style: 'subtitle' },
          { text: profile.needs, style: 'bodyText' },
          { text: 'Skills', style: 'subtitle' },
          { text: profile.cskills, style: 'bodyText' },
          { text: 'Motivation', style: 'subtitle' },
          { text: profile.motivation, style: 'bodyText' },
          { text: 'Personality', style: 'subtitle' },
          { text: profile.personality, style: 'bodyText' },
          { text: 'Learning History', style: 'subtitle' },
          { text: profile.lhistory, style: 'bodyText' },
          { text: 'Feedback', style: 'subtitle' },
          { text: feedback, style: 'bodyText' }
        ],
        styles: {
          title: {
            fontSize: 24,
            bold: true,
            alignment: 'center',
            margin: [0, 0, 0, 20]
          },
          subtitle: {
            fontSize: 18,
            bold: true,
            alignment: 'left',
            margin: [0, 20, 0, 10]
          },
          bodyText: {
            fontSize: 12,
            alignment: 'justify',
            margin: [0, 0, 0, 10]
          }
        }
      };


    pdfMake.createPdf(documentDefinition).download('PDFName.pdf');
  }


}
