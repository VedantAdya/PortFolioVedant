import { Injectable } from '@angular/core';
import { Project } from '../_models/Projects';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects : Project[]=[
    {id:0,name:'Java Coding',summary: 'Various types of problem statements codes solved using java',description:'this is the project of the Java',projectsLink:'',tags:[Tag.JAVA,Tag.SPRINGBOOT],pictures:["../../assets/artificial2.jpg","../../assets/facial-recognition.jpg","../../assets/personality.jpg" ]},
    {id:1,name:'Sprinboot',summary: 'Various types of problem statements codes solved using java Springboot',description:'',projectsLink:'',tags:[Tag.JAVA,Tag.SPRINGBOOT],pictures:["../../assets/artificial2.jpg","../../assets/facial-recognition.jpg","../../assets/personality.jpg" ]},
    {id:2,name:'Python Project',summary: 'predicts the personlity according to the answers submitted.',description:'this is the project of python and flask.',projectsLink:'https://github.com/VedantAdya/prediction_personality',tags:[Tag.PYTHON,Tag.FLASK],pictures:["../../assets/artificial2.jpg","../../assets/facial-recognition.jpg","../../assets/personality.jpg" ]},
    {id:3,name:'C Codes',summary: 'Various types of problem statements codes solved using C labguage',description:'',projectsLink:'',tags:[Tag.JAVA,Tag.SPRINGBOOT],pictures:["../../assets/artificial2.jpg","../../assets/facial-recognition.jpg","../../assets/personality.jpg" ]},
    {id:4,name:'C++ Codes',summary: 'Various types of problem statements codes solved using C++ labguage',description:'',projectsLink:'',tags:[Tag.CPP,Tag.cpp],pictures:["../../assets/artificial2.jpg","../../assets/facial-recognition.jpg","../../assets/personality.jpg" ]},
    {id:5,name:'Angular',summary: 'Projects using Angular',description:'',projectsLink:'',tags:[Tag.ANGULAR],pictures:["../../assets/artificial2.jpg","../../assets/facial-recognition.jpg","../../assets/personality.jpg" ]}

  ];

  constructor() { }

    GetProjects()
    {
      return this.projects;
    }
    GetProjectById(id:number): Project
    {
      let project=this.projects.find(project =>project.id===id);

      if(project===undefined) {
        throw new Error('Function not implemented.'+id);
        }
      return project;
      }
      GetProjectsByFilter( FilterTags:Tag[])
      {
            let FilterProject:Project[]=[];

            this.projects.forEach(function(project)
            {
                let foundAll=true;
                
                FilterTags.forEach(function(filterTag) {
                      if(project.tags.includes(filterTag)==false){
                      foundAll=false;
                    }
                
                });
                if(foundAll){
                    FilterProject.push(project);

                    }
            });
            return FilterProject;
            }
      }


