import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { Router } from '@angular/router';
import { BankService } from '../bank.service';
import { Bank } from '../bank';

@Component({
  selector: 'app-gestione-utenti',
  templateUrl: './gestione-utenti.component.html',
  styleUrls: ['./gestione-utenti.component.css']
})
export class GestioneUtentiComponent implements OnInit {

  banks: Bank[] = [];
  users: User[] = [];

  constructor(private userService: UserService, private router: Router, private bankService: BankService) { 
    this.getBanks();
  }

  ngOnInit(): void {
    this.caricaUtenti();
  }

  caricaUtenti(): void {
    this.userService.getUsers().subscribe(
      (data: User[]) => {
        this.users = data;
      },
      error => {
        console.error('Errore nella chiamata API:', error);
      }
    );
  }

  cancellaUtente(user: User): void {
    const confermaCancellazione = confirm(`Sei sicuro di voler cancellare l'utente ${user['Nome Utente']}?`);

    if (confermaCancellazione) {
      this.userService.cancellaUtente(user.Id).subscribe(
        () => {
          console.log(`L'utente ${user['Nome Utente']} è stato cancellato con successo.`);
          this.caricaUtenti();
        },
        error => {
          console.error('Errore durante la cancellazione dell\'utente:', error);
        }
      );
    }
  }

  modificaPasswordUtente(userId: number): void {
    this.router.navigate(['/edit-password', userId]);
  }

  modificaBloccatoUtente(userId: number): void {
    this.router.navigate(['/edit-locked', userId]);
  }

  getBanks(){
    this.bankService.getBanks().subscribe((banks) =>{ 
      this.banks = banks;
      console.log(banks)
    });
  }

  getBankName(bankId: number): string {
    const bank = this.banks.find(b => b.id === bankId);
    return bank ? bank.nome : 'Banca non trovata';
  }
}
