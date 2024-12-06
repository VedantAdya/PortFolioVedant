import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectsService} from '../_services/project.service';
import { Project } from '../_models/Projects';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  featuredProjects={}as Project;
  constructor(private titleService: Title,private projectService:ProjectsService){
    this.titleService.setTitle('Vedant Adya - Home');
  }
  ngOnInit(): void {
    this.featuredProjects=this.projectService.GetProjectById(0);
    
  }
}
