import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { fromEvent, Observable } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-material-youtube-player',
  templateUrl: './material-youtube-player.component.html',
  styleUrls: ['./material-youtube-player.component.scss'],
})
export class MaterialYoutubePlayerComponent implements OnInit, AfterViewInit {
  containerResizeEvent: Observable<any> | undefined;
  playerHeight: number | undefined;
  playerWidth: number | undefined;
  isListOpened = true;
  // minPlayerWidth = 700;
  minPlayerWidth = 0;
  maxPlayerWidth = 1150;

  @ViewChild('container')
  container!: ElementRef;

  @ViewChild('drawer')
  drawer!: MatDrawer;

  constructor() {}

  ngOnInit(): void {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.updatePLayerDimentions();
    });

    this.containerResizeEvent = fromEvent(window, 'resize');

    this.containerResizeEvent?.pipe(debounceTime(100)).subscribe((value) => {
      this.updatePLayerDimentions();
    });
  }

  toggleList() {
    this.isListOpened = !this.isListOpened;
    // this.updatePLayerDimentions();
    setTimeout(() => {
      this.updatePLayerDimentions();
    });
  }

  toggleListMaterial() {
    this.drawer.toggle();
    this.updatePLayerDimentions();
  }

  private updatePLayerDimentions() {
    this.playerWidth = this.containerDimentions.width;
    this.playerHeight = this.containerDimentions.height;
    console.log('im in', this.playerWidth);
  }

  private get containerDimentions() {
    let width: number;
    let height: number;

    if (this.container.nativeElement.offsetWidth > this.maxPlayerWidth) {
      width = this.maxPlayerWidth;
    } else if (this.container.nativeElement.offsetWidth < this.minPlayerWidth) {
      width = this.minPlayerWidth;
    } else {
      width = this.container.nativeElement.offsetWidth;
    }

    height = (width / 16) * 9;
    return {
      width,
      height,
    };
  }
}
