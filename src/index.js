import './style.css';
import { imageSrcObj } from './data';

const bgImg = document.getElementById('bg-img');

bgImg.src = imageSrcObj['cloudy']['src'];
bgImg.alt = imageSrcObj['cloudy']['alt'];

console.log('from index.js');

const total = [1, 2, 3, 4].reduce(
	(prevValue, curValue) => (curValue += prevValue),
	0
);

console.log(total);
