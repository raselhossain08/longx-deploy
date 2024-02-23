import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-preview-image',
  templateUrl: './preview-image.component.html',
  styleUrl: './preview-image.component.scss'
})
export class PreviewImageComponent {
  @Input() fileToPreview: File | null = null;
  imageUrl: string | ArrayBuffer | null = null;

  constructor() { }

  ngOnChanges() {
    if (this.fileToPreview) {
      const reader = new FileReader();
      reader.readAsDataURL(this.fileToPreview);
      reader.onload = () => {
        this.imageUrl = reader.result;
      };
    }
  }

}
