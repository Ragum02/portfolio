import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: "Accueil du portfolio" },
  { path: 'projets', component: ProjectsComponent, title: "Liste des projets" },
  { path: 'contact', component: ContactComponent, title: "Page de contact"}
];
