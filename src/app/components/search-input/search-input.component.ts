import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { Tag } from 'src/app/models/Tag';
import { HttpRequestService } from 'src/app/services/http-request.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent implements OnInit {
  searchInput = new FormControl();
  @Input() options: string[] = [];
  filteredOptions: Observable<string[]> | undefined;

  constructor(private requestService: HttpRequestService,  private router: Router) {}

  ngOnInit(): void {
    this.setOptions();
    this.filteredOptions = this.searchInput.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter((option) =>
      filterValue? option.toLowerCase().includes(filterValue) : false
    );
  }

  setOptions() {
    this.requestService.getTags().subscribe(
      (tags: Tag[]) => {
        this.options = tags.map((tag) => tag.TagName);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  search() {
    const tagName = this.searchInput.value;
    this.router.navigate(['search', tagName]);
  }
}
