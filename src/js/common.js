import $ from 'jquery';
import Swiper from 'swiper/swiper-bundle.esm.browser.min.js';
import { Fancybox } from "@fancyapps/ui";
import 'select2';

window.Swiper = Swiper;
window.Fancybox = Fancybox;

export {$, Fancybox, Swiper};