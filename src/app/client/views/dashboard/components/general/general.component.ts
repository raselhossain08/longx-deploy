import { Component, OnInit, ViewChild, ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";
import { ApexMarkers, ApexOptions, ApexPlotOptions } from 'ng-apexcharts'
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTooltip,
  ApexStroke,
  ApexFill
} from "ng-apexcharts";
import { AuthService } from "src/app/client/Services/auth.service";
import { HttpClient } from '@angular/common/http';
interface WalletData {
  name: string;
  balance: number;
  // Add other properties if needed
}

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
  fill:ApexFill,
  markers:ApexMarkers
  plotOptions:ApexPlotOptions
};
@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GeneralComponent implements OnInit {
  visible: boolean = false;
  totalFee:number = 0;
  compareUsdt:number | undefined
  compareClp:number | undefined
  usdtPrice:any;
  clpPrice:any;
  MainBalance: string = ""; // Assuming MainBalance is initialized with an empty string
  // Parsing the MainBalance to a number
  GetBalance: number = 0;
  UsdtBalance =""
  currencyDrop=false
  clip=true
  usdtDrop=false
  currentDrop={name:"Clip",pic:"assets/logos/chile.svg"}

  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  public chartOptions2: Partial<ChartOptions>;
  constructor(private router:Router, private authService:AuthService, private http:HttpClient){
    this.fetchPrices();
    this.chartOptions = {

      series: [
        {
          name: "$",
          data: [0,1800,0,1900,800,2100,400,1000]
        },
      ],
      fill: {
        type: "gradient",
        colors:["green"],
        gradient: {
          type: "vertical",
          opacityFrom: 1,
          opacityTo: 0,
        },
      },
      chart: {
        height: 400,
        type: "area",
      },
      dataLabels: {
        enabled: false
      },
      markers: {
        size: 0,
        colors: undefined,
        strokeColors: '#fff',
        strokeWidth: 2,
        strokeOpacity: 0.9,
        strokeDashArray: 0,
        fillOpacity: 1,
        discrete: [],
        shape: "circle",
        radius: 2,
        offsetX: 0,
        offsetY: 0,
        onClick: undefined,
        onDblClick: undefined,
        showNullDataPoints: true,
        hover: {
          size: undefined,
          sizeOffset: 3
        }
     },
      stroke: {
        curve: "smooth"
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2023-11-19T00:00:00.000Z",
          "2023-11-19T01:30:00.000Z",
          "2023-11-19T02:30:00.000Z",
          "2023-11-19T03:30:00.000Z",
          "2023-11-19T04:30:00.000Z",
          "2023-11-19T05:30:00.000Z",
          "2023-11-19T06:30:00.000Z"
        ]
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm"
        }
      }
    };
    this.chartOptions2 = {
      series: [
        {
          name: "$",
          data: [0,1000,0,1200,1800,1200,400,600,200,800,1000,100,500]
        },
      ],
      chart: {
        height: 400,
        type: "area",

      },

      fill: {
        type: "gradient",
        colors:["green"],
        gradient: {
          type: "vertical",
          opacityFrom: 1,
          opacityTo: 0,
        },
      },
      dataLabels: {
        enabled: false,
        style: {
          colors: ['#333']
        },
      },
      stroke: {
        curve: "smooth",
        show: true,
        colors:["green"]
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2023-11-19T00:00:00.000Z",
          "2023-11-19T01:30:00.000Z",
          "2023-11-19T02:30:00.000Z",
          "2023-11-19T03:30:00.000Z",
          "2023-11-19T04:30:00.000Z",
          "2023-11-19T05:30:00.000Z",
          "2023-11-19T06:30:00.000Z",
          "2023-11-19T07:30:00.000Z",
          "2023-11-19T08:30:00.000Z",
          "2023-11-19T09:30:00.000Z",
          "2023-11-19T10:30:00.000Z",
          "2023-11-19T11:30:00.000Z",
          "2023-11-19T12:30:00.000Z",
        ]
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm"
        }
      }
    };
    this.authService.userProfile().subscribe((user)=>{
      this.MainBalance=user.balance;
      var convertNum=parseFloat(this.MainBalance)
      let formattedNum =parseFloat(convertNum.toFixed(5))
      this.GetBalance=formattedNum
    })
  }

  ChangeClip(){
    this.router.navigate(["/billetera"]);
  }
  ChangeUsdt(){
    this.router.navigate(["billetera/usdt"]);
  }
  isClipDrop(){
  this.clip=true
  this.usdtDrop=false
  this.currentDrop.name="Clip"
  this.currentDrop.pic="assets/logos/chile.svg"
  this.currencyDrop=false
 }
 isUsdtDrop(){
  this.usdtDrop=!this.usdtDrop
  this.clip=false
  this.currentDrop.name="usdt"
  this.currentDrop.pic="assets/logos/usdt.svg"
  this.currencyDrop=false
 }

  withdraw(){
    this.router.navigate(["/dashboard/wallet/withdraw"]);
  }
  deposit(){
    this.router.navigate(["/dashboard/wallet/clp"]);
  }
  clipRoute(){
    this.router.navigate(["/dashboard/wallet/clp"])
  }
  usdtRoute(){
    this.router.navigate(["/dashboard/wallet/usdt"])
  }
  rwaRoute(){
    this.router.navigate(["/dashboard/market-place"])
  }
  BuySell(){
    this.router.navigate(["/dashboard/buy-sell"])
  }
  ngOnInit(): void {
      console.log(this.GetBalance * 970)
  }


  // compare prices with
  compareUsdtPrice (e:any){
      this.compareClp =e.target.value * this.clpPrice
  }
  compareClpPrice (e:any){
    this.compareUsdt =e.target.value / this.clpPrice
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

  // compare-price end



  showDialog() {
      this.visible = true;
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
