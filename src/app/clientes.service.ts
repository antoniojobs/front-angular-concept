import { Injectable } from '@angular/core';
import { Cliente } from './clientes/clientes';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http:HttpClient) {}

  salvar(cliente:Cliente):Observable<Cliente>{
    return this.http.post<Cliente>('http://localhost:8080/api/clientes',cliente)
  }
  atualizar(cliente:Cliente):Observable<any>{
    return this.http.put<Cliente>(`http://localhost:8080/api/clientes/${cliente.id}`,cliente)
  }

  getClientes():Observable<Cliente[]>{
    let cliente : Cliente = new Cliente();
    return this.http.get<Cliente[]>('http://localhost:8080/api/clientes');
  }
  
  getClientesById(id:number): Observable<Cliente>{
    let cliente : Cliente = new Cliente();
    return this.http.get<any>(`http://localhost:8080/api/clientes/${id}`);
  }

  deletar(cliente:Cliente):Observable<any>{
    return this.http.delete<any>(`http://localhost:8080/api/clientes/${cliente.id}`)
  }

  
  // getClientes(): Clientes[] {
  //   let cliente : Cliente = new Cliente();
  //   cliente.id = 1;
  //   cliente.cpf = '12345678901';
  //   cliente.nome = 'josé antonio';
  //   cliente.dataCadastro='04/03/1992';
  //   return [cliente];
  // }
}
