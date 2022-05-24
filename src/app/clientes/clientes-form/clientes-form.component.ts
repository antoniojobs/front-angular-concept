import { Component, OnInit } from '@angular/core';
import { Cliente } from "../clientes";
import { ClientesService } from "../../clientes.service";
@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {

  cliente: Cliente;
  success: boolean = false;
  errors: String[];
  constructor(private service: ClientesService) { 
    // this.cliente = service.getCliente();
    this.cliente = new Cliente();
  }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log('ida',this.cliente);
    this.service
        .salvar(this.cliente)
        .subscribe(response=>{
          console.log('volta',response)
          this.success = true;
          this.cliente = response;
          this.errors = null;
        },errorResponse=>{

          this.success = false
          console.log(errorResponse.error.errors)
          this.errors = errorResponse.error.errors
        });
  }
}
