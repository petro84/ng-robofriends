import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { SearchBoxComponent } from './search-box/search-box.component';
import { CardListComponent } from './card-list/card-list.component';
import { RobotsService } from './services/robots.service';
import { Robot } from './models/robot.model';
import { CommonModule } from '@angular/common';
import { delay } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SearchBoxComponent, CardListComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  loading!: boolean;

  constructor(private robotsSvc: RobotsService) {}

  ngOnInit(): void {
    this.loading = true;

    this.robotsSvc.fetchRobots().pipe(delay(5000)).subscribe((robots: Robot[]) => {
      this.loading = false;
      this.robotsSvc.setRobots(robots);
    });
  }

}
