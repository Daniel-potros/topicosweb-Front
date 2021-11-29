import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyComponent } from './pages/buy/buy.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { OrderComponent } from './pages/order/order.component';
import { SettingsComponent } from './pages/settings/settings.component';



const routes: Routes = [

  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'order',
    component: OrderComponent
  }, 
  {
    path: 'settings',
    component: SettingsComponent
  },
  {
    path: 'buy',
    component: BuyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
