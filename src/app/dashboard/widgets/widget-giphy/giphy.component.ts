import { Component, OnInit, Input } from '@angular/core';
import { GiphyDataService } from './giphy-data.service';
import { DashboardConfig } from '../../dashboard-config';
@Component({
  selector: 'app-giphy',
  template: `<img  *ngIf=image [src]='image.images["480w_still"]["url"]' >`,
  styleUrls: ['./giphy.component.scss']
})
export class GiphyComponent implements OnInit {


  timer: any = null;
  image: any;
  currentImageIndex: any = 0;
  images: any;

  @Input() data: any;
  constructor(private giphyDataService: GiphyDataService) { }

  ngOnInit() {
    this.getImages();
  }

  getImages() {
    this.giphyDataService.getGiphyImages('cat').subscribe(images => {
      this.images = images;
      if (null != this.timer) {
        clearInterval(this.timer);
      }
      this.timer = (setInterval(() => this.setImage(), 3000));
    });
  }
  setImage(): any {
    this.currentImageIndex = this.currentImageIndex + 1 > this.images.length ? 0 : this.currentImageIndex + 1;
    this.image = this.images[this.currentImageIndex];
    this.preloadImage();
  }

  private preloadImage() {
    const nextImageIndex = this.currentImageIndex + 1 > this.images.length ? 0 : this.currentImageIndex + 1;
    const image = new Image();
    image.src = this.images[nextImageIndex]['images']['480w_still']['url'];
  }

}
