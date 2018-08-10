import { Component, OnInit } from '@angular/core';
import { CredenciaisDTO } from '../../../../models/credenciais.dto';
import { AuthService } from '../../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  credentials: CredenciaisDTO = { email: "",password: "" };

  constructor(public auth: AuthService, private router: Router) { }

  ngOnInit() {
  }


  login(){
    console.log(this.credentials);
    this.auth.authenticate(this.credentials)
      .subscribe(response => {
        this.auth.successfulLogin(response.headers.get('Authorization'));
        this.credentials = {email: "",password:""};
        this.router.navigate(['profile'])
      },
      error => {});   
  }




}
