import { Component, OnInit } from '@angular/core';
import { Tag } from 'src/app/models/Tag';
import { HttpRequestService } from 'src/app/services/http-request.service';

@Component({
  selector: 'app-tag-scroller',
  templateUrl: './tag-scroller.component.html',
  styleUrls: ['./tag-scroller.component.scss'],
})
export class TagScrollerComponent implements OnInit {
  tags: Tag[] = [];

  constructor(private requestService: HttpRequestService) {}

  ngOnInit(): void {
    this.requestService.getTags().subscribe(
      (tags: Tag[]) => {
        this.tags = tags.slice(0, 20);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
