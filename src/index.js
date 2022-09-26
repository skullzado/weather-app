import './style.css';
import { imageSrcObj } from './data';

const bgImg = document.getElementById('bg-img');

bgImg.src = imageSrcObj.cloudy.src;
bgImg.alt = imageSrcObj.cloudy.alt;
