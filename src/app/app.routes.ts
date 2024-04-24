import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ErrorComponent } from './pages/error/error.component';
import { LoginComponent } from './pages/login/login.component';
import { PersonalComponent } from './pages/personal/personal.component';

export const routes: Routes = [ // Si le ponemos 'prefix' nos va a arrojar un error en la consola de redireccion infinita
{ path: '', redirectTo: '/home', pathMatch: "full" },
{ path: 'home', component: HomeComponent },
{ path: 'error', component: ErrorComponent },
{path: 'login', component: LoginComponent,},
{path: 'personal', component: PersonalComponent,},
// La ruta comodin debe ir siempre al final
{ path: '**', component: ErrorComponent },
];
