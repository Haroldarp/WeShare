import { Component, OnInit } from '@angular/core';
import { HttpRequestService } from 'src/app/services/http-request.service';
import { faCloudUploadAlt, faCircle, faFileImage, faClock, faHdd } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-upload-image-page',
  templateUrl: './upload-image-page.component.html',
  styleUrls: ['./upload-image-page.component.scss'],
})
export class UploadImagePageComponent {
  files: File[] = [];
  fileToUploadIndex = 0;
  uploading = false;
  progressBarPercentage = 0;
  faCloudUploadAlt = faCloudUploadAlt;
  faCircle = faCircle;
  faFileImage = faFileImage;
  faClock = faClock;
  faHdd = faHdd;

  constructor(private requestService: HttpRequestService) {}

  onSelect(event: any) {
    this.files.push(...event.addedFiles);
    console.log(this.files);
  }

  onRemove(event: any) {
    this.files.splice(this.files.indexOf(event), 1);
  }

  uploadFiles() {
    if (this.files.length > 0) {
      this.uploading = true;
      this.uploadNextFile();
    }
  }

  uploadNextFile() {
    if (this.files.length > this.fileToUploadIndex) {
      this.requestService
        .uploadImage(this.files[this.fileToUploadIndex])
        .subscribe(
          (result) => {
            this.fileToUploadIndex++;
            this.calcProgressBarPercentage();
            this.uploadNextFile();
          },
          (error) => {
            this.fileToUploadIndex++;
            this.calcProgressBarPercentage();
            this.uploadNextFile();
          }
        );
    } else {
      setTimeout(() => {
        this.uploadFinish();
      }, 1000);
    }
  }

  uploadFinish() {
    this.fileToUploadIndex = 0;
    this.files = [];
    this.uploading = false;
    this.progressBarPercentage = 0;
  }

  calcProgressBarPercentage() {
    this.progressBarPercentage = Math.floor((this.fileToUploadIndex/this.files.length)*100);
  }
}
