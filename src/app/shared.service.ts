import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  
  users: any[] = [
    // { id: 1, Name: 'salmeen', email: 'salmenotay96@gmail.com', password: 'ss'},
    // { id: 2, Name: 'hakim', email: 'hakimest@gmail.com',password: 'hh'},
  ];

  
  nb_users: number = 0;
  current_user_id: number | null = null;


  connected: boolean = false;

  constructor() {}

  
  addUser(user: any): void {
    this.users.push(user);
    this.nb_users++;
  }
  

  
  getCurrentUser() {
    if (this.current_user_id !== null && this.current_user_id >= 0 && this.current_user_id < this.users.length) {
      return this.users[this.current_user_id];
    }
    return null;
  }
  isLoggedIn(): boolean {
    return this.connected; 
  }
  
}