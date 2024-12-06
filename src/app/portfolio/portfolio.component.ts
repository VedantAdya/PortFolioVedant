import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Projects';
import { Tag } from '../_models/Tag';
import { ProjectsService } from '../_services/project.service';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  projects = {} as  Project[]; 
  isCollapsed:boolean=true;

Java :boolean=false;
springboot:boolean=false;
python:boolean=false;
flask:boolean=false;
cpp:boolean=false;
c:boolean=false;
filtering:boolean=false;
 
 
  constructor(private titleService: Title,private projectsService: ProjectsService){
    this.titleService.setTitle('Vedant Adya - portfolio');
  }
  ngOnInit(): void {
     this.projects=this.projectsService.GetProjects();
  }
Filter(){
  let FilterTags:Tag[]=[];
  if(this.python)
  {
    FilterTags.push(Tag.PYTHON);
  }
  if(this.flask)
    {
      FilterTags.push(Tag.FLASK);
    }
    

    if(this.python ||this.Java||this.c||this.cpp||this.springboot||this.flask)
    {
      this.filtering=true;
    }else{
      this.filtering=false;
    }
  this.projects=this.projectsService.GetProjectsByFilter(FilterTags);  
  
  }

  ResetFilter(){
    this.python=false;
    this.Java=false;
    this.cpp=false;
    this.c=false;
    this.flask=false;
    this.springboot=false;
    this.filtering=false;
    this.filtering=false;

    this.projects=this.projectsService.GetProjects();
  }
}


