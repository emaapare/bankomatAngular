import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BanksComponent } from './banks/banks.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { GestioneUtentiComponent } from './gestione-utenti/gestione-utenti.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditPasswordComponent } from './edit-password/edit-password.component';
import { EditLockedComponent } from './edit-locked/edit-locked.component';
import { EditBankFunctionalityComponent } from './edit-bank-functionality/edit-bank-functionality.component';
import { ViewBankFunctionalityComponent } from './view-bank-functionality/view-bank-functionality.component';

@NgModule({
  declarations: [
    AppComponent,
    BanksComponent,
    LoginComponent,
    HomeComponent,
    GestioneUtentiComponent,
    AddUserComponent,
    EditPasswordComponent,
    EditLockedComponent,
    EditBankFunctionalityComponent,
    ViewBankFunctionalityComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
