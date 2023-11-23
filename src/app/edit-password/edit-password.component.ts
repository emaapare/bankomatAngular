import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-edit-password',
  templateUrl: './edit-password.component.html',
  styleUrls: ['./edit-password.component.css']
})
export class EditPasswordComponent implements OnInit {
  userId: number = 0;
  userName: string = '';

  functionalities: any[] = [];

  users: User[] = [];
  selectedUser : User = {
    "Id" : 0,
    "Nome Utente" : 'aaa',
    "Password" : '',
    "Stato" : false,
    "Id Banca" : 0,
  };
  nuovaPassword: string = '';
  modificaRiuscita: boolean | undefined;
  confermaMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {
  }

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

  modificaPassword(): void {
    if (this.userId !== null) {
      this.userService.modificaPassword(this.userId, this.nuovaPassword).subscribe(
        response => {
          console.log('Risposta API:', response);
  
          if (typeof response === 'string') {
            console.log('Stringa di risposta:', response);
          } else {
            console.log('Password modificata con successo:', response);
            this.modificaRiuscita = true;
            this.confermaMessage = 'La modifica della password è avvenuta con successo!';
          }
        },
        error => {
          console.error('Errore durante la modifica della password:', error);
  
          if (error.status === 200) {
            console.log('La modifica della password è avvenuta con successo!');
            this.modificaRiuscita = true;
            this.confermaMessage = 'La modifica della password è avvenuta con successo!';
          } else if (error.status == 400){
            this.modificaRiuscita = false;
            this.confermaMessage = 'Si è verificato un errore durante la modifica della password';
            console.error('Errore durante la modifica della password (non 200):', error);
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
