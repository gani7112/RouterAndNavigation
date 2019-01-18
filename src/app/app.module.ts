import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { BackendService } from './backend.service';
import { AppRoutingModule } from '../app/app-routing/app-routing.module'
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { NotFoundComponent } from './not-found/not-found.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import {ContactListComponent} from './contact-list/contact-list.component'
import { ContactDetailComponent } from './contact-detail/contact-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    CrisisListComponent,
    HeroListComponent,
    ContactListComponent,
    ContactDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(BackendService, { dataEncapsulation: false }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule {

}
