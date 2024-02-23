import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/client/Services/auth.service';
import { NgForm } from '@angular/forms';
interface UserProfile {
  name: string;
  email: string;
  _id:string
}
@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrl: './personal-details.component.scss'
})
export class PersonalDetailsComponent {
  getProfile: UserProfile | null = null;
  profileSetData:any
  profileData:any;
  isDropdownOpen: boolean = false;
  CurrentBankName="BancoEstado"
  BankOption=[
    { id: 1, name: "Banco de Chile" },
    { id: 2, name: "Banco Consorcio" },
    { id: 3, name: "BancoEstado" }
  ]
  bankSubmit(e:any){
    this.CurrentBankName=e.name
    this.isDropdownOpen=false
  }
  constructor(private fb:FormBuilder , private authService:AuthService,private toaster:ToastrService){

    this.authService.userProfile().subscribe((res: UserProfile) => {
      this.getProfile = res;
    });
   }
   //  profile Form
       personalDetails= this.fb.group({
        _id:[""],
        home:["",Validators.required],
        city:["",Validators.required],
        country:["",Validators.required],
        regionState:["",Validators.required],
        nationality:["",Validators.required],
        bankName:[""],
        bankAccountNumber:["",Validators.required],
        accountName:["",Validators.required],
        rut:["",Validators.required],
       })
   ngOnInit(): void {
    this.authService.userInformationGet().subscribe(res=>{
      var userInfo = JSON.stringify(res.document )
      localStorage.setItem('userInfo',userInfo)
    })
    const userInfo = localStorage.getItem('userInfo');
    if (userInfo !== null) {
      const userInfoConvert = JSON.parse(userInfo);
      this.profileSetData=userInfoConvert
    } else {
      console.log("No user profile found in localStorage");
    }
    this.personalDetails.patchValue({
      home:`${this.profileSetData[0].home}`,
      city:this.profileSetData[0].city,
      country:this.profileSetData[0].country,
      regionState:this.profileSetData[0].regionState,
      nationality:this.profileSetData[0].nationality,
      bankName:this.profileSetData[0].bankName,
      bankAccountNumber:this.profileSetData[0].bankAccountNumber,
      accountName:this.profileSetData[0].accountName,
      rut:this.profileSetData[0].rut,
    });
    this.CurrentBankName=this.profileSetData[0].bankName
  }

  submitForm(){
    this.personalDetails.patchValue({
      bankName:this.CurrentBankName,
      _id:`${this.getProfile?._id}`
    });
    console.log(this.getProfile?._id)
    const userInfo =this.personalDetails.value
      this.authService.userInformation(userInfo).subscribe(res=>{
        this.toaster.success("Information Submitted Successfully!" )
        this.personalDetails.setValue({
          _id:res.id,
          home:res.home,
          city:res.city,
          country:res.country,
          regionState:res.regionState,
          nationality:res.nationality,
          bankName:res.bankName,
          bankAccountNumber:res.bankAccountNumber,
          accountName:res.accountName,
          rut:res.rut,
        })

      }
      )
  }


}
