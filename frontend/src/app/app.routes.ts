import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { ManageComponent } from './backoffice/manage/manage.component';
import { LoginComponent } from './backoffice/login/login.component';


export const routes: Routes = [
  { path: '', component: HomeComponent, title: "Accueil" , data:{ animation: 'HomePage'}},
  { path: 'projets', component: ProjectsComponent, title: "Liste des projets", data:{ animation: 'ProjectsPage'} },
  { path: 'contact', component: ContactComponent, title: "Page de contact", data: { animation: 'ContactPage' } },
  { path: 'admin/login', component: LoginComponent, title: "Page de login", data: { animation: 'LoginPage' } },
  { path: 'admin/manage', component: ManageComponent, title: "Page d'admin", data: { animation: 'ManagePage' } }
];
