import { Component, ViewChild } from '@angular/core';
import { ApexStroke, ApexTooltip, ChartComponent } from 'ng-apexcharts';
import {Clipboard} from '@angular/cdk/clipboard';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexFill,
  ApexDataLabels,
  ApexLegend,
} from 'ng-apexcharts';
import { AuthService } from 'src/app/client/Services/auth.service';
import { Router } from '@angular/router';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  fill: ApexFill;
  legend: ApexLegend;
  dataLabels: ApexDataLabels;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
};

@Component({
  selector: 'app-otc',
  templateUrl: './otc.component.html',
  styleUrls: ['./otc.component.scss'],
})
export class OTCComponent {
  currencyDrop:boolean = false;

  visible: boolean = false;
  totalBalance:number | undefined
  totalFee:number = 0;
  compareUsdt:number | undefined
  compareClp:number | undefined
  usdtPrice:any;
  clpPrice:any;
  MainBalance: string = ""; // Assuming MainBalance is initialized with an empty string
  // Parsing the MainBalance to a number
  GetBalance: number = 0;
  UsdtBalance =""
  IsSearch=false
  checkbox = false;
  clipboardText="RED TRON TRC-20"
  OTCstep1=false
  OTCstep2=true
  OTCstep3=false
  Method={name:"Seleccionar método", pic:"assets/flag/chile.svg"}
  isOpen=false;
  MethodList =[
    {name:"Seleccionar método", pic:"assets/flag/chile.svg"},
    {name:"Usdt",pic:"assets/logos/usdt.svg"},
   ]
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  public chartOptions2: Partial<ChartOptions>;

  constructor(private clipboard: Clipboard, private fb:FormBuilder, private authService: AuthService, private router:Router) {
    console.log(this.compareUsdt)
    this.fetchPrices()
    this.chartOptions = {
      series: [60, 40],
      chart: {
        type: 'donut',
        width: '250px',
        height: '250px',
      },
      legend: {
        show: false,
      },
      stroke: {
        colors: ['transparent', 'transparent'],
      },
      tooltip: {
        enabled: false,
      },
      labels: ['Vender', 'Comprar'],
      fill: {
        colors: ['rgba(45, 45, 60, 1)', '#C20505'],
      },
    };
    this.chartOptions2 = {
      series: [60, 40],
      chart: {
        type: 'donut',
        width: '250px',
        height: '250px',
      },
      legend: {
        show: false,
      },
      stroke: {
        colors: ['transparent', 'transparent'],
      },
      tooltip: {
        enabled: false,
      },
      labels: ['Vender', 'Comprar'],
      fill: {
        colors: ['rgba(45, 45, 60, 1)', 'rgba(8, 132, 50, 1)'],
      },
    };
    this.authService.userProfile().subscribe((user)=>{
      this.MainBalance=user.balance;
      var convertNum=parseFloat(this.MainBalance)
      let formattedNum =parseFloat(convertNum.toFixed(5))
      this.GetBalance=formattedNum
    })
  }
  OtcOne = this.fb.group({
    ValueUSDTConfirmed:["", Validators.required],
    TotalUSDT:["", Validators.required],
    Total:["", Validators.required],
    DepositTotalAddress:["", Validators.required],
    confirm:["", Validators.required]
  })
  OtcTwo = this.fb.group({
    ValueUSDTConfirmed:["", Validators.required],
    TotalUSDT:["", Validators.required],
    Total:["", Validators.required],
    DepositTotalAddress:["", Validators.required],
    confirm:["", Validators.required]
  })
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



  ];

  MethodChange(event:any){
    this.Method.name=event.name;
    this.Method.pic=event.pic;
    this.isOpen=false;
  }
  BuySell(){
    this.router.navigate(["/dashboard/buy-sell"])
  }
    // compare prices with
    compareUsdtPrice(e: any) {
      if (this.compareUsdt !== undefined) {
          // Parse the input value to ensure it's a number
          const inputValue: number = parseFloat(e.target.value);
          // Check if the parsed input value is a valid number
          if (!isNaN(inputValue)) {
              const balance: number = inputValue * 0.3;
              const currentUsdt: number =  balance + inputValue;
              this.totalBalance = currentUsdt;
              this.compareClp = currentUsdt * this.clpPrice
          } else {
              // Handle case where input value is not a valid number
              console.error('Input value is not a valid number.');
          }
      } else {
          // Handle case where this.compareUsdt is undefined
          console.error('this.compareUsdt is undefined.');
      }
  }


  compareClpPrice (e:any){
    this.compareUsdt =e.target.value / this.clpPrice
  }

  public calculateTotalFeeUsdt(): number {
    if (this.compareUsdt !== undefined) {
      const balance = this.compareUsdt * 0.03;
        return this.totalBalance =balance ;
  }
  else {
      // Handle the case when compareClp is undefined
      return 0; // or any other default value or error handling logic
  }
  }
  // fee
  public calculateTotalFee(): number {
    if (this.compareClp !== undefined) {
      const balance = this.compareClp * 0.03;
      return balance + this.compareClp;
  } else {
      // Handle the case when compareClp is undefined
      return 0; // or any other default value or error handling logic
  }
  }

  fetchPrices() {
    // Fetch USDT price
    this.authService.getCryptoPrice().subscribe((data: any) => {
      this.usdtPrice=data.usdtPrice
    });
    this.authService.getCryptoPrice().subscribe((data: any) => {
      this.clpPrice=data.clpPrice
    });
    // Fetch CHILE price
  }
}
