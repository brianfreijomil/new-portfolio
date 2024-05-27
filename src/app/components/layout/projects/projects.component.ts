import { Component } from '@angular/core';
import { HeaderComponent } from '../../reusable/header/header.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [HeaderComponent,RouterLink,CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  hoverCard: boolean = false;
  projects: any[] = [
    {
      id: 1,
      title: 'ScoutingPro',
      description: 'Application designed and developed to facilitate the scouting work of soccer teams. Personal project. (2024)',
      links: [
        'https://github.com/brianfreijomil/ScoutingAppFrontend',
        'https://github.com/brianfreijomil/ScoutingApiBack'
      ]
    },
    {
      id: 2,
      title: 'ScooterApp',
      description: 'Basic application designed to manage the use of scooters and their trips. Project done at the university. (2023)',
      links: [
        'https://github.com/brianfreijomil/AppMonopatines',
      ]
    },
    {
      id: 3,
      title: 'RetroGames',
      description: 'Application designed to play online games, especially retro games. Project done for the university. (2022)',
      links: [
        'https://github.com/brianfreijomil/Interfaces.github.io',
        'https://brianfreijomil.github.io/Interfaces.github.io/Entrega-Final/community.html'
      ]
    }
  ];

  constructor() {}

  onHover() {
    this.hoverCard = true;
    console.log(true);
  }

}
