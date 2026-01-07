import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminGuard } from './guards/admin.guard';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { 
    path: 'login', 
    loadComponent: () => import('./login/login.component').then(m => m.LoginComponent)
  },
  { 
    path: 'register', 
    loadComponent: () => import('./register/register.component').then(m => m.RegisterComponent)
  },
  { path: 'dashboard', component: DashboardComponent },
  { 
    path: 'lavorazioni', 
    loadChildren: () => import('./lavorazioni/lavorazioni.module').then(m => m.LavorazioniModule),
    canActivate: [AdminGuard]
  },
  {
    path: 'amministrazione',
    loadChildren: () => import('./amministrazione/amministrazione.module').then(m => m.AmministrazioneModule),
    canActivate: [AdminGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
