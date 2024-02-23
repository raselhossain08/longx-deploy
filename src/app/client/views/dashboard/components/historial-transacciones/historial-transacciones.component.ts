import { Component, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-historial-transacciones',
  templateUrl: './historial-transacciones.component.html',
  styleUrls: ['./historial-transacciones.component.scss']
})
export class HistorialTransaccionesComponent {
  BankName="Lorem ipsum"
  isOpen=false;
  BankList =[
    {name:"Banco del Estado de Chile"},
    {name:"Banco Santander-Chile"},
    {name:"SCOTIABANK CHILE"},
    {name:"Banco Falabella"},
   ]
  history=[
    {
      id:1,
      flag:"assets/flag/chile.svg",
      coinName:"Pesos Chilenos",
      coinSubName:"CLP",
      type:"Buy",
      typeBg:"buyC",
      date:"July 7 , 2023  -  2:28 AM",
      amount:"$2.000.00 USDT",
      state:"Canceled",
      stateC:"canceledC"
    },
    {
      id:2,
      flag:"assets/logos/usdt.svg",
      coinName:"Tether",
      coinSubName:"USDT",
      type:"Sell",
      typeBg:"sellC",
      date:"July 7 , 2023  -  2:28 AM",
      amount:"$2.000.00 USDT",
      state:"Pending",
      stateC:"pendingC"
    },
    {
      id:3,
      flag:"assets/flag/chile.svg",
      coinName:"Pesos Chilenos",
      coinSubName:"CLP",
      type:"Exchange",
      typeBg:"exchangeC",
      date:"July 7 , 2023  -  2:28 AM",
      amount:"$2.000.00 USDT",
      state:"Canceled",
      stateC:"canceledC"
    },
    {
      id:4,
      flag:"assets/flag/chile.svg",
      coinName:"Pesos Chilenos",
      coinSubName:"CLP",
      type:"Withdraw",
      typeBg:"withdrawC",
      date:"July 7 , 2023  -  2:28 AM",
      amount:"$2.000.00 USDT",
      state:"done",
      stateC:"doneC"
    },
    {
      id:5,
      flag:"assets/logos/usdt.svg",
      coinName:"Tether",
      coinSubName:"USDT",
      type:"Deposit",
      typeBg:"depositC",
      date:"July 7 , 2023  -  2:28 AM",
      amount:"$2.000.00 USDT",
      state:"Pending",
      stateC:"pendingC"
    },
    {
      id:6,
      flag:"assets/flag/chile.svg",
      coinName:"Pesos Chilenos",
      coinSubName:"CLP",
      type:"Buy",
      typeBg:"buyC",
      date:"July 7 , 2023  -  2:28 AM",
      amount:"$2.000.00 USDT",
      state:"Canceled",
      stateC:"canceledC"
    },
    {
      id:7,
      flag:"assets/logos/usdt.svg",
      coinName:"Tether",
      coinSubName:"USDT",
      type:"Sell",
      typeBg:"sellC",
      date:"July 7 , 2023  -  2:28 AM",
      amount:"$2.000.00 USDT",
      state:"Pending",
      stateC:"pendingC"
    },
    {
      id:8,
      flag:"assets/flag/chile.svg",
      coinName:"Pesos Chilenos",
      coinSubName:"CLP",
      type:"Exchange",
      typeBg:"exchangeC",
      date:"July 7 , 2023  -  2:28 AM",
      amount:"$2.000.00 USDT",
      state:"Canceled",
      stateC:"canceledC"
    },
    {
      id:9,
      flag:"assets/flag/chile.svg",
      coinName:"Pesos Chilenos",
      coinSubName:"CLP",
      type:"Withdraw",
      typeBg:"withdrawC",
      date:"July 7 , 2023  -  2:28 AM",
      amount:"$2.000.00 USDT",
      state:"done",
      stateC:"doneC"
    },
    {
      id:10,
      flag:"assets/logos/usdt.svg",
      coinName:"Tether",
      coinSubName:"USDT",
      type:"Deposit",
      typeBg:"depositC",
      date:"July 7 , 2023  -  2:28 AM",
      amount:"$2.000.00 USDT",
      state:"Pending",
      stateC:"pendingC"
    },
  ]
  BankNameChange(event:any){
    this.BankName=event.srcElement.innerText
    this.isOpen=false;
  }
}
