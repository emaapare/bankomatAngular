import { Component, OnInit } from '@angular/core';
import { BankService } from '../bank.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-bank-functionality',
  templateUrl: './view-bank-functionality.component.html',
  styleUrls: ['./view-bank-functionality.component.css']
})
export class ViewBankFunctionalityComponent implements OnInit{
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

  private loadFunctionalities(): void {
    this.bankService.getBankFunctionalities(this.bankId).subscribe(
      (data: any) => {
        this.functionalities = data;
      },
      error => {
        console.error('Errore nella chiamata API per le funzionalità:', error);
      }
    );
  }

  private getFunctionalities():void{
    this.bankService.getFunctionalities().subscribe(
      (data: any) => {
        this.allFunctionalities = data;
      },
      error => {
        console.error('Errore nella chiamata API per le funzionalità:', error);
      }
    );
  }
}
