import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { UploadImagePageComponent } from './components/upload-image-page/upload-image-page.component';
import { SearchPageComponent } from './components/search-page/search-page.component';


const routes: Routes = [
  {path:'', component: MainLayoutComponent,
  children: [
    {path:'', redirectTo: '/home', pathMatch: 'full'},
    {path:'home', component: HomePageComponent},
    {path:'search', component: SearchPageComponent},
    {path:'search/:tagName', component: SearchPageComponent},
    {path:'upload', component: UploadImagePageComponent}
  ]},
  {path:'**', component: MainLayoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
