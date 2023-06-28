import { E404Component } from './pages/e404/e404.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  // Rota padrão → Página inicial → 'home'.
  // ↓ Essa deve ser sempre a primeira rota.
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  // Página 'Home'.
  {
    path: 'home',
    title: 'Início',
    component: HomeComponent
  },

  // Página 'Contatos'.
  {
    path: 'contacts',
    title: 'Contatos',
    component: ContactsComponent
  },

  // Página 'Sobre'.
  {
    path: 'about',
    title: 'Sobre',
    component: AboutComponent
  },

  // Página '404'
  {
    path: 'e404',
    title: 'Erro 404',
    component: E404Component
  },

  // Se a rota não existe, vai para a página 404.
  // ↓ Essa deve ser sempre a última rota.
  {
    path: '**',
    redirectTo: 'e404',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
