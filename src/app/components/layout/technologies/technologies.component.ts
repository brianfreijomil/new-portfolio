import { Component } from '@angular/core';
import { HeaderComponent } from '../../reusable/header/header.component';
import { CardSkillsComponent } from '../../reusable/card-skills/card-skills.component';

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [HeaderComponent, CardSkillsComponent],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.css'
})
export class TechnologiesComponent {

  carousel1Items = [
    {
      title: 'Backend',
      skills: [
        'Object-oriented programming, design patters',
        'Java, php, C#, Razor',
        'Spring Boot (Data, Security, Cloud), Docker, Keycloak, Kafka',
        'Jpa (hibernate), Entity Framework',
        'Api Rest, Web services Rest',
        'Databases: PostgreSQL, MySQL, SQL Server, Vertabelo tool'
      ],
      iconList: [
        '/assets/images/Java_23404.png',
        '/assets/images/icons8-logotipo-de-primavera.svg',
        '/assets/images/postgresql_original_logo_icon_146391.svg',
        '/assets/images/docker_icon_146192.svg'
      ]
    },
    {
      title: 'Frontend',
      skills: [
        'Angular',
        'Typescript',
        'HTML5',
        'Javascript',
        'CSS',
        'Figma, UX/UI',
      ],
      iconList: [
        '/assets/images/figma_logo_icon_147289.svg',
        '/assets/images/file_type_angular_icon_130754.svg',
        '/assets/images/file_type_html_icon_130541.svg',
        '/assets/images/file_type_css_icon_130661.svg'
      ]
    },
    {
      title: 'Others skills',
      skills: [
        'English: intermediate',
        'Code versioning: GitHub',
        'Maven', 
        'Methodologies : Scrum',
        'Testing: JUnit, Postman'
      ],
      iconList: [
        '/assets/images/github-logo_icon-icons.com_73546.svg',
        '/assets/images/postman_logo_icon_144970.svg',
        '/assets/images/file_type_maven_icon_130397.svg',
        '/assets/images/id3KSPzOxb.png'
      ]
    }
  ];

}
