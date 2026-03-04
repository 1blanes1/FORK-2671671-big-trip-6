import BoardPresenter from './presenter/board-presenter.js';


const siteHeaderElement = document.querySelector('.page-header');
const tripEventsElement = document.querySelector('.trip-events');

const boardPresenter = new BoardPresenter ({ siteHeaderElement, tripEventsElement });

boardPresenter.init();
