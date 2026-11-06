import { Component } from '@angular/core';
import { Header } from '../header/header';
import { RouterLink } from '@angular/router';
import { Footer } from '../footer/footer';
import { CommonModule} from '@angular/common';

@Component({
  selector: 'app-view-candle',
  imports: [Header, RouterLink, Footer, CommonModule],
  templateUrl: './view-candle.html',
  styleUrl: './view-candle.css',
})
export class ViewCandle {
  openIndex : number | null = null

  // Accordion open and close
  toggleAccordion(index:number){
    this.openIndex = this.openIndex === index ? null : index
  }
}
