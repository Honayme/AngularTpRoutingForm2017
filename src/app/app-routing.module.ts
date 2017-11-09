import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from "./app.component";
import { AboutComponent} from "./about/about.component";


import {ContactListComponent} from "./contact-list/contact-list.component";
import {DetailsComponent} from "./details/details.component";
import {SignupComponent} from "./signup/signup.component";

const routes: Routes = [
  {path: '', redirectTo: 'about', pathMatch: 'full'},
  {path: 'about', component: AboutComponent},
  {path: 'contact-list', component: ContactListComponent},
  {path: 'contact-list/details/:id', component: DetailsComponent},
  {path: 'signup', component: SignupComponent}
];

// export const routeur: ModuleWithProviders = RouterModule.forRoot(router)

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

//A coté de chauqe contact bouton qui va sur détail
//créer détail à la place de service
//détail mettre id dans l'url
//avec le service faire un get by id qu irenvoie un item à afficher dans le détail
// /add renvoei vers un compnent avec un form (voir cours import dans le module compoenent etc . ) correspondre shcéma contact
//On.'submit' faire un create qui va push mon Jsn dans ma vue
//providers dans app module
