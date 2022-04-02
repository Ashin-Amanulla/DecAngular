import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { HeroServiceService } from './hero-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {

  constructor( private _service:HeroServiceService) { }


  title = 'FrontEnd';

  NameForm: any = new FormGroup({

    "name": new FormControl(''),

  })


  submit() {

    let data = this.NameForm.value;
    console.log("form data in ts file :" , data)

    this._service.sendData(data)
    .subscribe(data=>{
      console.log(data, "from backend")
    })




  }

}




