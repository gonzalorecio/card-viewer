import { Component } from '@angular/core';
import AboutProject from '../_models/about-project.model';
import { Author } from '../_models/author.model';
import { SocialLink } from '../_models/social-link.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less']
})
export class AboutComponent {

  aboutProject: AboutProject = new AboutProject(
    "Jedi Card API",
    "Angular 5 Project from Jedi Course",
    "Card viewer")

  author: Author = new Author(
    "Gonzalo",
    "Recio",
    "Computer Science @ FIB-UPC",
    [new SocialLink("Instagram", "https://www.instagram.com/gonzalorecio")]
  )

  getFullName() {
    return this.author.name + " " + this.author.lastname
  }

}
