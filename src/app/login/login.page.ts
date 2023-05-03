import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user = [
    { nama: "Gotou Hitori", id: "gotou", pass: "hitori"},
    { nama: "Muhamad Yasmin", id: "iyas", pass: "iyas"}
  ]

  @ViewChild('username') username: ElementRef;
  @ViewChild('password') password: ElementRef;

  constructor(public router:Router) { }

  login(){
    var i;

    const username = this.username.nativeElement.value;
    const password = this.password.nativeElement.value;

    console.log(username)
    console.log(password)

    var pesan;

    var name;
    var id;
    var pass;

    var leghtData = this.user.length;

    for (i=0; i<leghtData; i++){
      name = this.user[i].nama;
      id = this.user[i].id;
      pass =this.user[i].pass;

      if (username !== id || password !== pass){
        if (username == '' && password == ''){
          pesan = "Silahkan isi Username dan Passwordnya!!";
        } else {
          pesan = "Username dan Password Salah!!";
        }
  
      } else {
        pesan = "Sukses";
        break;
      }
    }

    if (pesan == "Sukses"){
      this.router.navigateByUrl('/home')
    } else {
      window.alert(pesan);
    }

    this.username.nativeElement.value = '';
    this.password.nativeElement.value = '';

  }

  ngOnInit() {
  }
}