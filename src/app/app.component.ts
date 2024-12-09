import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';


import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterModule,RouterOutlet,
    HeaderComponent,FooterComponent,],
    
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projectApp';
}
