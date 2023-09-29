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

interface ISTATE_OF_SORTED_CANDIDATES {
  vacancy: boolean;
  fullname: boolean;
  event: boolean;
  resume: boolean;
}

const STATE_OF_SORTED_CANDIDATES: ISTATE_OF_SORTED_CANDIDATES = {
  vacancy: true,
  fullname: true,
  event: true,
  resume: true,
};

let dataCandidates: IDataCandidates[] = [];

// document
//   .getElementById('candidates-sort-date')
//   .addEventListener('click', () => {
//     createTableCandidates().dataSort('vacancy');
//   });
// document
//   .getElementById('candidates-sort-fullname')
//   .addEventListener('click', () => {
//     createTableCandidates().dataSort('fullname');
//   });
// document
//   .getElementById('candidates-sort-event')
//   .addEventListener('click', () => {
//     createTableCandidates().dataSort('event');
//   });

export const createTableCandidates = () => {
  const addOneElemToData = (someData: IDataCandidates) => {
    dataCandidates.push(someData);
    renderTableContent();
  };

  const addManyElemsToData = (someData: IDataCandidates[]) => {
    dataCandidates = someData;
  };

  // const dataSort = (elem: keyof IDataCandidates) => {
  //   let arrowSort = STATE_OF_SORTED_CANDIDATES[elem];
  //   if (arrowSort === false) {
  //     STATE_OF_SORTED_CANDIDATES[elem] = true;
  //   } else {
  //     STATE_OF_SORTED_CANDIDATES[elem] = false;
  //   }

  //   dataCandidates.sort((a: IDataCandidates, b: IDataCandidates) => {
  //     // сортировка по вакансии
  //     if (elem === 'vacancy') {
  //       if (a[elem].name < b[elem].name) {
  //         return arrowSort === true ? -1 : 1;
  //       }
  //       if (a[elem].name > b[elem].name) {
  //         return arrowSort === true ? 1 : -1;
  //       }
  //       return 0;
  //     }

  //     // сортировка по всем остальным полям
  //     if (a[elem] < b[elem]) {
  //       return arrowSort === true ? -1 : 1;
  //     }
  //     if (a[elem] > b[elem]) {
  //       return arrowSort === true ? 1 : -1;
  //     }
  //     return 0;
  //   });

  //   renderTableContent();
  //   renderArrow();
  // };

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

  const renderArrow = () => {
    let elemsOfArrow = document.querySelectorAll(
      '.description-candidates.row .arrow'
    );
    const keys = Object.keys(STATE_OF_SORTED_CANDIDATES);

    keys.forEach((key, index) => {
      if (index > 2) return;
      const value =
        STATE_OF_SORTED_CANDIDATES[key as keyof ISTATE_OF_SORTED_CANDIDATES];
      elemsOfArrow[index].className =
        value === true ? 'arrow arrow-up' : 'arrow arrow-down';
    });
  };

  return {
    renderTableContent,
    // dataSort,
    dataCandidates,
    renderArrow,
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
