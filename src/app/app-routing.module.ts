import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TitleComponent } from './pages/index/title/title.component';
import { CardComponent } from './pages/portifolio/card/card.component';

const routes: Routes = [
  {
    path: "", // rota vazia - cai na home do site
    component: TitleComponent,
    pathMatch: "full" // URL extata (geralmente para home se passa FULL)
  },
  { 
    path: "portifolio", // Com rotas filhas eu tenho duas formas de acessar a página com ou sem o id
    component: CardComponent, // da forma abaixo (comentado) eu só posso acessar passando o id
    children: [
      {
        path:":id",
        component: CardComponent,
      }
    ]
  },
  /*{
    path: "portifolio/:id", // rota com url/portifolio - o /:id cria uma variável chamada id cujo valor será passado após a barra
    // e eu posso recuperá-lo posteriormente
    component: CardComponent,
    pathMatch: "prefix" // só o começo da url
  },*/
  {
    path: '**', //qualquer coisa não mapeada,
    redirectTo: "" // rota para o qual eu devo ser redirecionado caso eu acesse uma rota que não existe. No nosso caso vai para home
    // pode ser usado para páginas de not found, por exemplo
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
