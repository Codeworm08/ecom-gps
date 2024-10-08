import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponent } from './equipments/display/display.component';
import { RegisterComponent } from './equipments/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MemDisplayComponent } from './members/display/display.component';
import { MemRegisterComponent } from './members/register/register.component';
import { MembershipdisplayComponent } from './memberships/membershipdisplay/membershipdisplay.component';
import { MembershipregisterComponent } from './memberships/membershipregister/membershipregister.component';
import { TrainerRegisterComponent } from './trainers/trainer-register/trainer-register.component';
import { TrainerDisplayComponent } from './trainers/trainer-display/trainer-display.component';
import { MshDisplayComponent } from './membermemberships/msh-display/msh-display.component';
import { MshRegisterComponent } from './membermemberships/msh-register/msh-register.component';
import { TbRegisterComponent } from './bookings/tb-register/tb-register.component';
import { TbDisplayComponent } from './bookings/tb-display/tb-display.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    RegisterComponent,
    DisplayComponent,
    MemDisplayComponent,
    MemRegisterComponent,
    MembershipdisplayComponent,
    MembershipregisterComponent,
    TrainerDisplayComponent,
    TrainerRegisterComponent,
    MshDisplayComponent,
    MshRegisterComponent,
    TbRegisterComponent,
    TbDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
