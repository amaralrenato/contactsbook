import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from "./components/home/login/login.component";
import { RegisterComponent } from "./components/home/register/register.component";
import { PasswordComponent } from "./components/home/password/password.component";

//Mapeamento de rotas de navegação para cada componente
const routes : Routes = [

    { 
path : '', 
pathMatch: 'full', 
redirectTo: 'access-account' 
   }, /* rota raiz */

    { path : 'access-account', component: LoginComponent },
    { path : 'create-account', component: RegisterComponent },
    { path : 'forgot-my-password', component: PasswordComponent }
];
//Criando uma classe para carregar as configurações
//Esta classe deverá ser inserida no arquivo /app.module.ts
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

