import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SharedService } from 'src/app/client/Services/SharedService.service';
import { AuthService } from 'src/app/client/Services/auth.service';

@Component({
  selector: 'app-company-verification',
  templateUrl: './company-verification.component.html',
  styleUrl: './company-verification.component.scss'
})
export class CompanyVerificationComponent {

  selectedFiles!: FileList;

  constructor(private authService: AuthService, private Toaster:ToastrService,private sharedService: SharedService) { }




  toggleDetails(): void {
    const  toggleState=false;
    this.sharedService.emitCompanyChanged(toggleState);
  }

  onFileChange(event:any): void {
    this.selectedFiles = event.target.files;
  }

  uploadFiles(): void {
    if (!this.selectedFiles || this.selectedFiles.length === 0) {
      this.Toaster.warning('No files selected')
      console.error('No files selected.');
      return;
    }
    const filesArray: File[] = Array.from(this.selectedFiles);
    this.authService.uploadCompanyData(filesArray).subscribe(
      response => {
        this.Toaster.success('Files uploaded successfully:')
        console.log('Files uploaded successfully:', response);
        this.toggleDetails()
        // Handle success
      },
      error => {
        this.Toaster.warning('Error uploading files')
        console.error('Error uploading files:', error);
        // Handle error
      }
    );
  }
}
