"use strict";
const STATE_OF_SORTED_VACANCY = {
    date: true,
    vacancy: true,
    status: true,
    fullname: true,
    recruiterContacts: true,
    resumeReviewed: true,
    resumeSentToCustomer: true,
    interviewWithTheCustomerWasConducted: true,
    checkSB: true,
    offer: true,
    employed: true,
};
let dataVacancy = [
    {
        date: '22.07.2021',
        vacancy: 'вакансия 1',
        status: 'статус 1',
        fullname: 'Иванов Иван Иванович',
        recruiterContacts: 'контакты рекрутера',
        resumeReviewed: 'Рассмотрено резюме 1',
        resumeSentToCustomer: 'Резюме направлено заказчику на рассмотрение 1',
        interviewWithTheCustomerWasConducted: 'Проведено интервью с заказчиком 1',
        checkSB: 'Проверка СБ 1',
        offer: 'Оффер 1',
        employed: 'Трудоустроены 1',
    },
    {
        date: '22.07.2012',
        vacancy: 'вакансия 2',
        status: 'статус 2',
        fullname: 'Иванов Иван Петрович',
        recruiterContacts: 'контакты рекрутера',
        resumeReviewed: 'Рассмотрено резюме 1',
        resumeSentToCustomer: 'Резюме направлено заказчику на рассмотрение 1',
        interviewWithTheCustomerWasConducted: 'Проведено интервью с заказчиком 1',
        checkSB: 'Проверка СБ 1',
        offer: 'Оффер 1',
        employed: 'Трудоустроены 1',
    },
];
const createTableVacancy = () => {
    const addOneElemToData = (someData) => {
        dataVacancy.push(someData);
        renderTableContent();
    };
    const addManyElemsToData = (someData) => {
        dataVacancy = someData;
    };
    const dataSort = (elem) => {
        let arrowSort = STATE_OF_SORTED_VACANCY[elem];
        if (arrowSort === false) {
            STATE_OF_SORTED_VACANCY[elem] = true;
        }
        else {
            STATE_OF_SORTED_VACANCY[elem] = false;
        }
        dataVacancy.sort((a, b) => {
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
        const elemOfTableContainer = document.querySelector('.table-vacancy.content');
        if (elemOfTableContainer !== null) {
            elemOfTableContainer.innerHTML = '';
        }
        const dataElems = dataVacancy.map((elem) => {
            return `
        <div class="row">
          <p class="cell">${elem.date}</p>
          <p class="cell">${elem.vacancy}</p>
          <p class="cell">${elem.status}</p>
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
        elemOfTableContainer === null || elemOfTableContainer === void 0 ? void 0 : elemOfTableContainer.insertAdjacentHTML('beforeend', combinedDataElems);
    };
    const renderArrow = () => {
        let elemsOfArrow = document.querySelectorAll('.description-vacancy.row .arrow');
        const keys = Object.keys(STATE_OF_SORTED_VACANCY);
        keys.forEach((key, index) => {
            if (index > 3)
                return;
            const value = STATE_OF_SORTED_VACANCY[key];
            elemsOfArrow[index].className =
                value === true ? 'arrow arrow-up' : 'arrow arrow-down';
        });
    };
    return {
        renderTableContent,
        dataSort,
        dataVacancy,
        renderArrow,
        addOneElemToData,
        addManyElemsToData,
    };
};
// первые два метода нужны для отрисовки таблицы
createTableVacancy().renderTableContent();
createTableVacancy().renderArrow();
// отсортируем по дате
createTableVacancy().dataSort('date');
createTableVacancy().dataSort('date');
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
//# sourceMappingURL=table-vacancy.js.map