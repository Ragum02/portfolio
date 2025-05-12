import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: "Accueil" , data:{ animation: 'HomePage'}},
  { path: 'projets', component: ProjectsComponent, title: "Liste des projets", data:{ animation: 'ProjectsPage'} },
  { path: 'contact', component: ContactComponent, title: "Page de contact", data: { animation: 'ContactPage' } }

];
