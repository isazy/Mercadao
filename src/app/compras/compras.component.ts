import { Component } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.scss']
})
export class ComprasComponent {
  Comprar(){
      Swal.fire({
        title: "vc deseja comprar essa produto?",
        showDenyButton: true,
        icon: "question",
        confirmButtonText: "sim",
        denyButtonText: 'cancelar'
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Adicionado ao carrinho!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("erro", "", "info");
      }
    });
  }
}


