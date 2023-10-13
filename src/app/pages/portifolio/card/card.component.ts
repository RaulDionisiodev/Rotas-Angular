import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(
    private activeRoute: ActivatedRoute,
    private navegador: Router) {

    //Para recuperar o id passado na url
    //http://localhost:4200/portifolio/{id}
      this.activeRoute.params.subscribe(
         res => console.log(res)
      ) //a função subscribe coloca os paramns no observable padrão do Amgular para que possamos
      //usar esses elementos
      // Dentro do ActivatedRoute nós conseguimos pegar os parâmetros e dentro do subscribe podemos trabalhar com eles

      this.activeRoute.firstChild?.params.subscribe(
        res => console.log(res) // para pegar os params de uma rota children
     )

      //para recuperar a Query param
      //http://localhost:4200/portifolio/1?{name=Raul&surname=Silva}
      this.activeRoute.queryParams.subscribe(
          res => console.log(res)
      )
   }

  ngOnInit(): void {
    /*setInterval(
      () => {
        this.navegador.navigate(['/'])
      } , 5000
    ) // Aqui o usuário é redirecionado para a home após 5 segundos.
    */
  }

}
