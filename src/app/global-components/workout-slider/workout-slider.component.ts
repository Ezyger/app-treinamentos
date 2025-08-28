import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
  OnDestroy,
} from '@angular/core';
import { SlideItem } from 'src/app/interfaces/slide-item';
import type { Swiper } from 'swiper/types';

interface SwiperHTMLElement extends HTMLElement {
  swiper: Swiper;
}

@Component({
  selector: 'app-workout-slider',
  templateUrl: './workout-slider.component.html',
  styleUrls: ['./workout-slider.component.scss'],
  standalone: false,
})
export class WorkoutSliderComponent implements AfterViewInit, OnDestroy {
  @ViewChild('swiperRef', { static: true })
  _swiperRef!: ElementRef<HTMLElement>;

  @Input() items: SlideItem[] = [];
  @Input() slidesPerView = 1;
  @Input() spaceBetween = 20;

  swiper?: Swiper;
  activeIndex = 0;

  private onSlideChange = () => {
    this.activeIndex = this.swiper?.activeIndex ?? 0;
  };

  ngAfterViewInit(): void {
    queueMicrotask(() => {
      const el = this._swiperRef?.nativeElement as
        | SwiperHTMLElement
        | undefined;
      if (!el?.swiper) return;
      this.swiper = el.swiper;

      this.activeIndex = this.swiper.activeIndex ?? 0;
      this.swiper.on('slideChange', this.onSlideChange);
    });
  }

  ngOnDestroy(): void {
    this.swiper?.off('slideChange', this.onSlideChange);
  }
}
