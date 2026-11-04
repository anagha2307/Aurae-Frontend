import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Candles } from './candles/candles';
import { About } from './about/about';
import { Login } from './login/login';
import { ViewCandle } from './view-candle/view-candle';

export const routes: Routes = [
    {
        path:"",component:Home,title:"Aurae-Home"
    },
    {
        path:"candles",component:Candles,title:"Aurae-Shop"
    },
    {
        path:"candles/view",component:ViewCandle,title:"Aurae-Product"
    },
    {
        path:"about",component:About,title:"Aurae-About"
    },
    {
        path:"login",component:Login,title:"Aurae-Login"
    },
];
