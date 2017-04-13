import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NeedsComponent } from './needs/needs.component';
import { CSkillsComponent } from './cskills/cskills.component';
import { MotivationComponent } from './motivation/motivation.component';
import { PersonalityComponent } from './personality/personality.component';
import { LBackgroundComponent } from './lbackground/lbackground.component';
import { ProfileComponent } from './profile/profile.component';
import { NavbarComponent } from './navbar/navbar.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'needs', component: NeedsComponent },
  { path: 'current-skills', component: CSkillsComponent },
  { path: 'motivation', component: MotivationComponent },
  { path: 'personality', component: PersonalityComponent },
  { path: 'lbackground', component: LBackgroundComponent },
  { path: 'profile', component: ProfileComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NeedsComponent,
    CSkillsComponent,
    MotivationComponent,
    PersonalityComponent,
    LBackgroundComponent,
    ProfileComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
