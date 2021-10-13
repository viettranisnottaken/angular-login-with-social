import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';

import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';
import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';
import { VimeModule } from '@vime/angular';

import { VideoPlayerComponent } from './video-player.component';
import { VmPlayerWrapperComponent } from './vm-player-wrapper/vm-player-wrapper.component';
import { VideogularWrapperComponent } from './videogular-wrapper/videogular-wrapper.component';
import { MaterialYoutubePlayerComponent } from './material-youtube-player/material-youtube-player.component';

const routes: Routes = [
  { path: '', component: VideoPlayerComponent },
  { path: 'vm', component: VmPlayerWrapperComponent },
  { path: 'videogular', component: VideogularWrapperComponent },
  {
    path: 'material-youtube-player',
    component: MaterialYoutubePlayerComponent,
  },
];

@NgModule({
  declarations: [
    VideoPlayerComponent,
    VmPlayerWrapperComponent,
    VideogularWrapperComponent,
    MaterialYoutubePlayerComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    VimeModule,
    YouTubePlayerModule,
    MatSidenavModule,
    MatGridListModule,
  ],
})
export class VideoPlayerModule {}
