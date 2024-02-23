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
import { AuthService } from '../../../../../Services/auth.service';

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
  selector: 'app-clip-wallet',
  templateUrl: './clip-wallet.component.html',
  styleUrls: ['./clip-wallet.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ClipWalletComponent {
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
  IsSearch=false
  portfolioList = [
    {
      name: 'Tether',
      price: '$ 4,847,4  USDT',
      img: 'assets/logos/usdt.svg',
      url: '/billetera/usdt',
    },
    {
      name: 'Tronix',
      price: '$ 4,847,4  USDT',
      img: 'assets/logos/tronix.svg',
      url: '',
    },
    {
      name: 'Bitcoin',
      price: '$ 4,847,4  USDT',
      img: 'assets/logos/bitcoin.svg',
      url: '',
    },
    {
      name: 'Injective',
      price: '$ 4,847,4  USDT',
      img: 'assets/logos/Injective.svg',
      url: '',
    },
    {
      name: 'Ethereum',
      price: '$ 4,847,4  USDT',
      img: 'assets/logos/ethereum.svg',
      url: '',
    },
  ];
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  public chartOptions2: Partial<ChartOptions2>;

  constructor(private router: Router, private authService:AuthService) {
    this.fetchPrices()
    this.authService.userProfile().subscribe((user)=>{
      this.MainBalance=user.balance;
      var convertNum=parseFloat(this.MainBalance)
      let formattedNum =parseFloat(convertNum.toFixed(5))
      this.GetBalance=formattedNum
    })
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
      ],
      fill: {
        type: 'gradient',
        colors: ['green'],
        gradient: {
          type: 'vertical',
          opacityFrom: 1,
          opacityTo: 0,
        },
      },
      chart: {
        height: 600,
        type: 'area',
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
  usdWallet(){
    this.router.navigate(['/dashboard/wallet/usdt']);
  }
  ClipWallet(){
    this.router.navigate(['/dashboard/wallet/clp']);
  }
  withdraw(){
    this.router.navigate(["/dashboard/wallet/withdraw"]);
  }
  deposit(){
    this.router.navigate(["/dashboard/wallet/deposit"]);
  }
  BuySell(){
    this.router.navigate(["/dashboard/buy-sell"])
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
