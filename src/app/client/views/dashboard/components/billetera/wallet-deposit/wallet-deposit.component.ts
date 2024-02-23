import { Component } from '@angular/core';
import {Clipboard} from '@angular/cdk/clipboard';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
@Component({
  selector: 'app-wallet-deposit',
  templateUrl: './wallet-deposit.component.html',
  styleUrls: ['./wallet-deposit.component.scss']
})
export class WalletDepositComponent {
  selectBank=false
  IsSearch=false
  isBankName=false
  isBankNumber=false
  isBankType=false
  isNetwork=false
  clipboardText="02154dsf4g8hxdrer45gh4245884"
  BankName="Lorem ipsum"
  BankNumber="1234-2574-25410"
  AccountTypeName="CTA"
  uploadPhoto="Upload file"
  BankList =[
    {name:"Banco del Estado de Chile"},
    {name:"Banco Santander-Chile"},
    {name:"SCOTIABANK CHILE"},
    {name:"Banco Falabella"},
   ]
   BankNumberList=[
    {name:"1234-2574-25410"},
    {name:"1214-2074-20410"},
    {name:"0234-0574-05410"},
    {name:"2234-1574-15410"},
   ]
   AccountTypeList=[
    {name:"CTA"},
    {name:"BTA"},
    {name:"GTA"},
    {name:"MTA"},
   ]
   history = [
    {
      id: 1,
      flag: 'assets/flag/chile.svg',
      coinName: 'CLP',
      type: 'Buy',
      typeBg: 'buyC',
      state: 'Canceled',
      stateC: 'canceledC',
      time: '06.01 AM',
    },
    {
      id: 2,
      flag: 'assets/logos/usdt.svg',
      coinName: 'USDT',
      type: 'Sell',
      typeBg: 'sellC',
      state: 'Pending',
      stateC: 'pendingC',
      time: '06.01 AM',
    },
    {
      id: 3,
      flag: 'assets/flag/chile.svg',
      coinName: 'CLP',
      type: 'Exchange',
      typeBg: 'exchangeC',
      state: 'Done',
      stateC: 'doneC',
      time: '06.01 AM',
    },
    {
      id: 4,
      flag: 'assets/flag/chile.svg',
      coinName: 'CLP',
      type: 'Exchange',
      typeBg: 'exchangeC',
      state: 'Canceled',
      stateC: 'canceledC',
      time: '06.01 AM',
    },
    {
      id: 5,
      flag: 'assets/logos/usdt.svg',
      coinName: 'USDT',
      type: 'Sell',
      typeBg: 'sellC',
      state: 'Pending',
      stateC: 'pendingC',
      time: '06.01 AM',
    },
    {
      id: 6,
      flag: 'assets/flag/chile.svg',
      coinName: 'CLP',
      type: 'Exchange',
      typeBg: 'exchangeC',
      state: 'Done',
      stateC: 'doneC',
      time: '06.01 AM',
    },
    {
      id: 7,
      flag: 'assets/flag/chile.svg',
      coinName: 'CLP',
      type: 'Buy',
      typeBg: 'buyC',
      state: 'Canceled',
      stateC: 'canceledC',
      time: '06.01 AM',
    },


  ];
  NetworkList=[
    {
      name:"Tron  TRC 20"
    },
    {
      name:"BTC"
    },
    {
      name:"LTC"
    },
    {
      name:"BNB"
    }
  ]

  constructor(private clipboard: Clipboard){

  }

  BankNameChange(event:any){
    this.BankName=event.srcElement.innerText
    this.isBankName=false;
  }
  BankNumberChange(event:any){
    this.BankNumber=event.srcElement.innerText
    this.isBankNumber=false;
  }
  AccountTypeChange(event:any){
    this.AccountTypeName=event.srcElement.innerText
    this.isBankType=false;
  }
}
