import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-bank',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bank.component.html',
  styleUrl: './bank.component.css'
})
export class BankComponent {
  constructor(
    private sharedService: SharedService,
    private router: Router
  ) {}
  bankServices = [
    {
      name: 'Ouverture de compte bancaire',
      description: 'Créez votre compte bancaire en toute simplicité.',
      imageUrl: './assets/serv1.jpg'
    },
    {
      name: 'Dépôt et retrait d’argent',
      description: 'Effectuez vos transactions financières rapidement.',
      imageUrl: './assets/serv2.jpg'
    },
    {
      name: 'Consultation de solde',
      description: 'Vérifiez instantanément le solde de votre compte.',
      imageUrl: './assets/serv3.jpg'
    },
    {
      name: 'Demandes de crédit',
      description: 'Soumettez une demande pour un prêt bancaire.',
      imageUrl: './assets/serv4.jpg'
    },
    {
      name: 'Services de transfert d’argent',
      description: 'Transférez de l’argent localement ou internationalement.',
      imageUrl: './assets/serv5.png'
    },
    {
      name: 'Paiement de factures',
      description: 'Réglez vos factures facilement depuis votre compte.',
      imageUrl: './assets/serv6.jpg'
    },
    {
      name: 'Gestion des cartes bancaires',
      description: 'Activez, bloquez ou remplacez vos cartes bancaires.',
      imageUrl: './assets/serv7.jpg'
    },
    {
      name: 'Conseils financiers',
      description: 'Recevez des recommandations adaptées à vos finances.',
      imageUrl: './assets/serv8.jpg'
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
      // Navigate to ticket details if logged in
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