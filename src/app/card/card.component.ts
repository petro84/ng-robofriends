import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() name!: string;
  @Input() email!: string;
  @Input() id!: string;

  constructor(private domSanitizer: DomSanitizer) {}

  fetchAvatar() {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(`https://robohash.org/${this.id}?200x200`);
  }

}
