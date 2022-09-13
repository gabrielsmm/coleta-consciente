import { Component, OnInit } from '@angular/core';

import { AppService } from './../../../app.service';

@Component({
  selector: 'app-o-que-coletamos',
  templateUrl: './o-que-coletamos.component.html',
  styleUrls: ['./o-que-coletamos.component.css']
})
export class OQueColetamosComponent implements OnInit {

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.appService.scrollToTop();
  }

}
