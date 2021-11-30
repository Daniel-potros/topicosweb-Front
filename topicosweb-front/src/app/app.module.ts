import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularMaterialModule } from './angular-material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { OrderComponent } from './pages/order/order.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { TopToolbarComponent } from './components/top-toolbar/top-toolbar.component';
import { BuyComponent } from './pages/buy/buy.component';
import { EditOrderFormComponent } from './components/edit-order-form/edit-order-form.component';
import { RegisterUserFormComponent } from './components/register-user-form/register-user-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    OrderComponent,
    SettingsComponent,
    TopToolbarComponent,
    BuyComponent,
    EditOrderFormComponent,
    RegisterUserFormComponent
  ],
  imports: [
    AngularMaterialModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
