import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HeroServiceService {

  constructor( private _http:HttpClient) { }


  server_address: string = "http://localhost:5000"


  sendData(data:any){

    console.log("data from Service file" , data)

    return this._http.post<any>(`${this.server_address}/name/check`, data)
  }
}
