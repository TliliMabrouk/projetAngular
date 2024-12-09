import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-servi',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './servi.component.html',
  styleUrl: './servi.component.css'
})
export class ServiComponent {




  services = [
    {
      title: 'Banking Services',
      description: 'Reserver any banking service any where,any time.',
      imageUrl: './assets/banking.png'  ,
      


    },
    {
      title: 'Postal Services',
      description: 'Fast and reliable postal solutions for all your needs.',
      imageUrl: './assets/postal.jpg'
    },
    {
      title: 'baladya services',
      description: 'Reserver any baladya service any where,any time.',
      imageUrl: './assets/baladya.jpg'
    },
  
  ];
}

