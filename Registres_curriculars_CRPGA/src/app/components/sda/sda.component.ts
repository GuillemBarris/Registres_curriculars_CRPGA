import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sda',
  standalone: true,
  imports: [  ],
  templateUrl: './sda.component.html',
  styleUrl: './sda.component.css',
  
})

export class SdaComponent {

  isDropdownOpen = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

}
