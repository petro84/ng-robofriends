import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardComponent } from '../card/card.component';
import { RobotsService } from '../services/robots.service';
import { Robot } from '../models/robot.model';

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css'
})
export class CardListComponent implements OnInit {
  robots!: Robot[];

  constructor(private robotsSvc: RobotsService) {}

  ngOnInit(): void {
    this.robotsSvc.getRobots().subscribe(robots => {
      this.robots = robots
    });
  }
}
