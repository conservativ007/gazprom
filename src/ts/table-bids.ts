export interface IDataBids {
  date: string;
  vacancy: string;
  status: string;
}

interface ISTATE_OF_SORTED_BIDS {
  date: boolean;
  vacancy: boolean;
  status: boolean;
}

const STATE_OF_SORTED_BIDS: ISTATE_OF_SORTED_BIDS = {
  date: true,
  vacancy: true,
  status: true,
};

let data: IDataBids[] = [];

// document.getElementById('bids-sort-date').addEventListener('click', () => {
//   createTableBids().dataSort('date');
// });
// document.getElementById('bids-sort-vacancy').addEventListener('click', () => {
//   createTableBids().dataSort('vacancy');
// });
// document.getElementById('bids-sort-status').addEventListener('click', () => {
//   createTableBids().dataSort('status');
// });

export const createTableBids = () => {
  const addOneElemToData = (someData: IDataBids) => {
    data.push(someData);
    renderTableContent();
  };

  const addManyElemsToData = (someData: IDataBids[]) => {
    data = someData;
  };

  // const dataSort = (elem: keyof IDataBids) => {
  //   let arrowSort = STATE_OF_SORTED_BIDS[elem];
  //   if (arrowSort === false) {
  //     STATE_OF_SORTED_BIDS[elem] = true;
  //   } else {
  //     STATE_OF_SORTED_BIDS[elem] = false;
  //   }

  // data.sort((a: IDataBids, b: IDataBids) => {
  //   if (a[elem] < b[elem]) {
  //     return arrowSort === true ? -1 : 1;
  //   }
  //   if (a[elem] > b[elem]) {
  //     return arrowSort === true ? 1 : -1;
  //   }
  //   return 0;
  // });

  // renderTableContent();
  // renderArrow();
  // };

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

  const renderArrow = () => {
    let elemsOfArrow = document.querySelectorAll(
      '.description-bids.row .arrow'
    );
    const keys = Object.keys(STATE_OF_SORTED_BIDS);

    keys.forEach((key, index) => {
      const value = STATE_OF_SORTED_BIDS[key as keyof ISTATE_OF_SORTED_BIDS];
      elemsOfArrow[index].className =
        value === true ? 'arrow arrow-up' : 'arrow arrow-down';
    });
  };

  return {
    renderTableContent,
    // dataSort,
    data,
    renderArrow,
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
