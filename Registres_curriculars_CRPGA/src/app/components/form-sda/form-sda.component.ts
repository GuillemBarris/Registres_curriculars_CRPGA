import { Component } from '@angular/core';
import { SdaServiceService } from '../../services/sda-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-form-sda',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './form-sda.component.html',
  styleUrl: './form-sda.component.css',
})
export class FormSdaComponent {
  sda: any[] = [{}];
  title: string = '';
  description: string = '';
  link: string = '';
  startDate: Date = new Date();
  endDate: Date = new Date();

  constructor(private sdaServiceService: SdaServiceService) {}
  createSda() {
    this.sda.forEach((SDA) => {
      const SdA = {
        title: this.title,
        description: this.description,
        link: this.link,
        id_course: '27C52914-B41A-4AA4-BC0D-88F536087FA5',
        start_date: this.startDate,
        end_date: this.endDate,
        id_template: 'CBF70C1E-E16C-4975-B276-3FB657BF1236',
      };
      this.sdaServiceService.postSda(SdA).subscribe(
        (data) => {
          console.log('added SDA', data);
        },
        (error) => {
          console.error('Error adding SDA', error);
        }
      );
    });
  }
}
