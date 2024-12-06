import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-conatct',
  templateUrl: './conatct.component.html',
  styleUrl: './conatct.component.css'
})
export class ConatctComponent {
gmail: any;
EgMail: any;
  constructor(private titleService: Title){
    this.titleService.setTitle('Vedant Adya - Contact');
    let EgMail="vedantadya@gmail.com";
  }
}
