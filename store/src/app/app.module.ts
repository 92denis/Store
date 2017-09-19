import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { StoreComponent } from './store/store.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DataService } from '././data.service';
import { ProductComponent } from './product/product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdToolbarModule, MdButtonModule, MdInputModule, MdCardModule,MdMenuModule,MdIconModule} from '@angular/material';
// import { AgmCoreModule } from '@agm/core';
import { NguiMapModule} from '@ngui/map';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'edit/:id', component: StoreComponent },
  { path: 'edit-product/:id', component: EditProductComponent },
  { path: 'product/:id', component: ProductComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,
    HomeComponent,
    ProductComponent,
    EditProductComponent
  ],
  imports: [RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdButtonModule,
    MdInputModule,
    MdCardModule,
    MdMenuModule,
    MdIconModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyCABNU6o9D3kSkthZTGY_AJqgcSeJbW234'}),
    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyCABNU6o9D3kSkthZTGY_AJqgcSeJbW234'    
    // }) 
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
