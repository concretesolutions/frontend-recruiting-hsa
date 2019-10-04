import { Component, Input } from '@angular/core';
import { DetailsModel } from '../../model/details.model';

@Component({
  selector: 'app-image-details',
  templateUrl: './image-details.component.html',
  styleUrls: ['./image-details.component.css']
})
export class ImageDetailsComponent {

  @Input() details: DetailsModel;

  constructor() { }

}
