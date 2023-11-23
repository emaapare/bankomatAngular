import { Component, OnInit } from '@angular/core';
import { BankService } from '../bank.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-bank-functionality',
  templateUrl: './edit-bank-functionality.component.html',
  styleUrls: ['./edit-bank-functionality.component.css'],
})
export class EditBankFunctionalityComponent implements OnInit {
  bankId: number = 0;
  functionalities: any[] = [];
  allFunctionalities: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private bankService: BankService
  ) {}

  ngOnInit(): void {
    this.bankId = this.getBankIdFromRoute();
    this.loadFunctionalities();
    this.getFunctionalities();
  }

  private getBankIdFromRoute(): number {
    const idFromRoute = this.route.snapshot.paramMap.get('id');

    if (idFromRoute === null) {
      console.error('ID banca non presente nella route.');
      throw new Error('ID banca non presente nella route.');
    }

    return +idFromRoute;
  }

  loadFunctionalities(): void {
    this.bankService.getBankFunctionalities(this.bankId).subscribe(
      (data: any) => {
        this.functionalities = data.map((functionality: any) => ({
          id: functionality.id,
          nome: functionality.nome,
          selected: true, // impostata a 'true' se la funzionalità è presente nella banca
        }));
      },
      (error) => {
        console.error('Errore nella chiamata API per le funzionalità:', error);
      }
    );
  }

  private getFunctionalities(): void {
    this.bankService.getFunctionalities().subscribe(
      (data: any) => {
        this.allFunctionalities = data;
      },
      (error) => {
        console.error('Errore nella chiamata API per le funzionalità:', error);
      }
    );
  }

  isFunctionalityActive(functionality: any): boolean {
    const activeFunctionality = this.functionalities.find((f) => f.id === functionality.id);
    return activeFunctionality ? activeFunctionality.selected : false;
  }

  attivaDisattivaFunzionalita(functionality: any): void {
    const isActive = this.isFunctionalityActive(functionality);

    if (isActive) {
      this.bankService.rimuoviFunzionalita(this.bankId, functionality.id).subscribe(
        () => {
          console.log('Funzionalità disattivata con successo.');
        },
        (error) => {
          console.error('Errore durante la disattivazione della funzionalità:', error);
        }
      );
    } else {
      this.bankService.aggiungiFunzionalita(this.bankId, functionality.id).subscribe(
        () => {
          console.log('Funzionalità attivata con successo.');
        },
        (error) => {
          console.error('Errore durante l\'attivazione della funzionalità:', error);
        }
      );
    }
  }
}