import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BodyComponent } from './body/body.component';
import { ChatboxComponent } from './chatbox/chatbox.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SelectedlistComponent } from './selectedlist/selectedlist.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'about',component:AboutComponent},
  {path:'findmatch/:gender',component:BodyComponent},
  {path:'list',component:ListComponent},
  {path:'list/:animal', component:SelectedlistComponent},
  {path:'list/:animal/:channel', component:ChatboxComponent},
  {path: '',   redirectTo: '/home', pathMatch: 'full' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
