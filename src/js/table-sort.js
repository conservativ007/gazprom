import { convertToDate } from './helpers/convert-to-date.js';
let tableContent = null;
let tableContainer = null;
let tabName = null;

const sortFunctions = {
  up: {
    default: (a, b) => a.localeCompare(b),
    0: (a, b) => convertToDate(a) - convertToDate(b),
  },
  down: {
    default: (a, b) => b.localeCompare(a),
    0: (a, b) => convertToDate(b) - convertToDate(a),
  },
};

const sortByIndex = (index, arrowDirection) => {
  // тут у нас есть index arrow нажатой сортировки
  tableContent.sort((a, b) => {
    const cellA = a.querySelector(`.cell:nth-child(${index + 1})`).textContent;
    const cellB = b.querySelector(`.cell:nth-child(${index + 1})`).textContent;
    let sortFunction = null;

    if (index === 0 && tabName !== 'Кандидаты') {
      sortFunction = sortFunctions[arrowDirection][0];
    } else {
      sortFunction = sortFunctions[arrowDirection].default;
    }

    return sortFunction(cellA, cellB);
  });

  tableContainer.innerHTML = '';

  tableContent.forEach((elem) => tableContainer.appendChild(elem));
};

const getArrowDirection = (elem) => {
  if (elem.classList.contains('arrow-up')) {
    elem.className = 'arrow arrow-down';
    return 'down';
  } else {
    elem.className = 'arrow arrow-up';
    return 'up';
  }
};

const getElementsForTableSort = (select) => {
  tableContent = Array.from(
    document.querySelectorAll(`.table-${select}.content .row`)
  );
  tableContainer = document.querySelector(`.table-${select}.content`);
};

// определяем какая таблица отображается
const initLogicForTableSort = (e) => {
  tabName = e.target.textContent;

  if (tabName === 'Мои вакансии') {
    getElementsForTableSort('vacancy');
  }

  if (tabName === 'Кандидаты') {
    getElementsForTableSort('candidates');
  }

  if (tabName === 'Мои заявки') {
    getElementsForTableSort('bids');
  }
};

// навешиваем слушатели на вкладки
let elemsOfNavigation = document.querySelectorAll('.main-nav li');
elemsOfNavigation.forEach((elem) => {
  elem.addEventListener('click', initLogicForTableSort);
});

// определяем индекс нажатой стрелки и её направление
const handleArrowClick = (elem) => {
  const arrowDirection = getArrowDirection(elem);
  const arrowIndex = Array.from(
    elem.parentElement.parentElement.children
  ).indexOf(elem.parentElement);
  sortByIndex(arrowIndex, arrowDirection);
};

// навешиваем событие на глоб документ
// смотрим чтобы была нажата именно стрелка
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('arrow')) {
    handleArrowClick(e.target);
  }
});

// в самом начале когда пользователь зашёл на страницу и ничего не нажал
// делаем задержку пока таблица отрисуется
setTimeout(() => getElementsForTableSort('bids'), 0);
