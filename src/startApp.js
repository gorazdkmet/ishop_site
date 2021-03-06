import {getProducts, getCategories} from './fetchData.js';
import {createHTML} from './createHTML.js';
import {setStyles} from './setStyles.js';
import {addCategoriesFilterListener as addListener} from './addCategoriesFilterListener.js';

export let productsAll;
export let categoriesAll;

export default async function startApp() {

  productsAll = await getProducts();
  categoriesAll = await getCategories();

  createHTML();
  setStyles();
  addListener();
}
