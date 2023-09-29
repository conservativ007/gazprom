import { convertToDate } from '../js/helpers/convert-to-date';

export interface IDataVacancy {
  date: string;
  vacancy: string;
  status: string;
  fullname: string;
  recruiterContacts: string;
  resumeReviewed: string;
  resumeSentToCustomer: string;
  interviewWithTheCustomerWasConducted: string;
  checkSB: string;
  offer: string;
  employed: string;
}

let dataVacancy: IDataVacancy[] = [];

export const createTableVacancy = () => {
  const addOneElemToData = (someData: IDataVacancy) => {
    dataVacancy.push(someData);
    renderTableContent();
  };

  const addManyElemsToData = (someData: IDataVacancy[]) => {
    dataVacancy = someData;
  };

  // нужен только для начальной сортировки таблицы по умолчанию (сортировка по дате)
  const dataSort = (elem: keyof IDataVacancy) => {
    dataVacancy.sort((a: IDataVacancy, b: IDataVacancy) => {
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
    const elemOfTableContainer = document.querySelector(
      '.table-vacancy.content'
    );
    if (elemOfTableContainer !== null) {
      elemOfTableContainer.innerHTML = '';
    }

    const dataElems = dataVacancy.map((elem: IDataVacancy) => {
      return `
        <div class="row">
          <p class="cell cell-date">${elem.date}</p>
          <p class="cell">${elem.vacancy}</p>
          <p class="cell cell-status">${elem.status}</p>
          <p class="cell">${elem.fullname}</p>
          <p class="cell">${elem.recruiterContacts}</p>
          <p class="cell">${elem.resumeReviewed}</p>
          <p class="cell">${elem.resumeSentToCustomer}</p>
          <p class="cell">${elem.interviewWithTheCustomerWasConducted}</p>
          <p class="cell">${elem.checkSB}</p>
          <p class="cell">${elem.offer}</p>
          <p class="cell">${elem.employed}</p>
        </div>
      `;
    });

    const combinedDataElems = dataElems.join('');

    elemOfTableContainer?.insertAdjacentHTML('beforeend', combinedDataElems);
  };

  return {
    renderTableContent,
    dataSort,
    dataVacancy,
    addOneElemToData,
    addManyElemsToData,
  };
};

// первые два метода нужны для отрисовки таблицы
// createTableVacancy().renderTableContent();
// createTableVacancy().renderArrow();

// // отсортируем по дате
// createTableVacancy().dataSort('date');
// createTableVacancy().dataSort('date');

// так можно добавить один элемент в таблицу
// createTableVacancy().addOneElemToData({
// date: '22.07.2012',
// vacancy: 'вакансия 2',
// status: 'статус 2',
// fullname: 'Иванов Иван Петрович',
// recruiterContacts: 'контакты рекрутера',
// resumeReviewed: 'Рассмотрено резюме 1',
// resumeSentToCustomer: 'Резюме направлено заказчику на рассмотрение 1',
// interviewWithTheCustomerWasConducted: 'Проведено интервью с заказчиком 1',
// checkSB: 'Проверка СБ 1',
// offer: 'Оффер 1',
// employed: 'Трудоустроены 1',
// });

// так можно зкменить данные в таблице
// createTable().addManyElemsToData([IDataVacancy]);
//
