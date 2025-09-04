import { Component, OnInit } from '@angular/core';
import { SlideItem } from 'src/app/interfaces/slide-item';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: false,
})
export class HomeComponent implements OnInit {
  public onlinePersonalList: SlideItem[] = [];
  public programsList: SlideItem[] = [];
  public contentsList: SlideItem[] = [];
  public slidesPerView = 1.5;

  constructor() {}

  ngOnInit() {
    this.getLists();
  }

  getLists() {
    this.programsList = [
      {
        title: 'Levantamento de Peso',
        lastView: true,
        image: 'assets/images/levantamento.jpg',
      },
      {
        title: 'Yoga Express',
        lastView: false,
        image: 'assets/images/yoga.jpg',
      },
    ];

    this.onlinePersonalList = [
      {
        title: 'Levantamento de Peso',
        lastView: true,
        image: 'assets/images/levantamento.jpg',
        matte: true,
      },
      {
        title: 'Yoga Express',
        lastView: false,
        image: 'assets/images/yoga.jpg',
      },
    ];
  }

  navigateToNotification() {}

  onMyBody() {}

  onObjectives() {}
}
