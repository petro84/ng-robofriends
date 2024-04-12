import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { IServerRobot, Robot } from '../models/robot.model';

@Injectable({
  providedIn: 'root'
})
export class RobotsService {
  private robots$ = new BehaviorSubject<Robot[]>([]);

  constructor(private http: HttpClient) { }

  fetchRobots() {
    return this.http.get<IServerRobot[]>('https://jsonplaceholder.typicode.com/users')
      .pipe(map(data => data.map((r: Robot) => ({
        id: r.id,
        name: r.name,
        email: r.email
      }))));
  }

  setRobots(robots: Robot[]) {
    this.robots$.next(robots);
  }

  getRobots(): Observable<Robot[]> {
    return this.robots$.asObservable();
  }
}
