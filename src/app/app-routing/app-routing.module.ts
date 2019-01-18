import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrisisListComponent } from '../crisis-list/crisis-list.component'
import { HeroListComponent } from '../hero-list/hero-list.component';
import { NotFoundComponent } from '../not-found/not-found.component'
import { ContactListComponent } from '../contact-list/contact-list.component';
import { ContactDetailComponent } from '../contact-detail/contact-detail.component';

const appRoutes: Routes = [
  { path: "crisis-center", component: CrisisListComponent },
  { path: "heroes/:id", component: HeroListComponent },
  { path: "contacts", component: ContactListComponent },
  { path: "contact/:id", component: ContactDetailComponent },
  { path: '', redirectTo: '/heroes', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})


export class AppRoutingModule { }
