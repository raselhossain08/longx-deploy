import { AuthService } from '../../../../../Services/auth.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { SharedService } from 'src/app/client/Services/SharedService.service';
@Component({
  selector: 'app-person-verification',

  templateUrl: './person-verification.component.html',
  styleUrl: './person-verification.component.scss'
})
export class PersonVerificationComponent {

  selectedFiles!: FileList;

  constructor(private authService: AuthService, private Toaster:ToastrService,private sharedService: SharedService) { }

  ;


  toggleDetails(): void {
    const toggleState=false
    this.sharedService.emitPersonVChanged(toggleState);
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
    this.authService.uploadPersonData(filesArray).subscribe(
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
