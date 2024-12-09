import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';

import { SharedService } from '../shared.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterModule, FormsModule,],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  
  name: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  telephone: string = '';
  adress: string = '';
  age: number | null = null;

  constructor(
    private sharedService: SharedService,
    private router: Router
  ) { }

  
  onSubmit() {
    if (this.password === this.confirmPassword) {
      Swal.fire({
        title: 'Inscription réussie !',
        text: 'Vous vous êtes inscrit avec succès.',
        icon: 'success',
        confirmButtonText: 'OK',
        timer: 3000,
        timerProgressBar: true,
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      });
      

      
      this.sharedService.users.push({
        id: this.sharedService.nb_users,
        username: this.name,
        email: this.email,
        password: this.password,
      
        
        
      });
      this.sharedService.nb_users++;
      this.sharedService.connected = true; 
      this.sharedService.current_user_id = this.sharedService.nb_users - 1; 
      this.router.navigate(['/home']);
    } else {
      Swal.fire({
        title: 'Erreur',
        text: 'Les mots de passe ne correspondent pas !',
        icon: 'error',
        confirmButtonText: 'Réessayer',
        showClass: {
          popup: 'animate__animated animate__shakeX'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      });
    }
  }
}