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
import { NeedsRefComponent } from './needs-ref/needs-ref.component';
import { CSkillsRefComponent } from './cskills-ref/cskills-ref.component';
import { MotivationRefComponent } from './motivation-ref/motivation-ref.component';
import { PersonalityRefComponent } from './personality-ref/personality-ref.component';
import { LBackgroundRefComponent } from './lbackground-ref/lbackground-ref.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'needs', component: NeedsComponent },
  { path: 'needs/reflect', component: NeedsRefComponent },
  { path: 'current-skills', component: CSkillsComponent },
  { path: 'current-skills/reflect', component: CSkillsRefComponent },
  { path: 'motivation', component: MotivationComponent },
  { path: 'motivation/reflect', component: MotivationRefComponent },
  { path: 'personality', component: PersonalityComponent },
  { path: 'personality/reflect', component: PersonalityRefComponent },
  { path: 'lbackground', component: LBackgroundComponent },
  { path: 'lbackground/reflect', component: LBackgroundRefComponent },
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
    NavbarComponent,
    NeedsRefComponent,
    CSkillsRefComponent,
    MotivationRefComponent,
    PersonalityRefComponent,
    LBackgroundRefComponent
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
