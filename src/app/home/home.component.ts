import { Component } from '@angular/core';
import { ServiComponent } from './servi/servi.component';
import { CommonModule } from '@angular/common';
import { SectionplsComponent } from './sectionpls/sectionpls.component';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,ServiComponent,SectionplsComponent,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
