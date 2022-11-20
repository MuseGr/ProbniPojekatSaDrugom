import { Component, OnInit } from '@angular/core';
import { NgSelectOption } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public niz = [
    "Auto Mehanicar",
    "Poslasticarnica",
    "Frizerski Salon",
    "Auto Perionica",
    "Restoran",
    "Muzicka Prodavnica",
    "Picerija",
    "Auto Mehanicar",
    "Poslasticarnica",
    "Frizerski Salon",
    "Auto Perionica",
    "Restoran",
    "Muzicka Prodavnica",
    "Picerija"
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
