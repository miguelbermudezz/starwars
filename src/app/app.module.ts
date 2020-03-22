import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { MenuComponent } from './components/menu/menu.component';
import { AppRoutes } from './app.routes';
import { ConstantsService } from './services/constants.service';
import { PeopleService } from './Rest/people.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutes,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    ConstantsService,
    PeopleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
