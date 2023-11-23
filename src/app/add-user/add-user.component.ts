// add-user.component.ts
import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { flatMap } from 'rxjs';
import { Bank } from '../bank';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

  banks: Bank[] = [];

  nuovoUtente: User = {
    "Id": 0,
    "Nome Utente": '',
    "Password": '',
    "Stato": false,
    "Id Banca": 0
  };

  constructor(private userService: UserService, private bankService: BankService) 
  {
    this.getBanks();
  }

  aggiungiUtente(): void {
    this.userService.aggiungiUtente(this.nuovoUtente).subscribe(
      (response: User) => {
        console.log('Utente aggiunto con successo:', response);
        this.nuovoUtente = {
          "Id": 0,
          "Nome Utente": '',
          "Password": '',
          "Stato": false,
          "Id Banca": 0
        };
      },
      error => {
        console.error('Errore durante l\'aggiunta dell\'utente:', error);
      }
    );
  }

  getBanks(){
    this.bankService.getBanks().subscribe((banks) =>{ 
      this.banks = banks;
      console.log(banks)
    });
  }
}
