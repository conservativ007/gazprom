export interface IDataVacancy {
  name: string;
  candidates: string[];
}

export interface IDataCandidates {
  vacancy: IDataVacancy;
  fullname: string;
  event: string;
  resume: string;
}

let dataCandidates: IDataCandidates[] = [];

export const createTableCandidates = () => {
  const addOneElemToData = (someData: IDataCandidates) => {
    dataCandidates.push(someData);
    renderTableContent();
  };

  const addManyElemsToData = (someData: IDataCandidates[]) => {
    dataCandidates = someData;
  };

  const dataSort = () => {
    dataCandidates.sort((a: IDataCandidates, b: IDataCandidates) => {
      // по умолчанию сортировка по вакансии
      if (a.vacancy.name < b.vacancy.name) {
        return -1;
      }
      if (a.vacancy.name > b.vacancy.name) {
        return 1;
      }
      return 0;
    });

    renderTableContent();
  };

  const renderTableContent = () => {
    const elemOfTableContainer = document.querySelector(
      '.table-candidates.content'
    );
    if (elemOfTableContainer !== null) {
      elemOfTableContainer.innerHTML = '';
    }

    const dataElems = dataCandidates.map((elem: IDataCandidates) => {
      return `
        <div class="row">
          <div class="cell vacancy-content">
            <div class="describe">
              <p>${elem.vacancy.name}</p>
              <div class="img-container">
                <img class="img-list" src="websoft_education/gazprom/src/images/list.png" alt="list">
              </div>
            </div>
            <div class="candidates hide">
              ${elem.vacancy.candidates
                .map((candidate) => `<p><a href="#">${candidate}</a></p>`)
                .join('')}
            </div>
            
          </div> 
          <p class="cell">${elem.fullname}</p>
          <p class="cell cell-event">${elem.event}</p>
          <div class="cell resume-content">
            <div class="img-container">
              <img src="websoft_education/gazprom/src/images/eye.png" alt="eye">
            </div>
            <div class="img-container">
              <img src="websoft_education/gazprom/src/images/download.png" alt="download">
            </div>
          </div>
        </div>
      `;
    });

    const combinedDataElems = dataElems.join('');

    elemOfTableContainer?.insertAdjacentHTML('beforeend', combinedDataElems);
  };

  return {
    renderTableContent,
    dataSort,
    dataCandidates,
    addOneElemToData,
    addManyElemsToData,
  };
};

// первые два метода нужны для отрисовки таблицы
// createTableCandidates().renderTableContent();
// createTableCandidates().renderArrow();
// createTableCandidates().dataSort('vacancy');

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
