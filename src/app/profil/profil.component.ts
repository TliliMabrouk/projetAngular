import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profil',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.css'
})
export class ProfilComponent implements OnInit {
  user: any;

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    
    this.user = this.sharedService.getCurrentUser();
  }
}