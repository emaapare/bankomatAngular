import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-edit-locked',
  templateUrl: './edit-locked.component.html',
  styleUrls: ['./edit-locked.component.css']
})
export class EditLockedComponent implements OnInit {
  userId: number = 0;
  userName: string = '';
  bloccato: boolean = false;
  modificaRiuscita: boolean | undefined;
  confermaMessage: string = '';
  selectedUser : User = {
    "Id" : 0,
    "Nome Utente" : 'aaa',
    "Password" : '',
    "Stato" : false,
    "Id Banca" : 0,
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.userId = this.recuperaUserId();
    this.getUserName();

    this.route.paramMap.subscribe(params => {
      this.userId = Number(params.get('id'));
    });

    this.userService.getUserNameById(this.userId).subscribe(x => this.selectedUser = x);
  }

  private recuperaUserId(): number {
    const idFromRoute = this.route.snapshot.paramMap.get('id');

    if (idFromRoute === null) {
      console.error('ID utente non presente nella route.');
      this.router.navigate(['/gestione-utenti']);
      throw new Error('ID utente non presente nella route.');
    }

    return +idFromRoute;
  }

  modificaBloccato(): void {
    if (this.userId !== null) {
      this.userService.modificaBloccato(this.userId, this.bloccato).subscribe(
        response => {
          console.log('Risposta API:', response);
          if (typeof response === 'string') {
            console.log('Stringa di risposta:', response);
          } else {
            console.log('Stato di blocco modificato con successo:', response);
            this.modificaRiuscita = true;
            this.confermaMessage = 'La modifica dello stato di blocco è avvenuta con successo!';
          }
        },
        error => {
          console.error('Errore durante la modifica dello stato di blocco:', error);
  
          if (error.status === 200) {
            console.log('La modifica dello stato di blocco è avvenuta con successo!');
            this.modificaRiuscita = true;
            this.confermaMessage = 'La modifica dello stato di blocco è avvenuta con successo!';
          } else{
            this.modificaRiuscita = false;
            this.confermaMessage = 'Si è verificato un errore durante la modifica dello stato di blocco';
            console.error('Errore durante la modifica dello stato di blocco (non 200):', error);
          }
        }
      );
    }
  }

  getUserName(): void {
    this.userService.getUserNameById(this.userId).subscribe(
      (data: any) => {
        console.log('Risposta API getUserNameById:', data);
        this.userName = data.nome;
      },
      error => {
        console.error('Errore nel recupero del nome dell\'utente:', error);
      }
    );
  }
  
}
