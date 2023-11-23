import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { BankService } from '../bank.service';
import { Bank } from '../bank';

@Component({
  selector: 'app-banks',
  templateUrl: './banks.component.html',
  styleUrls: ['./banks.component.css']
})
export class BanksComponent {
  banks: Bank[] = [];
  selectedBank? : Bank;

  constructor(private bankService: BankService, private router: Router){}

  getBanks(){
    this.bankService.getBanks().subscribe((banks) =>{ 
      this.banks = banks;
      console.log(banks)
    });
  }

  ngOnInit(): void {
    this.getBanks();
  }

  modificaBanca(bankId: number): void {
     this.router.navigate(['/edit-bank-functionality', bankId]);
  }

  visualizzaFunzionalita(bankId: number): void {
     this.router.navigate(['/view-bank-functionality', bankId]);
  }
}
