import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-skills.component.html',
  styleUrl: './card-skills.component.css'
})
export class CardSkillsComponent implements OnInit {

  hidePrevCarousel:boolean = false;
  hideNextCarousel:boolean = false;
  @Input() items: any[] = [];
  iconsSkills:string[] = [];
  currentIndex = 0;

  getMiddleListIcons() {
    return this.iconsSkills.length
  }

  getTransform() {
    return `translateX(-${this.currentIndex * 100}%)`;
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.hideNextCarousel = false;
      this.hidePrevCarousel = false;
    }
    if(this.currentIndex == 0) {
      this.hidePrevCarousel = true;
    }
  }

  next() {
    if (this.currentIndex < this.items.length - 1) {
      this.currentIndex++;
      this.hideNextCarousel = false;
      this.hidePrevCarousel = false;
    }
    if((this.items.length - 1) - this.currentIndex == 0) {
      this.hideNextCarousel = true;
    }
  }

  ngOnInit(): void {
    this.hidePrevCarousel = true;
  }

}
