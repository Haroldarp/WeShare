import { Component, Input, Output, EventEmitter } from '@angular/core';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { S3Image } from 'src/app/models/S3Image';

@Component({
  selector: 'app-image-container',
  templateUrl: './image-container.component.html',
  styleUrls: ['./image-container.component.scss']
})
export class ImageContainerComponent {

  @Input() imageUrl: string = '';
  @Output() imageClick = new EventEmitter<string>();
  @Output() download = new EventEmitter<string>();
  faDownload = faDownload;
  defaultImage = '../../../assets/images/loop-loading-loading.gif';

  onImageClick(){
    if(this.imageUrl){
      this.imageClick.emit(this.imageUrl);
    }
  }

  onDownload(e: any){
    e.preventDefault();
    e.stopPropagation();
    if(this.imageUrl){
      this.download.emit(this.imageUrl);
    }
  }
}
