import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexFill,
  ApexDataLabels,
  ApexLegend,
  ApexStroke,
  ApexTooltip,
  ChartComponent,
  ApexAxisChartSeries,
  ApexXAxis,
  ApexMarkers,
  ApexPlotOptions,
} from 'ng-apexcharts';
import { AuthService } from 'src/app/client/Services/auth.service';

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

export type ChartOptions2 = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
  fill: ApexFill;
  markers: ApexMarkers;
  plotOptions: ApexPlotOptions;
};
@Component({
  selector: 'app-comprar-vender',
  templateUrl: './comprar-vender.component.html',
  styleUrls: ['./comprar-vender.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ComprarVenderComponent {
  currencyDrop:boolean = false;
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
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  public chartOptions2: Partial<ChartOptions2>;
  constructor(private router: Router, private authService:AuthService) {
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
      series: [
        {
          name: '$',
          data: [650, 680, 690, 750, 400, 500, 300, 200, 500],
        },
        {
          name: '$',
          data: [400, 550, 470, 500, 200, 400, 200, 100, 400],
        },
      ],

      fill: {
        type: 'fill',
        colors: ['#F44336', '#E91E63', '#9C27B0']
      },
      chart: {
        height: 400,
        type: 'line',
      },
      dataLabels: {
        enabled: false,
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
        shape: 'circle',
        radius: 2,
        offsetX: 0,
        offsetY: 0,
        onClick: undefined,
        onDblClick: undefined,
        showNullDataPoints: true,
        hover: {
          size: undefined,
          sizeOffset: 3,
        },
      },
      stroke: {},
      xaxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'April',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm',
        },
      },
    };
  }
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

  withdraw(){
    this.router.navigate(["/dashboard/wallet/withdraw"]);
  }
  deposit(){
    this.router.navigate(["/dashboard/wallet/deposit"]);
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
