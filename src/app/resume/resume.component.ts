import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {

  isWorkExperienceOpen:boolean=false;
  isEducationOpen:boolean=false;
  isCertificationOpen:boolean=false;
  isSkillsOpen:boolean=false;
  

  constructor(private titleService: Title,private renderer:Renderer2){
    this.titleService.setTitle('Vedant Adya - Resume');
  }

  DownloadFile(){
const link=this.renderer=this.renderer.createElement('a');
link.setAttribute('target','blank');
link.setAttribute('href','../../assets/Resume.pdf');
link.setAttribute('download','Resume.pdf');
link.click();
link.remove();
    
  }

}
