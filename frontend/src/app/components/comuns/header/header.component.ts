import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  show: boolean = false;
  public isHome: boolean = false;
  public isSobre: boolean = false;
  public isPedidos: boolean = false;
  public isContato: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    switch (this.router.url) {
      case '/inicio':
        this.isHome = true;
        break;
      case '/sobre':
        this.isSobre = true;
        break;
      case '/pedidos':
        this.isPedidos = true;
        break;
      case '/contato':
        this.isContato = true;
        break;
      default:
        this.isHome = true;
    }
  }

  showCollapse() {
    this.show = !this.show;
  }

}
