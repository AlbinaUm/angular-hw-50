import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {
  @Input() pic = 'https://www.madeirarentcar.com/upload/profile_image/no_image.jpg';
  @Input() title = 'Movie title';
  @Input() premiere = '-'
}
