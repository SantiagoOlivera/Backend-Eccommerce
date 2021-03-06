import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { CategoriesComponent } from './categories/categories.component';
import { PurchasesComponent } from './purchases/purchases.component';
import { MenuComponent } from './menu/menu.component';
import { SpacerTopComponent } from './spacer-top/spacer-top.component';
import { HeaderComponent } from './header/header.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { ListRegisterComponent } from './list-register/list-register.component';
import { SignupComponent } from './signup/signup.component';
import { InterceptorService } from './services/interceptor.service';
/* input solo numeros */
import { TwoDigitDecimalNumberDirective } from './two-digit-decimal-number.directive';
//Angular Materials
import { MatSidenavModule } from '@angular/material/sidenav'; 
import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu'; 
import { MatSliderModule } from '@angular/material/slider';
import {MatInputModule} from '@angular/material/input';
import { MainComponent } from './main/main.component';
import {MatButtonModule} from '@angular/material/button';
import { MatExpansionModule} from '@angular/material/expansion'; 
import {MatTabsModule} from '@angular/material/tabs';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'; 

import { MatFileUploadModule } from 'angular-material-fileupload';
//file upload
import { FileSelectDirective } from 'ng2-file-upload';
import { ConfigurationSettingsComponent } from './configuration-settings/configuration-settings.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CalculatorComponent,
    HomeComponent,
    ProductsComponent,
    UsersComponent,
    CategoriesComponent,
    PurchasesComponent,
    MenuComponent,
    SpacerTopComponent,
    HeaderComponent,
    NavigationBarComponent,
    ListRegisterComponent,
    SignupComponent,
    MainComponent,
    TwoDigitDecimalNumberDirective,
    FileSelectDirective,
    ConfigurationSettingsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    //Angular Materials
    MatSidenavModule,
    MatGridListModule,
    MatMenuModule,
    MatSliderModule,
    MatInputModule,
    MatButtonModule,
    MatExpansionModule,
    MatFileUploadModule,
    MatTabsModule,
    MatProgressSpinnerModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
