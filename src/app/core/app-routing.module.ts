import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../auth/login/login.component';
import { Error404Component } from '../components/error404/error404.component';
import { HomeComponent } from '../components/home/home.component';
import { AuthGuard } from '../auth/auth.guard';
import { ResidentListComponent } from '../resident/resident-list/resident-list.component';
import { ResidentFormComponent } from '../resident/resident-form/resident-form.component';

const routes: Routes = [
  // { path: 'cursos',
  //     loadChildren: './cursos/cursos.module#CursosModule',
  //     canActivate : [AuthGuard],
  //     canActivateChild: [CursosGuard]
  //   },
    // { path: 'alunos',
    //   loadChildren: './alunos/alunos.module#AlunosModule',
    //   canActivate : [AuthGuard],
    //   canLoad: [AuthGuard]
    // },
    { path: 'home',
      component: HomeComponent,
      canActivate : [AuthGuard]
    },
    {
      path: 'moradores',
      component: ResidentListComponent,
      canActivate : [AuthGuard]
    },
    {
      path: 'moradores/novo',
      component: ResidentFormComponent,
      canActivate : [AuthGuard]
    },
    {
      path: 'moradores/:id',
      component: ResidentFormComponent,
      canActivate : [AuthGuard]
    },
    { path: 'login',
      component: LoginComponent
    },
    { path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    },
     {
       path: '**',
       component: Error404Component
     }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
