import { Injectable } from '@angular/core';

@Injectable()
export class SliderService {

  translateY: string = 'translateY(0px)';

  slides: any[] = [
    { active: true },
    { active: false },
    { active: false },
    { active: false },
    { active: false }
  ]

  constructor() { }
  //setTranslateY
  setTranslateY() {
    this.translateY = `translateY(-${this.getPos() * 200}px )`
  }
  //go for slide clicked [ for dots ]
  go(slide) {
    let currentSlide = this.slides[this.getPos()]
    currentSlide.active = false
    slide.active = true;
    this.setTranslateY()
  }
  //getPos for getting position of slide
  getPos() {
    return this.slides.findIndex(slide => slide.active == true)
  }

  toggleInfinite: boolean = false;
  //toggleInfiniteSlider
  toggleInfiniteSlider() {
    this.toggleInfinite = !this.toggleInfinite;
    //return this.toggleInfinite ;
    console.log('toggleInfinite clicked', this.toggleInfinite);
  }

  //next for next slide
  next() {
    let currentSlide = this.slides[this.getPos()]
    let nextSlide = this.slides[this.getPos() + 1]
    if (nextSlide) {
      currentSlide.active = false
      nextSlide.active = true
    }
    //Condition if infiniteBtn is clicked
    if (!nextSlide && this.toggleInfinite) {
      console.log('next wala  clicked', this.toggleInfinite);
      let nextSlide = this.slides[this.getPos() * 0]
      currentSlide.active = false
      nextSlide.active = true
    }
    this.setTranslateY()
  }

  //prev for previous slide
  prev() {
    let currentSlide = this.slides[this.getPos()]
    let previousSlide = this.slides[this.getPos() - 1]
    if (previousSlide) {
      currentSlide.active = false
      previousSlide.active = true
    }
    //Condition if infiniteBtn is clicked and infinite slider call
    if (!previousSlide == true && this.toggleInfinite !== false) {
      console.log(' prev wala clicked', this.toggleInfinite);
      let sliderLength = this.slides.length - 1;
      let previousSlide = this.slides[this.getPos() + sliderLength]
      currentSlide.active = false
      previousSlide.active = true
    }
    this.setTranslateY()
  }

  //backToSlideOne returns 1st slide
  backToSlideOne() {
    let backToSlideOneBtn: boolean = false;
    if (backToSlideOneBtn = true && this.slides.length != this.slides.length - 1) {
      let currentSlide = this.slides[this.getPos()]
      let goTofirstSlide = this.slides[this.getPos() * 0]
      if (goTofirstSlide) {
        currentSlide.active = false
        goTofirstSlide.active = true
      }
      //this.slides[0] ; 
    }
    this.setTranslateY()
  }

  //lastSlide returns last slide
  lastSlide() {
    let currentSlide = this.slides[this.getPos()]
    let sliderLength = this.slides.length - 1;
    let lastSlide = this.slides[this.getPos() + sliderLength]
    currentSlide.active = false
    lastSlide.active = true
    //setTranslateY
    this.setTranslateY()
  }

}
