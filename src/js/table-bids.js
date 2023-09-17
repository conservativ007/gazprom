"use strict";
const STATE_OF_SORTED_BIDS = {
    date: true,
    vacancy: true,
    status: true,
};
let data = [
    {
        date: '12.11.2022',
        vacancy: 'Вакансия 1',
        status: 'Статус 3',
    },
    {
        date: '01.07.1989',
        vacancy: 'Вакансия 2',
        status: 'Статус 1',
    },
    {
        date: '11.01.2015',
        vacancy: 'Вакансия 3',
        status: 'Статус 2',
    },
];
const createTableBids = () => {
    const addOneElemToData = (someData) => {
        data.push(someData);
        renderTableContent();
    };
    const addManyElemsToData = (someData) => {
        data = someData;
    };
    const dataSort = (elem) => {
        let arrowSort = STATE_OF_SORTED_BIDS[elem];
        if (arrowSort === false) {
            STATE_OF_SORTED_BIDS[elem] = true;
        }
        else {
            STATE_OF_SORTED_BIDS[elem] = false;
        }
        data.sort((a, b) => {
            if (a[elem] < b[elem]) {
                return arrowSort === true ? -1 : 1;
            }
            if (a[elem] > b[elem]) {
                return arrowSort === true ? 1 : -1;
            }
            return 0;
        });
        renderTableContent();
        renderArrow();
    };
    const renderTableContent = () => {
        const elemOfTableContainer = document.querySelector('.table-bids.content');
        if (elemOfTableContainer !== null) {
            elemOfTableContainer.innerHTML = '';
        }
        const dataElems = data.map((elem) => {
            return `
        <div class="row">
          <p class="cell">${elem.date}</p>
          <p class="cell"><a href="${elem.vacancy}">link</a></p>
          <p class="cell">${elem.status}</p>
        </div>
      `;
        });
        const combinedDataElems = dataElems.join('');
        elemOfTableContainer === null || elemOfTableContainer === void 0 ? void 0 : elemOfTableContainer.insertAdjacentHTML('beforeend', combinedDataElems);
    };
    const renderArrow = () => {
        let elemsOfArrow = document.querySelectorAll('.description-bids.row .arrow');
        const keys = Object.keys(STATE_OF_SORTED_BIDS);
        keys.forEach((key, index) => {
            const value = STATE_OF_SORTED_BIDS[key];
            elemsOfArrow[index].className =
                value === true ? 'arrow arrow-up' : 'arrow arrow-down';
        });
    };
    return {
        renderTableContent,
        dataSort,
        data,
        renderArrow,
        addOneElemToData,
        addManyElemsToData,
    };
};
// первые два метода нужны для отрисовки таблицы
createTableBids().renderTableContent();
createTableBids().renderArrow();
// так можно добавить один элемент в таблицу
// createTableBids().addOneElemToData({
//   date: '07.07.2007',
//   vacancy: 'Вакансия 5',
//   status: 'Статус 4',
// });
// так можно зкменить данные в таблице
// createTable().addManyElemsToData([IData]);
//
//# sourceMappingURL=table-bids.js.map