import { convertToDate } from '../js/helpers/convert-to-date.js';

export interface IDataBids {
  date: string;
  vacancy: string;
  status: string;
}

let data: IDataBids[] = [];

export const createTableBids = () => {
  const addOneElemToData = (someData: IDataBids) => {
    data.push(someData);
    renderTableContent();
  };

  const addManyElemsToData = (someData: IDataBids[]) => {
    data = someData;
  };

  const dataSort = (elem: keyof IDataBids) => {
    data.sort((a: IDataBids, b: IDataBids) => {
      if (convertToDate(a[elem]) < convertToDate(b[elem])) {
        return 1;
      }
      if (convertToDate(a[elem]) > convertToDate(b[elem])) {
        return -1;
      }
      return 0;
    });

    renderTableContent();
  };

  const renderTableContent = () => {
    const elemOfTableContainer = document.querySelector('.table-bids.content');
    if (elemOfTableContainer !== null) {
      elemOfTableContainer.innerHTML = '';
    }

    const dataElems = data.map((elem: IDataBids) => {
      return `
        <div class="row">
          <p class="cell cell-date">${elem.date}</p>
          <p class="cell"><a href="${elem.vacancy}">link</a></p>
          <p class="cell cell-status">${elem.status}</p>
        </div>
      `;
    });

    const combinedDataElems = dataElems.join('');

    elemOfTableContainer?.insertAdjacentHTML('beforeend', combinedDataElems);
  };

  return {
    renderTableContent,
    dataSort,
    data,
    addOneElemToData,
    addManyElemsToData,
  };
};

// первые два метода нужны для отрисовки таблицы
// createTableBids().renderTableContent();
// createTableBids().renderArrow();

// так можно добавить один элемент в таблицу
// createTableBids().addOneElemToData({
//   date: '07.07.2007',
//   vacancy: 'Вакансия 5',
//   status: 'Статус 4',
// });

// так можно изменить данные в таблице
// createTable().addManyElemsToData([IData]);
