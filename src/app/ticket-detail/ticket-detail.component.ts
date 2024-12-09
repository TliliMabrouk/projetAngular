import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from 'express';
import { PposteComponent } from '../pposte/pposte.component';

@Component({
  selector: 'app-ticket-detail',
  standalone: true,
  imports: [],
  templateUrl: './ticket-detail.component.html',
  styleUrl: './ticket-detail.component.css'
})
export class TicketDetailsComponent implements OnInit {
  serviceName: string = ''; 
  waitTime: number = 0; 
  rank: number = 0; 
  
  userName: string = ''; 

  constructor(private route: ActivatedRoute, private sharedService: SharedService) {}

  ngOnInit(): void {
    
    this.route.queryParams.subscribe(params => {
      this.serviceName = params['serviceName'] || 'Unknown Service';
    });

    
    const currentUser = this.sharedService.getCurrentUser();
    this.userName = currentUser ? currentUser.username : 'Invité';
    

    
    const queueSize = Math.floor(Math.random() * 20) + 1; 
    this.rank = queueSize + 1; 
    this.waitTime = this.rank * 2; 
  }
}