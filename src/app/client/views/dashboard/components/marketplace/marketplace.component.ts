import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.scss']
})
export class MarketplaceComponent {
  constructor(private router:Router){}
  compare(){
    this.router.navigate(['/'])
  }
}
