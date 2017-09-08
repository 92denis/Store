import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { StoreComponent } from './store/store.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DataService } from '././data.service';
import { ProductComponent } from './product/product.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'edit/:id', component: StoreComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,
    HomeComponent,
    ProductComponent
  ],
  imports: [RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
