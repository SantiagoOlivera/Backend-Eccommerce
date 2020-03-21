import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent }       from './home/home.component';
import { ProductsComponent }   from './products/products.component';
import { UsersComponent }      from './users/users.component';
import { CategoriesComponent } from './categories/categories.component';
import { PurchasesComponent }  from './purchases/purchases.component';
import { LoginComponent }      from './login/login.component';
import { SignupComponent }     from './signup/signup.component';
import { ConfigurationSettingsComponent } from './configuration-settings/configuration-settings.component';



const routes: Routes = [
   { path: "home",       component: HomeComponent       },
   { path: "products",   component: ProductsComponent   },
   { path: "users",      component: UsersComponent      },
   { path: "categories", component: CategoriesComponent },
   { path: "purchases",  component: PurchasesComponent  },
   { path: "login",      component: LoginComponent      },
   { path: "signup",     component: SignupComponent     },
   { path: "configuration-settings", component: ConfigurationSettingsComponent  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
