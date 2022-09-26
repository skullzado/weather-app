import './style.css';
import { imageSrcObj } from './data';

const bgImg = document.getElementById('bg-img');

bgImg.src = imageSrcObj['rainy']['src'];
bgImg.alt = imageSrcObj['rainy']['alt'];
bgImg.title = imageSrcObj['rainy']['alt'];

console.log('from index.js');
