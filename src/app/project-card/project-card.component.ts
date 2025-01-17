import { Component, Input } from '@angular/core';
import { Project } from '../_models/Projects';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ProjectModalComponent } from '../project-modal/project-modal.component';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {

@Input() project={} as Project;
bsModelRef?:BsModalRef;

constructor(private modalService:BsModalService){


}
OpenProjectModel(){

  const modalOptions:ModalOptions={
    class:"modal-lg",
    initialState:{
    project:  this.project
    }
  }  
  this.bsModelRef=this.modalService.show(ProjectModalComponent,modalOptions);
}

}
