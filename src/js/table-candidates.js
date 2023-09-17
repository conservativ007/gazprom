"use strict";
const STATE_OF_SORTED_CANDIDATES = {
    vacancy: true,
    fullname: true,
    event: true,
    resume: true,
    showFile: true,
    downloadFile: true,
};
let dataCandidates = [
    {
        vacancy: 'Вакансия 1',
        fullname: 'Иванов Иван Иванович',
        event: 'event 1',
        resume: 'resume 1',
        showFile: 'showFile 1',
        downloadFile: 'downloadFile 1',
    },
    {
        vacancy: 'Вакансия 2',
        fullname: 'Киселёв Максим Олегович',
        event: 'event 2',
        resume: 'resume 2',
        showFile: 'showFile 2',
        downloadFile: 'downloadFile 2',
    },
];
const createTableCandidates = () => {
    const addOneElemToData = (someData) => {
        dataCandidates.push(someData);
        renderTableContent();
    };
    const addManyElemsToData = (someData) => {
        dataCandidates = someData;
    };
    const dataSort = (elem) => {
        let arrowSort = STATE_OF_SORTED_CANDIDATES[elem];
        if (arrowSort === false) {
            STATE_OF_SORTED_CANDIDATES[elem] = true;
        }
        else {
            STATE_OF_SORTED_CANDIDATES[elem] = false;
        }
        dataCandidates.sort((a, b) => {
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
        const elemOfTableContainer = document.querySelector('.table-candidates.content');
        if (elemOfTableContainer !== null) {
            elemOfTableContainer.innerHTML = '';
        }
        const dataElems = dataCandidates.map((elem) => {
            return `
        <div class="row">
          <p class="cell">${elem.vacancy}</p>
          <p class="cell">${elem.fullname}</p>
          <p class="cell">${elem.event}</p>
          <p class="cell">${elem.resume}</p>
          <p class="cell">${elem.showFile}</p>
          <p class="cell">${elem.downloadFile}</p>
        </div>
      `;
        });
        const combinedDataElems = dataElems.join('');
        elemOfTableContainer === null || elemOfTableContainer === void 0 ? void 0 : elemOfTableContainer.insertAdjacentHTML('beforeend', combinedDataElems);
    };
    const renderArrow = () => {
        let elemsOfArrow = document.querySelectorAll('.description-candidates.row .arrow');
        const keys = Object.keys(STATE_OF_SORTED_CANDIDATES);
        keys.forEach((key, index) => {
            if (index > 2)
                return;
            const value = STATE_OF_SORTED_CANDIDATES[key];
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
createTableCandidates().renderTableContent();
createTableCandidates().renderArrow();
createTableCandidates().dataSort('vacancy');
// так можно добавить один элемент в таблицу
// createTableCandidates().addOneElemToData({
//   vacancy: 'Вакансия 1',
//     fullname: 'Иванов Иван Иванович',
//     event: 'event 1',
//     resume: 'resume 1',
//     showFile: 'showFile 1',
//     downloadFile: 'downloadFile 1',
// });
// так можно зкменить данные в таблице
// createTable().addManyElemsToData([IData]);
//
//# sourceMappingURL=table-candidates.js.map