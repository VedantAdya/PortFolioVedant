import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConatctComponent } from './conatct/conatct.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { ResumeComponent } from './resume/resume.component';
import {ModalModule} from 'ngx-bootstrap/modal';
import { ProjectModalComponent } from './project-modal/project-modal.component'
import {CarouselModule} from 'ngx-bootstrap/carousel'
import{CollapseModule}from 'ngx-bootstrap/collapse'
import{FormsModule}from '@angular/forms'
import{AccordionModule}from 'ngx-bootstrap/accordion'
@NgModule({
  declarations: [
    AppComponent,
    ConatctComponent,
    HomeComponent,
    HeaderComponent,
    NavComponent,
    PortfolioComponent,
    ProjectCardComponent,
    ResumeComponent,
    ProjectModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    FormsModule,
    AccordionModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
