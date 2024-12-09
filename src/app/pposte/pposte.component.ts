import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pposte',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './pposte.component.html',
  styleUrl: './pposte.component.css'
})
export class PposteComponent {

  constructor(
    private sharedService: SharedService,
    private router: Router
  ) {}
  services = [
    {
      name: 'Consulter et payer vos factures en ligne',
      description: 'Eau, Téléphone, Electricité...',
      imageUrl: './assets/p1.jpg'
    },
    {
      name: 'Epargner chez La Poste',
      description: 'Gérez vos épargnes de manière sécurisée.',
      imageUrl: './assets/p2.jpg'
      
    },
    {
      name: 'Expédier votre courrier express',
      description: 'Envoyez rapidement vos courriers importants.',
      imageUrl: './assets/p3.png'
    },
    {
      name: 'Suivre vos envois en ligne',
      description: 'Trackez vos envois facilement depuis chez vous.',
      imageUrl: './assets/p4.jpg'
    },
    {
      name: 'Affranchir votre courrier',
      description: 'Affranchissez vos courriers avec simplicité.',
      imageUrl: './assets/p5.jpg'

    },
    {
      name: 'Expédier vos colis',
      description: 'Envoyez vos colis en toute sérénité.',
      imageUrl: './assets/p6.jpg'
    },
    {
      name: 'Opérations financières en ligne',
      description: 'Consultez et gérez vos comptes CCPNet.',
      imageUrl: './assets/p7.jpg'
    },
    {
      name: 'Envoyer des télégrammes de félicitation',
      description: 'Envoyez vos messages personnalisés.',
      imageUrl: './assets/p8.png'
    },
    {
      name: 'Services de transferts d’argent',
      description: 'Transférez de l’argent en ligne en toute sécurité.',
      imageUrl: './assets/p9.jpg'
    },
    {
      name: 'Acheter en ligne',
      description: 'Cartes postales, timbres, et produits philatéliques.',
      imageUrl: './assets/p10.jpg'
    },
  ];

  // Reserve ticket function
  reserveTicket(serviceName: string) {
    if (!this.sharedService.isLoggedIn()) {
      // Navigate to login if the user is not logged in
      Swal.fire({
        title: 'Vous devez être connecté pour réserver un service.',
        text: `Vous n avez pas réservé un ticket pour le service: ${serviceName}`,
        icon:'error',
        confirmButtonText: 'ok',
        customClass: {
          popup: 'my-swal-popup',
        },
      });
      this.router.navigate(['/login']);
    } else {
  
      this.router.navigate(['/ticket-details'], { queryParams: { serviceName } });
      Swal.fire({
        title: 'Réservation Confirmée',
        text: `Vous avez réservé un ticket pour le service: ${serviceName}`,
        icon: 'success',
        confirmButtonText: 'OK',
        customClass: {
          popup: 'my-swal-popup',
        },
      });
    }
  }
}