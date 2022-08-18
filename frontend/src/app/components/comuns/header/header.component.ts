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
  public isColetamos: boolean = false;
  public isColeta: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    switch (this.router.url) {
      case '/inicio':
        this.isHome = true;
        break;
      case '/o-que-coletamos':
        this.isColetamos = true;
        break;
      case '/solicita-coleta':
        this.isColeta = true;
        break;
      default:
        this.isHome = true;
    }
  }

  showCollapse() {
    this.show = !this.show;
  }

}
