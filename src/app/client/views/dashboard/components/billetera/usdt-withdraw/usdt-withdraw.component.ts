import { Component } from '@angular/core';
import {Clipboard} from '@angular/cdk/clipboard';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usdt-withdraw',
  templateUrl: './usdt-withdraw.component.html',
  styleUrls: ['./usdt-withdraw.component.scss']
})
export class UsdtWithdrawComponent {
  checkbox = false;
  selectAddress=false
  selectBank=true
  IsSearch=false
  isWallet=false
  isBankNumber=false
  isBankType=false
  isNetwork=false
  clipboardText="02154dsf4g8hxdrer45gh4245884"
  selectWallet={name:"USDT",pic:"/assets/logos/usdt.svg"}
  Network="Tron TRC 20"
  AccountTypeName="CTA"
  uploadPhoto="Upload file"
  WalletList =[
    {name:"USDT",pic:"/assets/logos/usdt.svg"},
    {name:"BTC",pic:"/assets/logos/bitcoin.svg"},
    {name:"ETH",pic:"/assets/logos/ethereum.svg"},
    {name:"INJ",pic:"/assets/logos/Injective.svg"},
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

  walletChange(event:any){
    this.selectWallet.name= event.name
    this.selectWallet.pic= event.pic
    this.isWallet=false;
  }
  NetworkChange(event:any){
    this.Network=event.srcElement.innerText
    this.isNetwork=false;
  }
  AccountTypeChange(event:any){
    this.AccountTypeName=event.srcElement.innerText
    this.isBankType=false;
  }

}
