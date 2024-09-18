import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GoalsComponent } from './goals/goals.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { TransactionComponent } from './transaction/transaction.component';
import { VaultComponent } from './vault/vault.component';
import { WelcomeComponent } from './welcome/welcome.component';

export const routes: Routes = [  // Add 'export' here
  { path: '', component: WelcomeComponent }, // Default route to welcome page
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'vault', component: VaultComponent },
  { path: 'transactions', component: TransactionComponent },
  { path: 'goals', component: GoalsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '**', redirectTo: '' } // Redirect unknown routes to welcome page
];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}
