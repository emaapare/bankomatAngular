import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BanksComponent } from './banks/banks.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { GestioneUtentiComponent } from './gestione-utenti/gestione-utenti.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditPasswordComponent } from './edit-password/edit-password.component';
import { EditLockedComponent } from './edit-locked/edit-locked.component';
import { EditBankFunctionalityComponent } from './edit-bank-functionality/edit-bank-functionality.component';
import { ViewBankFunctionalityComponent } from './view-bank-functionality/view-bank-functionality.component';

const routes: Routes = [
  { path : 'banks', component: BanksComponent},
  { path : 'login', component: LoginComponent},
  { path : 'home', component: HomeComponent},
  { path: 'gestione-utenti', component: GestioneUtentiComponent},
  { path: 'add-user', component: AddUserComponent},
  { path: 'edit-password/:id', component: EditPasswordComponent},
  { path: 'edit-locked/:id', component: EditLockedComponent},
  { path: 'edit-bank-functionality/:id', component: EditBankFunctionalityComponent },
  { path: 'view-bank-functionality/:id', component: ViewBankFunctionalityComponent},
  { path : '', redirectTo: '/login', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
