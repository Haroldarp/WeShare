import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { S3Image } from 'src/app/models/S3Image';
import { HttpRequestService } from 'src/app/services/http-request.service';
declare var require: any
const FileSaver = require('file-saver');

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
})
export class SearchPageComponent implements OnInit {
  tagName = '';
  popupImageUrl: string | null = '';
  popupOpen = false;
  imagesToLoad: S3Image[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private requestService: HttpRequestService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      this.tagName = param['tagName'];
      if (this.tagName) {
        this.getImagesByTag();
      } else {
        this.getImages();
      }
    });
  }

  getImages() {
    this.requestService.getImages().subscribe(
      (images: S3Image[]) => {
        console.log(images);
        this.imagesToLoad = images;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getImagesByTag() {
    this.requestService.getImagesByTag(this.tagName).subscribe(
      (images: S3Image[]) => {
        console.log(images);
        this.imagesToLoad = images;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  onImageClick(imageUrl: string) {
    this.popupImageUrl = imageUrl;
    this.popupOpen = true;
  }

  closeModal() {
    this.popupOpen = false;
  }

  downloadImage(imageUrl: string){
    FileSaver.saveAs(imageUrl, 'your_image');
  }
}
