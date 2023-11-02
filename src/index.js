import { initDefaultList, initNewListBtn } from './ui.js';
import { compareAsc, format } from 'date-fns';
import './style.css';


const listArray = [];
const itemArray = [];


initNewListBtn(listArray, itemArray);
initDefaultList(listArray, itemArray);