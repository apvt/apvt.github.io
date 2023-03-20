import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, Title } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ProductRoutingModule } from './product/product-routing.module';



@NgModule({

  declarations: [
    AppComponent,
    HighlightDirective,
    ProfileComponent,
    HomeComponent,
    PagenotfoundComponent, 
  ],

  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    AppRoutingModule,
    ProductRoutingModule,
  ],

  exports:[
    CommonModule,
    
  ],

  providers: [
    // ProductService, //[not needed becoz service is created in services folder]
    
  ],
  
  bootstrap: [
    AppComponent,
  
  ],
  
})

export class AppModule { }

//retriving title code 2nd way

export class Mytitle extends TitleStrategy{
  
  constructor(private readonly title : Title){
    super();
  }
  updateTitle(snapshot: RouterStateSnapshot): void {
    const title = this.buildTitle(snapshot);
    if(title != undefined){
      this.title.setTitle(`Mysite | ${title}`)
    }
  }
}
