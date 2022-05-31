import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/clientes.service';
import { Cliente } from 'src/app/clientes/clientes';
import { ServicoPrestadoService } from 'src/app/servico-prestado.service';
import { ServicoPrestado } from '../servicoPrestado';

@Component({
  selector: 'app-servico-prestado-form',
  templateUrl: './servico-prestado-form.component.html',
  styleUrls: ['./servico-prestado-form.component.css']
})
export class ServicoPrestadoFormComponent implements OnInit {

  clientes: Cliente[] = []
  servico: ServicoPrestado;
  constructor(
    private clienteService: ClientesService,
    private service: ServicoPrestadoService
  ) { 
    this.servico = new ServicoPrestado();
  }

  ngOnInit(): void {
    this.clienteService
    .getClientes()
    .subscribe( response => this.clientes = response);
  }
  onSubmit(){
    console.log(this.servico);
    console.log('#####################');
    console.log(this.servico.data = this.formatData());
    this.service
    .salvar(this.servico)
    .subscribe(response =>{
      console.log(response);
    })

  }
  formatData(){
    let data = this.servico.data 
    return this.servico.data = data.replace(/([0-9]+)([-])([0-9]+)([-])([0-9]+)/g,'$5/$3/$1')
  }
}
