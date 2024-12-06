import { Component } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Project } from '../_models/Projects';

@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrl: './project-modal.component.css'
})
export class ProjectModalComponent {
  project={}as Project;
  
  constructor(public bsModalRef: BsModalService) {
    
  }
   

}
