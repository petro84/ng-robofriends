import { Component, OnInit } from '@angular/core';
import { RobotsService } from '../services/robots.service';
import { FormsModule } from '@angular/forms';
import { Robot } from '../models/robot.model';

@Component({
  selector: 'app-search-box',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent implements OnInit {
  robots!: Robot[];
  searchText!: string;

  filtered!: Robot[];

  constructor(private robotsSvc: RobotsService) { }

  ngOnInit(): void {
    this.robotsSvc.fetchRobots().subscribe((robots: Robot[]) => this.robots = robots);
  }

  search() {
    this.filtered = this.robots.filter(robot => robot.name.includes(this.searchText));

    if (this.filtered) {
      this.robotsSvc.setRobots(this.filtered);
    } else {
      this.robotsSvc.setRobots(this.robots);
    }
  }
}
