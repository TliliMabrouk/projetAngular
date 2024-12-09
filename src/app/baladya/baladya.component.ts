import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-baladya',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './baladya.component.html',
  styleUrl: './baladya.component.css'
})
export class BaladyaComponent {
  constructor(
    private sharedService: SharedService,
    private router: Router
  ) {}
  baladyaServices = [
    { 
      name: 'ترسيم ولادة', 
      description: 'قم بتسجيل ولادة جديدة بسهولة.' ,
      imageUrl: './assets/b1.jpg'

    },
    { 
      name: 'إبرام عقد زواج', 
      description: 'توثيق عقود الزواج الرسمية.' ,
      imageUrl: './assets/b2.jpg'
      
    },
    { 
      name: 'ترسيم وفاة', 
      description: 'تسجيل حالات الوفاة بشكل رسمي.' ,
      imageUrl: './assets/b3.png'
    },
    { 
      name: 'استخراج مضمون ولادة / زواج / وفاة', 
      description: 'احصل على المضامين الرسمية لحالتك المدنية.' ,
      imageUrl: './assets/b4.jpg'
    },
    { 
      name: 'إسناد لقب عائلي', 
      description: 'إضافة لقب عائلي للأشخاص الذين ليس لديهم لقب.' ,
      imageUrl: './assets/b5.jpg'
    },
    { 
      name: 'الإذن بالدفن', 
      description: 'احصل على تصريح رسمي للدفن.' ,
      imageUrl: './assets/b6.jpg'
    },
    { 
      name: 'استخراج الدفتر العائلي', 
      description: 'استخراج دفاتر عائلية جديدة أو بديلة.' ,
      imageUrl: './assets/b7.jpg'
    },
    { 
      name: 'التعريف بالإمضاء', 
      description: 'قم بالتعريف بإمضائك على المستندات الرسمية.' ,
      imageUrl: './assets/b8.jpg'
    },
    { 
      name: 'الإشهاد بمطابقة النسخ للأصل', 
      description: 'التأكد من مطابقة النسخ للمستندات الأصلية.' ,
      imageUrl: './assets/b9.jpg'
    },
  ];

  // Reserve ticket function
  reserveTicket(serviceName: string) {
    if (!this.sharedService.isLoggedIn()) {
      
      
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
}}
