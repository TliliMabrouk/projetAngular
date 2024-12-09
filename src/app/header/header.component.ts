import { Component,OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  constructor(
    public sharedService: SharedService,
    private router: Router
  ) {}

  ngOnInit(): void {
  
  }

 
  logout() {
    this.sharedService.connected = false;
    this.sharedService.current_user_id = null; 
    this.router.navigate(['/home']); 
  }
}