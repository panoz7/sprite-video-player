import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  spriteData = {
    src: '../assets/quilt.jpg',
    cols: 8,
    rows: 6,
    numFrames: 48
  }

  spritePosX = 0
  spritePosY = 0

  ngOnInit() {
    console.log(this.spriteData);
  }

  syncVideo(e: Event) {

    const playPercent = Number((e.target as HTMLInputElement).value) / 100;

    // Get which frame to display
    let frameNum = Math.min(Math.floor(this.spriteData.numFrames * playPercent), this.spriteData.numFrames - 1);

    // Figure out which row the frame is in 
    const row = Math.floor(frameNum / this.spriteData.cols);

    // Then figure out which colum the frame is in 
    const col = frameNum - (row * this.spriteData.cols)

    console.log(frameNum, row, col)

    this.spritePosX = col * -100;
    this.spritePosY = row * -100;



  }



}
