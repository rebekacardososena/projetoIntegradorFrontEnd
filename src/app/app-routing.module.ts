
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { FeedComponent } from './feed/feed.component';
import { HomeComponent } from './home/home.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { MenuUsuarioComponent } from './menu-usuario/menu-usuario.component';
import { MenuComponent } from './menu/menu.component';
import { SessaoContatoComponent } from './sessao-contato/sessao-contato.component';
import { SessaoIdealizadorasComponent } from './sessao-idealizadoras/sessao-idealizadoras.component';
import { SessaoMissaoComponent } from './sessao-missao/sessao-missao.component';
import { SessaoOdsComponent } from './sessao-ods/sessao-ods.component';
import { SessaoParceirosComponent } from './sessao-parceiros/sessao-parceiros.component';

const routes: Routes = [
  {path: '', redirectTo: 'inicio',pathMatch: 'full'},

  {path: 'menu', component: MenuComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cadastrar', component: CadastrarComponent},
  {path: 'menu-usuario', component: MenuUsuarioComponent},
  {path: 'feed', component: FeedComponent},
  {path: 'home', component: HomeComponent},
  {path: 'sessao-ods', component: SessaoOdsComponent},
  {path: 'sessao-missao', component: SessaoMissaoComponent},
  {path: 'sessao-parceiros', component: SessaoParceirosComponent},
  {path: 'sessao-idealizadoras', component: SessaoIdealizadorasComponent},
  {path: 'sessao-contato', component: SessaoContatoComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }

