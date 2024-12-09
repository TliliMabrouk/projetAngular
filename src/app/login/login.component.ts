import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router'
import { SharedService } from '../shared.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,RouterModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  email: string = '';
  password: string = '';

  constructor(
    private sharedService: SharedService,
    private router: Router
  ) {}

  
  onSubmit() {
    const user = this.sharedService.users.find(
      (u) => u.email === this.email && u.password === this.password
    );

    if (user) {
      
      this.sharedService.connected = true;
      this.sharedService.current_user_id = user.id;
      this.router.navigate(['/home']);
      
      Swal.fire({
        title: 'loged in successfully',
        text: 'You have been logged in successfully',
        icon:'success',
        confirmButtonText: 'ok',
        customClass: {
          popup: 'my-swal-popup',
        },
      });

    } else {
      
      Swal.fire({
        title: 'password error or email not found',
        text: 'Invalid email or password',
        icon:'error',
        confirmButtonText: 'ok',
        customClass: {
          popup: 'my-swal-popup',
        },
      });
    }
  }
}