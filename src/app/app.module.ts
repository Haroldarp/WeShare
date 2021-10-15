import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './components/home-page/home-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MaterialModule } from './material//material.module';
import { ImageContainerComponent } from './components/image-container/image-container.component';
import { UploadImagePageComponent } from './components/upload-image-page/upload-image-page.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { NgxMasonryModule } from 'ngx-masonry';
import { TagScrollerComponent } from './components/tag-scroller/tag-scroller.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HomePageComponent,
    ImageContainerComponent,
    UploadImagePageComponent,
    SearchPageComponent,
    SearchInputComponent,
    TagScrollerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    LazyLoadImageModule,
    NgxDropzoneModule,
    NgxMasonryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
