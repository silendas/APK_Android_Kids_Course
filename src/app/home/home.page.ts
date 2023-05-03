import { AfterContentChecked, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';
import { SwiperOptions } from 'swiper';
import SwiperCore, {
  Pagination, 
  EffectCoverflow,
  Autoplay
} from 'swiper/core';

SwiperCore.use([Autoplay]);

import { Router } from '@angular/router';

SwiperCore.use([Pagination, EffectCoverflow]);
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomePage implements AfterContentChecked{
  
  @ViewChild('swiper') swiper: SwiperComponent;

  config: SwiperOptions = {
    slidesPerView: 'auto',
    pagination: true,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false
    },
    effect: 'coverflow'
  };

  images = [
    "../../assets/Welcome to.png",
    '../../assets/Welcome smart kids to kidscourse..png',
    '../../assets/Why.png'
  ]

  constructor() { }

  /*ngAfterViewInit(): void
  {
    this.config = {
      //...
      autoplay: {
        delay: 2000,
        disableOnInteraction: false
      }
    }
    
    // Start autoplay
    this.swiper.swiperRef.autoplay.start();
  }*/

  ngAfterContentChecked(){
    if(this.swiper){
      this.swiper.updateSwiper({});
    } 
   }

  swiperSlideChanged(e){
    console.log('changed: ', e);
  }

}
