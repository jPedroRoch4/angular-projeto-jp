import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  destinos: any;

  constructor(private http: HttpClient) {
    this.getAllDestinos();
  }

  ngOnInit() { }

  getAllDestinos() {
    this.http.get('http://localhost:8080/destinos')
      .subscribe((response) => {
        console.log(response);
        this.destinos = response;
      },
        (error) => {
          console.log(error);
        }
      )
  }

}
