import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/client/Services/auth.service';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.scss']
})
export class MarketComponent {
  usdtPrice: any;
  clpPrice: any;

  MainBalance: string = ""; // Assuming MainBalance is initialized with an empty string
  // Parsing the MainBalance to a number
  GetBalance: number = 0;
  UsdtBalance =""
  constructor(private router:Router, private authService:AuthService){
    this.fetchPrices();
    this.authService.userProfile().subscribe((user)=>{
      this.MainBalance=user.balance;
      var convertNum=parseFloat(this.MainBalance)
      let formattedNum =parseFloat(convertNum.toFixed(5))
      this.GetBalance=formattedNum
    })
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
  compare(){
    this.router.navigate(["/dashboard/market-place/home"])
  }
}
