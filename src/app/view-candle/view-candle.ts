import { Component } from '@angular/core';
import { Header } from '../header/header';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-view-candle',
  imports: [Header, RouterLink],
  templateUrl: './view-candle.html',
  styleUrl: './view-candle.css',
})
export class ViewCandle {

}
