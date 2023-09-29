/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ts/data.ts":
/*!************************!*\
  !*** ./src/ts/data.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.dataVacancy = exports.dataCandidates = exports.dataBids = void 0;
// заявки
exports.dataBids = [
    {
        date: '12.11.2022',
        vacancy: 'Вакансия 1',
        status: 'Черновик',
    },
    {
        date: '01.07.1989',
        vacancy: 'Вакансия 2',
        status: 'Закрыта',
    },
    {
        date: '11.01.2015',
        vacancy: 'Вакансия 3',
        status: 'Отклонена',
    },
    {
        date: '12.11.2021',
        vacancy: 'Вакансия 1',
        status: 'Отклонена',
    },
    {
        date: '03.07.1989',
        vacancy: 'Вакансия 4',
        status: 'Отклонена',
    },
    {
        date: '11.01.2016',
        vacancy: 'Вакансия 5',
        status: 'Закрыта',
    },
    {
        date: '12.11.2017',
        vacancy: 'Вакансия 6',
        status: 'Закрыта',
    },
    {
        date: '02.07.1989',
        vacancy: 'Вакансия 7',
        status: 'Черновик',
    },
    {
        date: '11.01.2018',
        vacancy: 'Вакансия 8',
        status: 'Черновик',
    },
    {
        date: '11.01.2010',
        vacancy: 'Вакансия 5',
        status: 'Закрыта',
    },
    {
        date: '12.11.2009',
        vacancy: 'Вакансия 6',
        status: 'Закрыта',
    },
    {
        date: '12.07.2009',
        vacancy: 'Вакансия 6',
        status: 'Закрыта',
    },
    {
        date: '01.07.1989',
        vacancy: 'Вакансия 7',
        status: 'Черновик',
    },
    {
        date: '11.01.2015',
        vacancy: 'Вакансия 8',
        status: 'Черновик',
    },
];
// кандидаты
exports.dataCandidates = [
    {
        vacancy: {
            name: 'Дизайнер',
            candidates: ['Петров Петр Петрович', 'Смирнов Сергей Александрович'],
        },
        fullname: 'Иванов Иван Иванович',
        event: 'Резюме у заказчика',
        resume: 'resume 1',
    },
    {
        vacancy: {
            name: 'Рекрутер',
            candidates: [
                'Васильев Василий Васильевич',
                'Кузнецов Константин Константинович',
            ],
        },
        fullname: 'Киселёв Максим Олегович',
        event: 'Проверка СБ',
        resume: 'resume 2',
    },
    {
        vacancy: {
            name: 'Методист',
            candidates: ['Соколов Сергей Сергеевич', 'Попов Павел Павлович'],
        },
        fullname: 'Иванов Иван Иванович',
        event: 'Принят на работу',
        resume: 'resume 3',
    },
    {
        vacancy: {
            name: 'Начальник отдела кадров',
            candidates: ['Лебедев Леонид Леонидович', 'Козлов Кирилл Кириллович'],
        },
        fullname: 'Киселёв Максим Олегович',
        event: 'Резюме у заказчика',
        resume: 'resume 4',
    },
    {
        vacancy: {
            name: 'Менеджер по подбору персонала',
            candidates: ['Новиков Николай Николаевич', 'Морозов Михаил Михайлович'],
        },
        fullname: 'Киселёв Максим Олегович',
        event: 'Проверка СБ',
        resume: 'resume 5',
    },
    {
        vacancy: {
            name: 'Дизайнер',
            candidates: ['Петров Петр Петрович', 'Смирнов Сергей Александрович'],
        },
        fullname: 'Иванов Иван Иванович',
        event: 'Принят на работу',
        resume: 'resume 1',
    },
    {
        vacancy: {
            name: 'Рекрутер',
            candidates: [
                'Васильев Василий Васильевич',
                'Кузнецов Константин Константинович',
            ],
        },
        fullname: 'Киселёв Максим Олегович',
        event: 'Резюме у заказчика',
        resume: 'resume 2',
    },
    {
        vacancy: {
            name: 'Методист',
            candidates: ['Соколов Сергей Сергеевич', 'Попов Павел Павлович'],
        },
        fullname: 'Иванов Иван Иванович',
        event: 'Проверка СБ',
        resume: 'resume 3',
    },
    {
        vacancy: {
            name: 'Начальник отдела кадров',
            candidates: ['Лебедев Леонид Леонидович', 'Козлов Кирилл Кириллович'],
        },
        fullname: 'Киселёв Максим Олегович',
        event: 'Проверка СБ',
        resume: 'resume 4',
    },
    {
        vacancy: {
            name: 'Менеджер по подбору персонала',
            candidates: ['Новиков Николай Николаевич', 'Морозов Михаил Михайлович'],
        },
        fullname: 'Киселёв Максим Олегович',
        event: 'Принят на работу',
        resume: 'resume 5',
    },
];
// вакансии
exports.dataVacancy = [
    {
        date: '22.07.2020',
        vacancy: 'вакансия 1',
        status: 'В работе',
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
        status: 'Закрыта',
        fullname: 'Иванов Иван Петрович',
        recruiterContacts: 'контакты рекрутера',
        resumeReviewed: 'Рассмотрено резюме 1',
        resumeSentToCustomer: 'Резюме направлено заказчику на рассмотрение 1',
        interviewWithTheCustomerWasConducted: 'Проведено интервью с заказчиком 1',
        checkSB: 'Проверка СБ 1',
        offer: 'Оффер 1',
        employed: 'Трудоустроены 1',
    },
    {
        date: '22.07.2021',
        vacancy: 'вакансия 1',
        status: 'Закрыта заказчиком',
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
        status: 'Новая заявка',
        fullname: 'Иванов Иван Петрович',
        recruiterContacts: 'контакты рекрутера',
        resumeReviewed: 'Рассмотрено резюме 1',
        resumeSentToCustomer: 'Резюме направлено заказчику на рассмотрение 1',
        interviewWithTheCustomerWasConducted: 'Проведено интервью с заказчиком 1',
        checkSB: 'Проверка СБ 1',
        offer: 'Оффер 1',
        employed: 'Трудоустроены 1',
    },
    {
        date: '22.07.2023',
        vacancy: 'вакансия 1',
        status: 'Новая заявка',
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
        date: '22.07.2022',
        vacancy: 'вакансия 2',
        status: 'Отменена',
        fullname: 'Иванов Иван Петрович',
        recruiterContacts: 'контакты рекрутера',
        resumeReviewed: 'Рассмотрено резюме 1',
        resumeSentToCustomer: 'Резюме направлено заказчику на рассмотрение 1',
        interviewWithTheCustomerWasConducted: 'Проведено интервью с заказчиком 1',
        checkSB: 'Проверка СБ 1',
        offer: 'Оффер 1',
        employed: 'Трудоустроены 1',
    },
    {
        date: '22.07.2017',
        vacancy: 'вакансия 1',
        status: 'Приостановлена',
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
        date: '22.07.2016',
        vacancy: 'вакансия 2',
        status: 'Сверх суммарной загрузки',
        fullname: 'Иванов Иван Петрович',
        recruiterContacts: 'контакты рекрутера',
        resumeReviewed: 'Рассмотрено резюме 1',
        resumeSentToCustomer: 'Резюме направлено заказчику на рассмотрение 1',
        interviewWithTheCustomerWasConducted: 'Проведено интервью с заказчиком 1',
        checkSB: 'Проверка СБ 1',
        offer: 'Оффер 1',
        employed: 'Трудоустроены 1',
    },
    {
        date: '22.07.2021',
        vacancy: 'вакансия 1',
        status: 'Приостановлена',
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
        status: 'Приостановлена',
        fullname: 'Иванов Иван Петрович',
        recruiterContacts: 'контакты рекрутера',
        resumeReviewed: 'Рассмотрено резюме 1',
        resumeSentToCustomer: 'Резюме направлено заказчику на рассмотрение 1',
        interviewWithTheCustomerWasConducted: 'Проведено интервью с заказчиком 1',
        checkSB: 'Проверка СБ 1',
        offer: 'Оффер 1',
        employed: 'Трудоустроены 1',
    },
    {
        date: '22.07.2021',
        vacancy: 'вакансия 1',
        status: 'Приостановлена',
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
        status: 'Приостановлена',
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


/***/ }),

/***/ "./src/ts/table-bids.ts":
/*!******************************!*\
  !*** ./src/ts/table-bids.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createTableBids = void 0;
var STATE_OF_SORTED_BIDS = {
    date: true,
    vacancy: true,
    status: true,
};
var data = [];
// document.getElementById('bids-sort-date').addEventListener('click', () => {
//   createTableBids().dataSort('date');
// });
// document.getElementById('bids-sort-vacancy').addEventListener('click', () => {
//   createTableBids().dataSort('vacancy');
// });
// document.getElementById('bids-sort-status').addEventListener('click', () => {
//   createTableBids().dataSort('status');
// });
var createTableBids = function () {
    var addOneElemToData = function (someData) {
        data.push(someData);
        renderTableContent();
    };
    var addManyElemsToData = function (someData) {
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
    var renderTableContent = function () {
        var elemOfTableContainer = document.querySelector('.table-bids.content');
        if (elemOfTableContainer !== null) {
            elemOfTableContainer.innerHTML = '';
        }
        var dataElems = data.map(function (elem) {
            return "\n        <div class=\"row\">\n          <p class=\"cell cell-date\">".concat(elem.date, "</p>\n          <p class=\"cell\"><a href=\"").concat(elem.vacancy, "\">link</a></p>\n          <p class=\"cell cell-status\">").concat(elem.status, "</p>\n        </div>\n      ");
        });
        var combinedDataElems = dataElems.join('');
        elemOfTableContainer === null || elemOfTableContainer === void 0 ? void 0 : elemOfTableContainer.insertAdjacentHTML('beforeend', combinedDataElems);
    };
    var renderArrow = function () {
        var elemsOfArrow = document.querySelectorAll('.description-bids.row .arrow');
        var keys = Object.keys(STATE_OF_SORTED_BIDS);
        keys.forEach(function (key, index) {
            var value = STATE_OF_SORTED_BIDS[key];
            elemsOfArrow[index].className =
                value === true ? 'arrow arrow-up' : 'arrow arrow-down';
        });
    };
    return {
        renderTableContent: renderTableContent,
        // dataSort,
        data: data,
        renderArrow: renderArrow,
        addOneElemToData: addOneElemToData,
        addManyElemsToData: addManyElemsToData,
    };
};
exports.createTableBids = createTableBids;
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


/***/ }),

/***/ "./src/ts/table-candidates.ts":
/*!************************************!*\
  !*** ./src/ts/table-candidates.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createTableCandidates = void 0;
var STATE_OF_SORTED_CANDIDATES = {
    vacancy: true,
    fullname: true,
    event: true,
    resume: true,
};
var dataCandidates = [];
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
var createTableCandidates = function () {
    var addOneElemToData = function (someData) {
        dataCandidates.push(someData);
        renderTableContent();
    };
    var addManyElemsToData = function (someData) {
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
    var renderTableContent = function () {
        var elemOfTableContainer = document.querySelector('.table-candidates.content');
        if (elemOfTableContainer !== null) {
            elemOfTableContainer.innerHTML = '';
        }
        var dataElems = dataCandidates.map(function (elem) {
            return "\n        <div class=\"row\">\n          <div class=\"cell vacancy-content\">\n            <div class=\"describe\">\n              <p>".concat(elem.vacancy.name, "</p>\n              <div class=\"img-container\">\n                <img class=\"img-list\" src=\"websoft_education/gazprom/src/images/list.png\" alt=\"list\">\n              </div>\n            </div>\n            <div class=\"candidates hide\">\n              ").concat(elem.vacancy.candidates
                .map(function (candidate) { return "<p><a href=\"#\">".concat(candidate, "</a></p>"); })
                .join(''), "\n            </div>\n            \n          </div> \n          <p class=\"cell\">").concat(elem.fullname, "</p>\n          <p class=\"cell cell-event\">").concat(elem.event, "</p>\n          <div class=\"cell resume-content\">\n            <div class=\"img-container\">\n              <img src=\"websoft_education/gazprom/src/images/eye.png\" alt=\"eye\">\n            </div>\n            <div class=\"img-container\">\n              <img src=\"websoft_education/gazprom/src/images/download.png\" alt=\"download\">\n            </div>\n          </div>\n        </div>\n      ");
        });
        var combinedDataElems = dataElems.join('');
        elemOfTableContainer === null || elemOfTableContainer === void 0 ? void 0 : elemOfTableContainer.insertAdjacentHTML('beforeend', combinedDataElems);
    };
    var renderArrow = function () {
        var elemsOfArrow = document.querySelectorAll('.description-candidates.row .arrow');
        var keys = Object.keys(STATE_OF_SORTED_CANDIDATES);
        keys.forEach(function (key, index) {
            if (index > 2)
                return;
            var value = STATE_OF_SORTED_CANDIDATES[key];
            elemsOfArrow[index].className =
                value === true ? 'arrow arrow-up' : 'arrow arrow-down';
        });
    };
    return {
        renderTableContent: renderTableContent,
        // dataSort,
        dataCandidates: dataCandidates,
        renderArrow: renderArrow,
        addOneElemToData: addOneElemToData,
        addManyElemsToData: addManyElemsToData,
    };
};
exports.createTableCandidates = createTableCandidates;
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


/***/ }),

/***/ "./src/ts/table-vacancy.ts":
/*!*********************************!*\
  !*** ./src/ts/table-vacancy.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createTableVacancy = void 0;
var STATE_OF_SORTED_VACANCY = {
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
var dataVacancy = [];
// document.getElementById('vacancy-sort-date').addEventListener('click', () => {
//   createTableVacancy().dataSort('date');
// });
// document
//   .getElementById('vacancy-sort-vacancy')
//   .addEventListener('click', () => {
//     createTableVacancy().dataSort('vacancy');
//   });
// document.getElementById('vacancy-sort-status').addEventListener('click', () => {
//   createTableVacancy().dataSort('status');
// });
// document
//   .getElementById('vacancy-sort-fullname')
//   .addEventListener('click', () => {
//     createTableVacancy().dataSort('fullname');
//   });
var createTableVacancy = function () {
    var addOneElemToData = function (someData) {
        dataVacancy.push(someData);
        renderTableContent();
    };
    var addManyElemsToData = function (someData) {
        dataVacancy = someData;
    };
    // const dataSort = (elem: keyof IDataVacancy) => {
    //   let arrowSort = STATE_OF_SORTED_VACANCY[elem];
    //   if (arrowSort === false) {
    //     STATE_OF_SORTED_VACANCY[elem] = true;
    //   } else {
    //     STATE_OF_SORTED_VACANCY[elem] = false;
    //   }
    //   dataVacancy.sort((a: IDataVacancy, b: IDataVacancy) => {
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
    var renderTableContent = function () {
        var elemOfTableContainer = document.querySelector('.table-vacancy.content');
        if (elemOfTableContainer !== null) {
            elemOfTableContainer.innerHTML = '';
        }
        var dataElems = dataVacancy.map(function (elem) {
            return "\n        <div class=\"row\">\n          <p class=\"cell cell-date\">".concat(elem.date, "</p>\n          <p class=\"cell\">").concat(elem.vacancy, "</p>\n          <p class=\"cell cell-status\">").concat(elem.status, "</p>\n          <p class=\"cell\">").concat(elem.fullname, "</p>\n          <p class=\"cell\">").concat(elem.recruiterContacts, "</p>\n          <p class=\"cell\">").concat(elem.resumeReviewed, "</p>\n          <p class=\"cell\">").concat(elem.resumeSentToCustomer, "</p>\n          <p class=\"cell\">").concat(elem.interviewWithTheCustomerWasConducted, "</p>\n          <p class=\"cell\">").concat(elem.checkSB, "</p>\n          <p class=\"cell\">").concat(elem.offer, "</p>\n          <p class=\"cell\">").concat(elem.employed, "</p>\n        </div>\n      ");
        });
        var combinedDataElems = dataElems.join('');
        elemOfTableContainer === null || elemOfTableContainer === void 0 ? void 0 : elemOfTableContainer.insertAdjacentHTML('beforeend', combinedDataElems);
    };
    var renderArrow = function () {
        var elemsOfArrow = document.querySelectorAll('.description-vacancy.row .arrow');
        var keys = Object.keys(STATE_OF_SORTED_VACANCY);
        keys.forEach(function (key, index) {
            if (index > 3)
                return;
            var value = STATE_OF_SORTED_VACANCY[key];
            elemsOfArrow[index].className =
                value === true ? 'arrow arrow-up' : 'arrow arrow-down';
        });
    };
    return {
        renderTableContent: renderTableContent,
        // dataSort,
        dataVacancy: dataVacancy,
        renderArrow: renderArrow,
        addOneElemToData: addOneElemToData,
        addManyElemsToData: addManyElemsToData,
    };
};
exports.createTableVacancy = createTableVacancy;
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


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
var table_bids_1 = __webpack_require__(/*! ./ts/table-bids */ "./src/ts/table-bids.ts");
var table_candidates_1 = __webpack_require__(/*! ./ts/table-candidates */ "./src/ts/table-candidates.ts");
var table_vacancy_1 = __webpack_require__(/*! ./ts/table-vacancy */ "./src/ts/table-vacancy.ts");
var data_1 = __webpack_require__(/*! ./ts/data */ "./src/ts/data.ts");
var initTable = function () {
    // таблица с заявками
    // заполнить таблицу данными
    (0, table_bids_1.createTableBids)().addManyElemsToData(data_1.dataBids);
    // отрисовать таблицу
    (0, table_bids_1.createTableBids)().renderTableContent();
    // отрисовать стрелки сортировки
    (0, table_bids_1.createTableBids)().renderArrow();
    // отсортируем по дате
    // createTableBids().dataSort('date');
    // createTableBids().dataSort('date');
    // таблица с вакансиями
    (0, table_vacancy_1.createTableVacancy)().addManyElemsToData(data_1.dataVacancy);
    (0, table_vacancy_1.createTableVacancy)().renderTableContent();
    (0, table_vacancy_1.createTableVacancy)().renderArrow();
    // отсортируем по дате
    // createTableVacancy().dataSort('date');
    // createTableVacancy().dataSort('date');
    // таблица с кандидатами
    (0, table_candidates_1.createTableCandidates)().addManyElemsToData(data_1.dataCandidates);
    (0, table_candidates_1.createTableCandidates)().renderTableContent();
    (0, table_candidates_1.createTableCandidates)().renderArrow();
    // отсортируем по вакансии
    // createTableCandidates().dataSort('vacancy');
};
initTable();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RCxzRUFBa0U7QUFFbEUsSUFBTSxTQUFTLEdBQUc7SUFDaEIscUJBQXFCO0lBQ3JCLDRCQUE0QjtJQUM1QixnQ0FBZSxHQUFFLENBQUMsa0JBQWtCLENBQUMsZUFBUSxDQUFDLENBQUM7SUFDL0MscUJBQXFCO0lBQ3JCLGdDQUFlLEdBQUUsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQ3ZDLGdDQUFnQztJQUNoQyxnQ0FBZSxHQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7SUFFaEMsc0JBQXNCO0lBQ3RCLHNDQUFzQztJQUN0QyxzQ0FBc0M7SUFFdEMsdUJBQXVCO0lBQ3ZCLHNDQUFrQixHQUFFLENBQUMsa0JBQWtCLENBQUMsa0JBQVcsQ0FBQyxDQUFDO0lBQ3JELHNDQUFrQixHQUFFLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUMxQyxzQ0FBa0IsR0FBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBRW5DLHNCQUFzQjtJQUN0Qix5Q0FBeUM7SUFDekMseUNBQXlDO0lBRXpDLHdCQUF3QjtJQUN4Qiw0Q0FBcUIsR0FBRSxDQUFDLGtCQUFrQixDQUFDLHFCQUFjLENBQUMsQ0FBQztJQUMzRCw0Q0FBcUIsR0FBRSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDN0MsNENBQXFCLEdBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUV0QywwQkFBMEI7SUFDMUIsK0NBQStDO0FBQ2pELENBQUMsQ0FBQztBQUVGLFNBQVMsRUFBRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2F6cHJvbS8uL3NyYy90cy9kYXRhLnRzIiwid2VicGFjazovL2dhenByb20vLi9zcmMvdHMvdGFibGUtYmlkcy50cyIsIndlYnBhY2s6Ly9nYXpwcm9tLy4vc3JjL3RzL3RhYmxlLWNhbmRpZGF0ZXMudHMiLCJ3ZWJwYWNrOi8vZ2F6cHJvbS8uL3NyYy90cy90YWJsZS12YWNhbmN5LnRzIiwid2VicGFjazovL2dhenByb20vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZ2F6cHJvbS8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJRGF0YUJpZHMgfSBmcm9tICcuL3RhYmxlLWJpZHMnO1xyXG5pbXBvcnQgeyBJRGF0YUNhbmRpZGF0ZXMgfSBmcm9tICcuL3RhYmxlLWNhbmRpZGF0ZXMnO1xyXG5pbXBvcnQgeyBJRGF0YVZhY2FuY3kgfSBmcm9tICcuL3RhYmxlLXZhY2FuY3knO1xyXG5cclxuLy8g0LfQsNGP0LLQutC4XHJcbmV4cG9ydCBsZXQgZGF0YUJpZHM6IElEYXRhQmlkc1tdID0gW1xyXG4gIHtcclxuICAgIGRhdGU6ICcxMi4xMS4yMDIyJyxcclxuICAgIHZhY2FuY3k6ICfQktCw0LrQsNC90YHQuNGPIDEnLFxyXG4gICAgc3RhdHVzOiAn0KfQtdGA0L3QvtCy0LjQuicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBkYXRlOiAnMDEuMDcuMTk4OScsXHJcbiAgICB2YWNhbmN5OiAn0JLQsNC60LDQvdGB0LjRjyAyJyxcclxuICAgIHN0YXR1czogJ9CX0LDQutGA0YvRgtCwJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGRhdGU6ICcxMS4wMS4yMDE1JyxcclxuICAgIHZhY2FuY3k6ICfQktCw0LrQsNC90YHQuNGPIDMnLFxyXG4gICAgc3RhdHVzOiAn0J7RgtC60LvQvtC90LXQvdCwJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGRhdGU6ICcxMi4xMS4yMDIxJyxcclxuICAgIHZhY2FuY3k6ICfQktCw0LrQsNC90YHQuNGPIDEnLFxyXG4gICAgc3RhdHVzOiAn0J7RgtC60LvQvtC90LXQvdCwJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGRhdGU6ICcwMy4wNy4xOTg5JyxcclxuICAgIHZhY2FuY3k6ICfQktCw0LrQsNC90YHQuNGPIDQnLFxyXG4gICAgc3RhdHVzOiAn0J7RgtC60LvQvtC90LXQvdCwJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGRhdGU6ICcxMS4wMS4yMDE2JyxcclxuICAgIHZhY2FuY3k6ICfQktCw0LrQsNC90YHQuNGPIDUnLFxyXG4gICAgc3RhdHVzOiAn0JfQsNC60YDRi9GC0LAnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgZGF0ZTogJzEyLjExLjIwMTcnLFxyXG4gICAgdmFjYW5jeTogJ9CS0LDQutCw0L3RgdC40Y8gNicsXHJcbiAgICBzdGF0dXM6ICfQl9Cw0LrRgNGL0YLQsCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBkYXRlOiAnMDIuMDcuMTk4OScsXHJcbiAgICB2YWNhbmN5OiAn0JLQsNC60LDQvdGB0LjRjyA3JyxcclxuICAgIHN0YXR1czogJ9Cn0LXRgNC90L7QstC40LonLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgZGF0ZTogJzExLjAxLjIwMTgnLFxyXG4gICAgdmFjYW5jeTogJ9CS0LDQutCw0L3RgdC40Y8gOCcsXHJcbiAgICBzdGF0dXM6ICfQp9C10YDQvdC+0LLQuNC6JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGRhdGU6ICcxMS4wMS4yMDEwJyxcclxuICAgIHZhY2FuY3k6ICfQktCw0LrQsNC90YHQuNGPIDUnLFxyXG4gICAgc3RhdHVzOiAn0JfQsNC60YDRi9GC0LAnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgZGF0ZTogJzEyLjExLjIwMDknLFxyXG4gICAgdmFjYW5jeTogJ9CS0LDQutCw0L3RgdC40Y8gNicsXHJcbiAgICBzdGF0dXM6ICfQl9Cw0LrRgNGL0YLQsCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICBkYXRlOiAnMTIuMDcuMjAwOScsXHJcbiAgICB2YWNhbmN5OiAn0JLQsNC60LDQvdGB0LjRjyA2JyxcclxuICAgIHN0YXR1czogJ9CX0LDQutGA0YvRgtCwJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGRhdGU6ICcwMS4wNy4xOTg5JyxcclxuICAgIHZhY2FuY3k6ICfQktCw0LrQsNC90YHQuNGPIDcnLFxyXG4gICAgc3RhdHVzOiAn0KfQtdGA0L3QvtCy0LjQuicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBkYXRlOiAnMTEuMDEuMjAxNScsXHJcbiAgICB2YWNhbmN5OiAn0JLQsNC60LDQvdGB0LjRjyA4JyxcclxuICAgIHN0YXR1czogJ9Cn0LXRgNC90L7QstC40LonLFxyXG4gIH0sXHJcbl07XHJcblxyXG4vLyDQutCw0L3QtNC40LTQsNGC0YtcclxuZXhwb3J0IGxldCBkYXRhQ2FuZGlkYXRlczogSURhdGFDYW5kaWRhdGVzW10gPSBbXHJcbiAge1xyXG4gICAgdmFjYW5jeToge1xyXG4gICAgICBuYW1lOiAn0JTQuNC30LDQudC90LXRgCcsXHJcbiAgICAgIGNhbmRpZGF0ZXM6IFsn0J/QtdGC0YDQvtCyINCf0LXRgtGAINCf0LXRgtGA0L7QstC40YcnLCAn0KHQvNC40YDQvdC+0LIg0KHQtdGA0LPQtdC5INCQ0LvQtdC60YHQsNC90LTRgNC+0LLQuNGHJ10sXHJcbiAgICB9LFxyXG4gICAgZnVsbG5hbWU6ICfQmNCy0LDQvdC+0LIg0JjQstCw0L0g0JjQstCw0L3QvtCy0LjRhycsXHJcbiAgICBldmVudDogJ9Cg0LXQt9GO0LzQtSDRgyDQt9Cw0LrQsNC30YfQuNC60LAnLFxyXG4gICAgcmVzdW1lOiAncmVzdW1lIDEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdmFjYW5jeToge1xyXG4gICAgICBuYW1lOiAn0KDQtdC60YDRg9GC0LXRgCcsXHJcbiAgICAgIGNhbmRpZGF0ZXM6IFtcclxuICAgICAgICAn0JLQsNGB0LjQu9GM0LXQsiDQktCw0YHQuNC70LjQuSDQktCw0YHQuNC70YzQtdCy0LjRhycsXHJcbiAgICAgICAgJ9Ca0YPQt9C90LXRhtC+0LIg0JrQvtC90YHRgtCw0L3RgtC40L0g0JrQvtC90YHRgtCw0L3RgtC40L3QvtCy0LjRhycsXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAgZnVsbG5hbWU6ICfQmtC40YHQtdC70ZHQsiDQnNCw0LrRgdC40Lwg0J7Qu9C10LPQvtCy0LjRhycsXHJcbiAgICBldmVudDogJ9Cf0YDQvtCy0LXRgNC60LAg0KHQkScsXHJcbiAgICByZXN1bWU6ICdyZXN1bWUgMicsXHJcbiAgfSxcclxuICB7XHJcbiAgICB2YWNhbmN5OiB7XHJcbiAgICAgIG5hbWU6ICfQnNC10YLQvtC00LjRgdGCJyxcclxuICAgICAgY2FuZGlkYXRlczogWyfQodC+0LrQvtC70L7QsiDQodC10YDQs9C10Lkg0KHQtdGA0LPQtdC10LLQuNGHJywgJ9Cf0L7Qv9C+0LIg0J/QsNCy0LXQuyDQn9Cw0LLQu9C+0LLQuNGHJ10sXHJcbiAgICB9LFxyXG4gICAgZnVsbG5hbWU6ICfQmNCy0LDQvdC+0LIg0JjQstCw0L0g0JjQstCw0L3QvtCy0LjRhycsXHJcbiAgICBldmVudDogJ9Cf0YDQuNC90Y/RgiDQvdCwINGA0LDQsdC+0YLRgycsXHJcbiAgICByZXN1bWU6ICdyZXN1bWUgMycsXHJcbiAgfSxcclxuICB7XHJcbiAgICB2YWNhbmN5OiB7XHJcbiAgICAgIG5hbWU6ICfQndCw0YfQsNC70YzQvdC40Log0L7RgtC00LXQu9CwINC60LDQtNGA0L7QsicsXHJcbiAgICAgIGNhbmRpZGF0ZXM6IFsn0JvQtdCx0LXQtNC10LIg0JvQtdC+0L3QuNC0INCb0LXQvtC90LjQtNC+0LLQuNGHJywgJ9Ca0L7Qt9C70L7QsiDQmtC40YDQuNC70Lsg0JrQuNGA0LjQu9C70L7QstC40YcnXSxcclxuICAgIH0sXHJcbiAgICBmdWxsbmFtZTogJ9Ca0LjRgdC10LvRkdCyINCc0LDQutGB0LjQvCDQntC70LXQs9C+0LLQuNGHJyxcclxuICAgIGV2ZW50OiAn0KDQtdC30Y7QvNC1INGDINC30LDQutCw0LfRh9C40LrQsCcsXHJcbiAgICByZXN1bWU6ICdyZXN1bWUgNCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICB2YWNhbmN5OiB7XHJcbiAgICAgIG5hbWU6ICfQnNC10L3QtdC00LbQtdGAINC/0L4g0L/QvtC00LHQvtGA0YMg0L/QtdGA0YHQvtC90LDQu9CwJyxcclxuICAgICAgY2FuZGlkYXRlczogWyfQndC+0LLQuNC60L7QsiDQndC40LrQvtC70LDQuSDQndC40LrQvtC70LDQtdCy0LjRhycsICfQnNC+0YDQvtC30L7QsiDQnNC40YXQsNC40Lsg0JzQuNGF0LDQudC70L7QstC40YcnXSxcclxuICAgIH0sXHJcbiAgICBmdWxsbmFtZTogJ9Ca0LjRgdC10LvRkdCyINCc0LDQutGB0LjQvCDQntC70LXQs9C+0LLQuNGHJyxcclxuICAgIGV2ZW50OiAn0J/RgNC+0LLQtdGA0LrQsCDQodCRJyxcclxuICAgIHJlc3VtZTogJ3Jlc3VtZSA1JyxcclxuICB9LFxyXG4gIHtcclxuICAgIHZhY2FuY3k6IHtcclxuICAgICAgbmFtZTogJ9CU0LjQt9Cw0LnQvdC10YAnLFxyXG4gICAgICBjYW5kaWRhdGVzOiBbJ9Cf0LXRgtGA0L7QsiDQn9C10YLRgCDQn9C10YLRgNC+0LLQuNGHJywgJ9Ch0LzQuNGA0L3QvtCyINCh0LXRgNCz0LXQuSDQkNC70LXQutGB0LDQvdC00YDQvtCy0LjRhyddLFxyXG4gICAgfSxcclxuICAgIGZ1bGxuYW1lOiAn0JjQstCw0L3QvtCyINCY0LLQsNC9INCY0LLQsNC90L7QstC40YcnLFxyXG4gICAgZXZlbnQ6ICfQn9GA0LjQvdGP0YIg0L3QsCDRgNCw0LHQvtGC0YMnLFxyXG4gICAgcmVzdW1lOiAncmVzdW1lIDEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdmFjYW5jeToge1xyXG4gICAgICBuYW1lOiAn0KDQtdC60YDRg9GC0LXRgCcsXHJcbiAgICAgIGNhbmRpZGF0ZXM6IFtcclxuICAgICAgICAn0JLQsNGB0LjQu9GM0LXQsiDQktCw0YHQuNC70LjQuSDQktCw0YHQuNC70YzQtdCy0LjRhycsXHJcbiAgICAgICAgJ9Ca0YPQt9C90LXRhtC+0LIg0JrQvtC90YHRgtCw0L3RgtC40L0g0JrQvtC90YHRgtCw0L3RgtC40L3QvtCy0LjRhycsXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAgZnVsbG5hbWU6ICfQmtC40YHQtdC70ZHQsiDQnNCw0LrRgdC40Lwg0J7Qu9C10LPQvtCy0LjRhycsXHJcbiAgICBldmVudDogJ9Cg0LXQt9GO0LzQtSDRgyDQt9Cw0LrQsNC30YfQuNC60LAnLFxyXG4gICAgcmVzdW1lOiAncmVzdW1lIDInLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdmFjYW5jeToge1xyXG4gICAgICBuYW1lOiAn0JzQtdGC0L7QtNC40YHRgicsXHJcbiAgICAgIGNhbmRpZGF0ZXM6IFsn0KHQvtC60L7Qu9C+0LIg0KHQtdGA0LPQtdC5INCh0LXRgNCz0LXQtdCy0LjRhycsICfQn9C+0L/QvtCyINCf0LDQstC10Lsg0J/QsNCy0LvQvtCy0LjRhyddLFxyXG4gICAgfSxcclxuICAgIGZ1bGxuYW1lOiAn0JjQstCw0L3QvtCyINCY0LLQsNC9INCY0LLQsNC90L7QstC40YcnLFxyXG4gICAgZXZlbnQ6ICfQn9GA0L7QstC10YDQutCwINCh0JEnLFxyXG4gICAgcmVzdW1lOiAncmVzdW1lIDMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdmFjYW5jeToge1xyXG4gICAgICBuYW1lOiAn0J3QsNGH0LDQu9GM0L3QuNC6INC+0YLQtNC10LvQsCDQutCw0LTRgNC+0LInLFxyXG4gICAgICBjYW5kaWRhdGVzOiBbJ9Cb0LXQsdC10LTQtdCyINCb0LXQvtC90LjQtCDQm9C10L7QvdC40LTQvtCy0LjRhycsICfQmtC+0LfQu9C+0LIg0JrQuNGA0LjQu9C7INCa0LjRgNC40LvQu9C+0LLQuNGHJ10sXHJcbiAgICB9LFxyXG4gICAgZnVsbG5hbWU6ICfQmtC40YHQtdC70ZHQsiDQnNCw0LrRgdC40Lwg0J7Qu9C10LPQvtCy0LjRhycsXHJcbiAgICBldmVudDogJ9Cf0YDQvtCy0LXRgNC60LAg0KHQkScsXHJcbiAgICByZXN1bWU6ICdyZXN1bWUgNCcsXHJcbiAgfSxcclxuICB7XHJcbiAgICB2YWNhbmN5OiB7XHJcbiAgICAgIG5hbWU6ICfQnNC10L3QtdC00LbQtdGAINC/0L4g0L/QvtC00LHQvtGA0YMg0L/QtdGA0YHQvtC90LDQu9CwJyxcclxuICAgICAgY2FuZGlkYXRlczogWyfQndC+0LLQuNC60L7QsiDQndC40LrQvtC70LDQuSDQndC40LrQvtC70LDQtdCy0LjRhycsICfQnNC+0YDQvtC30L7QsiDQnNC40YXQsNC40Lsg0JzQuNGF0LDQudC70L7QstC40YcnXSxcclxuICAgIH0sXHJcbiAgICBmdWxsbmFtZTogJ9Ca0LjRgdC10LvRkdCyINCc0LDQutGB0LjQvCDQntC70LXQs9C+0LLQuNGHJyxcclxuICAgIGV2ZW50OiAn0J/RgNC40L3Rj9GCINC90LAg0YDQsNCx0L7RgtGDJyxcclxuICAgIHJlc3VtZTogJ3Jlc3VtZSA1JyxcclxuICB9LFxyXG5dO1xyXG5cclxuLy8g0LLQsNC60LDQvdGB0LjQuFxyXG5leHBvcnQgbGV0IGRhdGFWYWNhbmN5OiBJRGF0YVZhY2FuY3lbXSA9IFtcclxuICB7XHJcbiAgICBkYXRlOiAnMjIuMDcuMjAyMCcsXHJcbiAgICB2YWNhbmN5OiAn0LLQsNC60LDQvdGB0LjRjyAxJyxcclxuICAgIHN0YXR1czogJ9CSINGA0LDQsdC+0YLQtScsXHJcbiAgICBmdWxsbmFtZTogJ9CY0LLQsNC90L7QsiDQmNCy0LDQvSDQmNCy0LDQvdC+0LLQuNGHJyxcclxuICAgIHJlY3J1aXRlckNvbnRhY3RzOiAn0LrQvtC90YLQsNC60YLRiyDRgNC10LrRgNGD0YLQtdGA0LAnLFxyXG4gICAgcmVzdW1lUmV2aWV3ZWQ6ICfQoNCw0YHRgdC80L7RgtGA0LXQvdC+INGA0LXQt9GO0LzQtSAxJyxcclxuICAgIHJlc3VtZVNlbnRUb0N1c3RvbWVyOiAn0KDQtdC30Y7QvNC1INC90LDQv9GA0LDQstC70LXQvdC+INC30LDQutCw0LfRh9C40LrRgyDQvdCwINGA0LDRgdGB0LzQvtGC0YDQtdC90LjQtSAxJyxcclxuICAgIGludGVydmlld1dpdGhUaGVDdXN0b21lcldhc0NvbmR1Y3RlZDogJ9Cf0YDQvtCy0LXQtNC10L3QviDQuNC90YLQtdGA0LLRjNGOINGBINC30LDQutCw0LfRh9C40LrQvtC8IDEnLFxyXG4gICAgY2hlY2tTQjogJ9Cf0YDQvtCy0LXRgNC60LAg0KHQkSAxJyxcclxuICAgIG9mZmVyOiAn0J7RhNGE0LXRgCAxJyxcclxuICAgIGVtcGxveWVkOiAn0KLRgNGD0LTQvtGD0YHRgtGA0L7QtdC90YsgMScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBkYXRlOiAnMjIuMDcuMjAxMicsXHJcbiAgICB2YWNhbmN5OiAn0LLQsNC60LDQvdGB0LjRjyAyJyxcclxuICAgIHN0YXR1czogJ9CX0LDQutGA0YvRgtCwJyxcclxuICAgIGZ1bGxuYW1lOiAn0JjQstCw0L3QvtCyINCY0LLQsNC9INCf0LXRgtGA0L7QstC40YcnLFxyXG4gICAgcmVjcnVpdGVyQ29udGFjdHM6ICfQutC+0L3RgtCw0LrRgtGLINGA0LXQutGA0YPRgtC10YDQsCcsXHJcbiAgICByZXN1bWVSZXZpZXdlZDogJ9Cg0LDRgdGB0LzQvtGC0YDQtdC90L4g0YDQtdC30Y7QvNC1IDEnLFxyXG4gICAgcmVzdW1lU2VudFRvQ3VzdG9tZXI6ICfQoNC10LfRjtC80LUg0L3QsNC/0YDQsNCy0LvQtdC90L4g0LfQsNC60LDQt9GH0LjQutGDINC90LAg0YDQsNGB0YHQvNC+0YLRgNC10L3QuNC1IDEnLFxyXG4gICAgaW50ZXJ2aWV3V2l0aFRoZUN1c3RvbWVyV2FzQ29uZHVjdGVkOiAn0J/RgNC+0LLQtdC00LXQvdC+INC40L3RgtC10YDQstGM0Y4g0YEg0LfQsNC60LDQt9GH0LjQutC+0LwgMScsXHJcbiAgICBjaGVja1NCOiAn0J/RgNC+0LLQtdGA0LrQsCDQodCRIDEnLFxyXG4gICAgb2ZmZXI6ICfQntGE0YTQtdGAIDEnLFxyXG4gICAgZW1wbG95ZWQ6ICfQotGA0YPQtNC+0YPRgdGC0YDQvtC10L3RiyAxJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGRhdGU6ICcyMi4wNy4yMDIxJyxcclxuICAgIHZhY2FuY3k6ICfQstCw0LrQsNC90YHQuNGPIDEnLFxyXG4gICAgc3RhdHVzOiAn0JfQsNC60YDRi9GC0LAg0LfQsNC60LDQt9GH0LjQutC+0LwnLFxyXG4gICAgZnVsbG5hbWU6ICfQmNCy0LDQvdC+0LIg0JjQstCw0L0g0JjQstCw0L3QvtCy0LjRhycsXHJcbiAgICByZWNydWl0ZXJDb250YWN0czogJ9C60L7QvdGC0LDQutGC0Ysg0YDQtdC60YDRg9GC0LXRgNCwJyxcclxuICAgIHJlc3VtZVJldmlld2VkOiAn0KDQsNGB0YHQvNC+0YLRgNC10L3QviDRgNC10LfRjtC80LUgMScsXHJcbiAgICByZXN1bWVTZW50VG9DdXN0b21lcjogJ9Cg0LXQt9GO0LzQtSDQvdCw0L/RgNCw0LLQu9C10L3QviDQt9Cw0LrQsNC30YfQuNC60YMg0L3QsCDRgNCw0YHRgdC80L7RgtGA0LXQvdC40LUgMScsXHJcbiAgICBpbnRlcnZpZXdXaXRoVGhlQ3VzdG9tZXJXYXNDb25kdWN0ZWQ6ICfQn9GA0L7QstC10LTQtdC90L4g0LjQvdGC0LXRgNCy0YzRjiDRgSDQt9Cw0LrQsNC30YfQuNC60L7QvCAxJyxcclxuICAgIGNoZWNrU0I6ICfQn9GA0L7QstC10YDQutCwINCh0JEgMScsXHJcbiAgICBvZmZlcjogJ9Ce0YTRhNC10YAgMScsXHJcbiAgICBlbXBsb3llZDogJ9Ci0YDRg9C00L7Rg9GB0YLRgNC+0LXQvdGLIDEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgZGF0ZTogJzIyLjA3LjIwMTInLFxyXG4gICAgdmFjYW5jeTogJ9Cy0LDQutCw0L3RgdC40Y8gMicsXHJcbiAgICBzdGF0dXM6ICfQndC+0LLQsNGPINC30LDRj9Cy0LrQsCcsXHJcbiAgICBmdWxsbmFtZTogJ9CY0LLQsNC90L7QsiDQmNCy0LDQvSDQn9C10YLRgNC+0LLQuNGHJyxcclxuICAgIHJlY3J1aXRlckNvbnRhY3RzOiAn0LrQvtC90YLQsNC60YLRiyDRgNC10LrRgNGD0YLQtdGA0LAnLFxyXG4gICAgcmVzdW1lUmV2aWV3ZWQ6ICfQoNCw0YHRgdC80L7RgtGA0LXQvdC+INGA0LXQt9GO0LzQtSAxJyxcclxuICAgIHJlc3VtZVNlbnRUb0N1c3RvbWVyOiAn0KDQtdC30Y7QvNC1INC90LDQv9GA0LDQstC70LXQvdC+INC30LDQutCw0LfRh9C40LrRgyDQvdCwINGA0LDRgdGB0LzQvtGC0YDQtdC90LjQtSAxJyxcclxuICAgIGludGVydmlld1dpdGhUaGVDdXN0b21lcldhc0NvbmR1Y3RlZDogJ9Cf0YDQvtCy0LXQtNC10L3QviDQuNC90YLQtdGA0LLRjNGOINGBINC30LDQutCw0LfRh9C40LrQvtC8IDEnLFxyXG4gICAgY2hlY2tTQjogJ9Cf0YDQvtCy0LXRgNC60LAg0KHQkSAxJyxcclxuICAgIG9mZmVyOiAn0J7RhNGE0LXRgCAxJyxcclxuICAgIGVtcGxveWVkOiAn0KLRgNGD0LTQvtGD0YHRgtGA0L7QtdC90YsgMScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBkYXRlOiAnMjIuMDcuMjAyMycsXHJcbiAgICB2YWNhbmN5OiAn0LLQsNC60LDQvdGB0LjRjyAxJyxcclxuICAgIHN0YXR1czogJ9Cd0L7QstCw0Y8g0LfQsNGP0LLQutCwJyxcclxuICAgIGZ1bGxuYW1lOiAn0JjQstCw0L3QvtCyINCY0LLQsNC9INCY0LLQsNC90L7QstC40YcnLFxyXG4gICAgcmVjcnVpdGVyQ29udGFjdHM6ICfQutC+0L3RgtCw0LrRgtGLINGA0LXQutGA0YPRgtC10YDQsCcsXHJcbiAgICByZXN1bWVSZXZpZXdlZDogJ9Cg0LDRgdGB0LzQvtGC0YDQtdC90L4g0YDQtdC30Y7QvNC1IDEnLFxyXG4gICAgcmVzdW1lU2VudFRvQ3VzdG9tZXI6ICfQoNC10LfRjtC80LUg0L3QsNC/0YDQsNCy0LvQtdC90L4g0LfQsNC60LDQt9GH0LjQutGDINC90LAg0YDQsNGB0YHQvNC+0YLRgNC10L3QuNC1IDEnLFxyXG4gICAgaW50ZXJ2aWV3V2l0aFRoZUN1c3RvbWVyV2FzQ29uZHVjdGVkOiAn0J/RgNC+0LLQtdC00LXQvdC+INC40L3RgtC10YDQstGM0Y4g0YEg0LfQsNC60LDQt9GH0LjQutC+0LwgMScsXHJcbiAgICBjaGVja1NCOiAn0J/RgNC+0LLQtdGA0LrQsCDQodCRIDEnLFxyXG4gICAgb2ZmZXI6ICfQntGE0YTQtdGAIDEnLFxyXG4gICAgZW1wbG95ZWQ6ICfQotGA0YPQtNC+0YPRgdGC0YDQvtC10L3RiyAxJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGRhdGU6ICcyMi4wNy4yMDIyJyxcclxuICAgIHZhY2FuY3k6ICfQstCw0LrQsNC90YHQuNGPIDInLFxyXG4gICAgc3RhdHVzOiAn0J7RgtC80LXQvdC10L3QsCcsXHJcbiAgICBmdWxsbmFtZTogJ9CY0LLQsNC90L7QsiDQmNCy0LDQvSDQn9C10YLRgNC+0LLQuNGHJyxcclxuICAgIHJlY3J1aXRlckNvbnRhY3RzOiAn0LrQvtC90YLQsNC60YLRiyDRgNC10LrRgNGD0YLQtdGA0LAnLFxyXG4gICAgcmVzdW1lUmV2aWV3ZWQ6ICfQoNCw0YHRgdC80L7RgtGA0LXQvdC+INGA0LXQt9GO0LzQtSAxJyxcclxuICAgIHJlc3VtZVNlbnRUb0N1c3RvbWVyOiAn0KDQtdC30Y7QvNC1INC90LDQv9GA0LDQstC70LXQvdC+INC30LDQutCw0LfRh9C40LrRgyDQvdCwINGA0LDRgdGB0LzQvtGC0YDQtdC90LjQtSAxJyxcclxuICAgIGludGVydmlld1dpdGhUaGVDdXN0b21lcldhc0NvbmR1Y3RlZDogJ9Cf0YDQvtCy0LXQtNC10L3QviDQuNC90YLQtdGA0LLRjNGOINGBINC30LDQutCw0LfRh9C40LrQvtC8IDEnLFxyXG4gICAgY2hlY2tTQjogJ9Cf0YDQvtCy0LXRgNC60LAg0KHQkSAxJyxcclxuICAgIG9mZmVyOiAn0J7RhNGE0LXRgCAxJyxcclxuICAgIGVtcGxveWVkOiAn0KLRgNGD0LTQvtGD0YHRgtGA0L7QtdC90YsgMScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBkYXRlOiAnMjIuMDcuMjAxNycsXHJcbiAgICB2YWNhbmN5OiAn0LLQsNC60LDQvdGB0LjRjyAxJyxcclxuICAgIHN0YXR1czogJ9Cf0YDQuNC+0YHRgtCw0L3QvtCy0LvQtdC90LAnLFxyXG4gICAgZnVsbG5hbWU6ICfQmNCy0LDQvdC+0LIg0JjQstCw0L0g0JjQstCw0L3QvtCy0LjRhycsXHJcbiAgICByZWNydWl0ZXJDb250YWN0czogJ9C60L7QvdGC0LDQutGC0Ysg0YDQtdC60YDRg9GC0LXRgNCwJyxcclxuICAgIHJlc3VtZVJldmlld2VkOiAn0KDQsNGB0YHQvNC+0YLRgNC10L3QviDRgNC10LfRjtC80LUgMScsXHJcbiAgICByZXN1bWVTZW50VG9DdXN0b21lcjogJ9Cg0LXQt9GO0LzQtSDQvdCw0L/RgNCw0LLQu9C10L3QviDQt9Cw0LrQsNC30YfQuNC60YMg0L3QsCDRgNCw0YHRgdC80L7RgtGA0LXQvdC40LUgMScsXHJcbiAgICBpbnRlcnZpZXdXaXRoVGhlQ3VzdG9tZXJXYXNDb25kdWN0ZWQ6ICfQn9GA0L7QstC10LTQtdC90L4g0LjQvdGC0LXRgNCy0YzRjiDRgSDQt9Cw0LrQsNC30YfQuNC60L7QvCAxJyxcclxuICAgIGNoZWNrU0I6ICfQn9GA0L7QstC10YDQutCwINCh0JEgMScsXHJcbiAgICBvZmZlcjogJ9Ce0YTRhNC10YAgMScsXHJcbiAgICBlbXBsb3llZDogJ9Ci0YDRg9C00L7Rg9GB0YLRgNC+0LXQvdGLIDEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgZGF0ZTogJzIyLjA3LjIwMTYnLFxyXG4gICAgdmFjYW5jeTogJ9Cy0LDQutCw0L3RgdC40Y8gMicsXHJcbiAgICBzdGF0dXM6ICfQodCy0LXRgNGFINGB0YPQvNC80LDRgNC90L7QuSDQt9Cw0LPRgNGD0LfQutC4JyxcclxuICAgIGZ1bGxuYW1lOiAn0JjQstCw0L3QvtCyINCY0LLQsNC9INCf0LXRgtGA0L7QstC40YcnLFxyXG4gICAgcmVjcnVpdGVyQ29udGFjdHM6ICfQutC+0L3RgtCw0LrRgtGLINGA0LXQutGA0YPRgtC10YDQsCcsXHJcbiAgICByZXN1bWVSZXZpZXdlZDogJ9Cg0LDRgdGB0LzQvtGC0YDQtdC90L4g0YDQtdC30Y7QvNC1IDEnLFxyXG4gICAgcmVzdW1lU2VudFRvQ3VzdG9tZXI6ICfQoNC10LfRjtC80LUg0L3QsNC/0YDQsNCy0LvQtdC90L4g0LfQsNC60LDQt9GH0LjQutGDINC90LAg0YDQsNGB0YHQvNC+0YLRgNC10L3QuNC1IDEnLFxyXG4gICAgaW50ZXJ2aWV3V2l0aFRoZUN1c3RvbWVyV2FzQ29uZHVjdGVkOiAn0J/RgNC+0LLQtdC00LXQvdC+INC40L3RgtC10YDQstGM0Y4g0YEg0LfQsNC60LDQt9GH0LjQutC+0LwgMScsXHJcbiAgICBjaGVja1NCOiAn0J/RgNC+0LLQtdGA0LrQsCDQodCRIDEnLFxyXG4gICAgb2ZmZXI6ICfQntGE0YTQtdGAIDEnLFxyXG4gICAgZW1wbG95ZWQ6ICfQotGA0YPQtNC+0YPRgdGC0YDQvtC10L3RiyAxJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGRhdGU6ICcyMi4wNy4yMDIxJyxcclxuICAgIHZhY2FuY3k6ICfQstCw0LrQsNC90YHQuNGPIDEnLFxyXG4gICAgc3RhdHVzOiAn0J/RgNC40L7RgdGC0LDQvdC+0LLQu9C10L3QsCcsXHJcbiAgICBmdWxsbmFtZTogJ9CY0LLQsNC90L7QsiDQmNCy0LDQvSDQmNCy0LDQvdC+0LLQuNGHJyxcclxuICAgIHJlY3J1aXRlckNvbnRhY3RzOiAn0LrQvtC90YLQsNC60YLRiyDRgNC10LrRgNGD0YLQtdGA0LAnLFxyXG4gICAgcmVzdW1lUmV2aWV3ZWQ6ICfQoNCw0YHRgdC80L7RgtGA0LXQvdC+INGA0LXQt9GO0LzQtSAxJyxcclxuICAgIHJlc3VtZVNlbnRUb0N1c3RvbWVyOiAn0KDQtdC30Y7QvNC1INC90LDQv9GA0LDQstC70LXQvdC+INC30LDQutCw0LfRh9C40LrRgyDQvdCwINGA0LDRgdGB0LzQvtGC0YDQtdC90LjQtSAxJyxcclxuICAgIGludGVydmlld1dpdGhUaGVDdXN0b21lcldhc0NvbmR1Y3RlZDogJ9Cf0YDQvtCy0LXQtNC10L3QviDQuNC90YLQtdGA0LLRjNGOINGBINC30LDQutCw0LfRh9C40LrQvtC8IDEnLFxyXG4gICAgY2hlY2tTQjogJ9Cf0YDQvtCy0LXRgNC60LAg0KHQkSAxJyxcclxuICAgIG9mZmVyOiAn0J7RhNGE0LXRgCAxJyxcclxuICAgIGVtcGxveWVkOiAn0KLRgNGD0LTQvtGD0YHRgtGA0L7QtdC90YsgMScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBkYXRlOiAnMjIuMDcuMjAxMicsXHJcbiAgICB2YWNhbmN5OiAn0LLQsNC60LDQvdGB0LjRjyAyJyxcclxuICAgIHN0YXR1czogJ9Cf0YDQuNC+0YHRgtCw0L3QvtCy0LvQtdC90LAnLFxyXG4gICAgZnVsbG5hbWU6ICfQmNCy0LDQvdC+0LIg0JjQstCw0L0g0J/QtdGC0YDQvtCy0LjRhycsXHJcbiAgICByZWNydWl0ZXJDb250YWN0czogJ9C60L7QvdGC0LDQutGC0Ysg0YDQtdC60YDRg9GC0LXRgNCwJyxcclxuICAgIHJlc3VtZVJldmlld2VkOiAn0KDQsNGB0YHQvNC+0YLRgNC10L3QviDRgNC10LfRjtC80LUgMScsXHJcbiAgICByZXN1bWVTZW50VG9DdXN0b21lcjogJ9Cg0LXQt9GO0LzQtSDQvdCw0L/RgNCw0LLQu9C10L3QviDQt9Cw0LrQsNC30YfQuNC60YMg0L3QsCDRgNCw0YHRgdC80L7RgtGA0LXQvdC40LUgMScsXHJcbiAgICBpbnRlcnZpZXdXaXRoVGhlQ3VzdG9tZXJXYXNDb25kdWN0ZWQ6ICfQn9GA0L7QstC10LTQtdC90L4g0LjQvdGC0LXRgNCy0YzRjiDRgSDQt9Cw0LrQsNC30YfQuNC60L7QvCAxJyxcclxuICAgIGNoZWNrU0I6ICfQn9GA0L7QstC10YDQutCwINCh0JEgMScsXHJcbiAgICBvZmZlcjogJ9Ce0YTRhNC10YAgMScsXHJcbiAgICBlbXBsb3llZDogJ9Ci0YDRg9C00L7Rg9GB0YLRgNC+0LXQvdGLIDEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgZGF0ZTogJzIyLjA3LjIwMjEnLFxyXG4gICAgdmFjYW5jeTogJ9Cy0LDQutCw0L3RgdC40Y8gMScsXHJcbiAgICBzdGF0dXM6ICfQn9GA0LjQvtGB0YLQsNC90L7QstC70LXQvdCwJyxcclxuICAgIGZ1bGxuYW1lOiAn0JjQstCw0L3QvtCyINCY0LLQsNC9INCY0LLQsNC90L7QstC40YcnLFxyXG4gICAgcmVjcnVpdGVyQ29udGFjdHM6ICfQutC+0L3RgtCw0LrRgtGLINGA0LXQutGA0YPRgtC10YDQsCcsXHJcbiAgICByZXN1bWVSZXZpZXdlZDogJ9Cg0LDRgdGB0LzQvtGC0YDQtdC90L4g0YDQtdC30Y7QvNC1IDEnLFxyXG4gICAgcmVzdW1lU2VudFRvQ3VzdG9tZXI6ICfQoNC10LfRjtC80LUg0L3QsNC/0YDQsNCy0LvQtdC90L4g0LfQsNC60LDQt9GH0LjQutGDINC90LAg0YDQsNGB0YHQvNC+0YLRgNC10L3QuNC1IDEnLFxyXG4gICAgaW50ZXJ2aWV3V2l0aFRoZUN1c3RvbWVyV2FzQ29uZHVjdGVkOiAn0J/RgNC+0LLQtdC00LXQvdC+INC40L3RgtC10YDQstGM0Y4g0YEg0LfQsNC60LDQt9GH0LjQutC+0LwgMScsXHJcbiAgICBjaGVja1NCOiAn0J/RgNC+0LLQtdGA0LrQsCDQodCRIDEnLFxyXG4gICAgb2ZmZXI6ICfQntGE0YTQtdGAIDEnLFxyXG4gICAgZW1wbG95ZWQ6ICfQotGA0YPQtNC+0YPRgdGC0YDQvtC10L3RiyAxJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGRhdGU6ICcyMi4wNy4yMDEyJyxcclxuICAgIHZhY2FuY3k6ICfQstCw0LrQsNC90YHQuNGPIDInLFxyXG4gICAgc3RhdHVzOiAn0J/RgNC40L7RgdGC0LDQvdC+0LLQu9C10L3QsCcsXHJcbiAgICBmdWxsbmFtZTogJ9CY0LLQsNC90L7QsiDQmNCy0LDQvSDQn9C10YLRgNC+0LLQuNGHJyxcclxuICAgIHJlY3J1aXRlckNvbnRhY3RzOiAn0LrQvtC90YLQsNC60YLRiyDRgNC10LrRgNGD0YLQtdGA0LAnLFxyXG4gICAgcmVzdW1lUmV2aWV3ZWQ6ICfQoNCw0YHRgdC80L7RgtGA0LXQvdC+INGA0LXQt9GO0LzQtSAxJyxcclxuICAgIHJlc3VtZVNlbnRUb0N1c3RvbWVyOiAn0KDQtdC30Y7QvNC1INC90LDQv9GA0LDQstC70LXQvdC+INC30LDQutCw0LfRh9C40LrRgyDQvdCwINGA0LDRgdGB0LzQvtGC0YDQtdC90LjQtSAxJyxcclxuICAgIGludGVydmlld1dpdGhUaGVDdXN0b21lcldhc0NvbmR1Y3RlZDogJ9Cf0YDQvtCy0LXQtNC10L3QviDQuNC90YLQtdGA0LLRjNGOINGBINC30LDQutCw0LfRh9C40LrQvtC8IDEnLFxyXG4gICAgY2hlY2tTQjogJ9Cf0YDQvtCy0LXRgNC60LAg0KHQkSAxJyxcclxuICAgIG9mZmVyOiAn0J7RhNGE0LXRgCAxJyxcclxuICAgIGVtcGxveWVkOiAn0KLRgNGD0LTQvtGD0YHRgtGA0L7QtdC90YsgMScsXHJcbiAgfSxcclxuXTtcclxuIiwiZXhwb3J0IGludGVyZmFjZSBJRGF0YUJpZHMge1xyXG4gIGRhdGU6IHN0cmluZztcclxuICB2YWNhbmN5OiBzdHJpbmc7XHJcbiAgc3RhdHVzOiBzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBJU1RBVEVfT0ZfU09SVEVEX0JJRFMge1xyXG4gIGRhdGU6IGJvb2xlYW47XHJcbiAgdmFjYW5jeTogYm9vbGVhbjtcclxuICBzdGF0dXM6IGJvb2xlYW47XHJcbn1cclxuXHJcbmNvbnN0IFNUQVRFX09GX1NPUlRFRF9CSURTOiBJU1RBVEVfT0ZfU09SVEVEX0JJRFMgPSB7XHJcbiAgZGF0ZTogdHJ1ZSxcclxuICB2YWNhbmN5OiB0cnVlLFxyXG4gIHN0YXR1czogdHJ1ZSxcclxufTtcclxuXHJcbmxldCBkYXRhOiBJRGF0YUJpZHNbXSA9IFtdO1xyXG5cclxuLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JpZHMtc29ydC1kYXRlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbi8vICAgY3JlYXRlVGFibGVCaWRzKCkuZGF0YVNvcnQoJ2RhdGUnKTtcclxuLy8gfSk7XHJcbi8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiaWRzLXNvcnQtdmFjYW5jeScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4vLyAgIGNyZWF0ZVRhYmxlQmlkcygpLmRhdGFTb3J0KCd2YWNhbmN5Jyk7XHJcbi8vIH0pO1xyXG4vLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmlkcy1zb3J0LXN0YXR1cycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4vLyAgIGNyZWF0ZVRhYmxlQmlkcygpLmRhdGFTb3J0KCdzdGF0dXMnKTtcclxuLy8gfSk7XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlVGFibGVCaWRzID0gKCkgPT4ge1xyXG4gIGNvbnN0IGFkZE9uZUVsZW1Ub0RhdGEgPSAoc29tZURhdGE6IElEYXRhQmlkcykgPT4ge1xyXG4gICAgZGF0YS5wdXNoKHNvbWVEYXRhKTtcclxuICAgIHJlbmRlclRhYmxlQ29udGVudCgpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGFkZE1hbnlFbGVtc1RvRGF0YSA9IChzb21lRGF0YTogSURhdGFCaWRzW10pID0+IHtcclxuICAgIGRhdGEgPSBzb21lRGF0YTtcclxuICB9O1xyXG5cclxuICAvLyBjb25zdCBkYXRhU29ydCA9IChlbGVtOiBrZXlvZiBJRGF0YUJpZHMpID0+IHtcclxuICAvLyAgIGxldCBhcnJvd1NvcnQgPSBTVEFURV9PRl9TT1JURURfQklEU1tlbGVtXTtcclxuICAvLyAgIGlmIChhcnJvd1NvcnQgPT09IGZhbHNlKSB7XHJcbiAgLy8gICAgIFNUQVRFX09GX1NPUlRFRF9CSURTW2VsZW1dID0gdHJ1ZTtcclxuICAvLyAgIH0gZWxzZSB7XHJcbiAgLy8gICAgIFNUQVRFX09GX1NPUlRFRF9CSURTW2VsZW1dID0gZmFsc2U7XHJcbiAgLy8gICB9XHJcblxyXG4gIC8vIGRhdGEuc29ydCgoYTogSURhdGFCaWRzLCBiOiBJRGF0YUJpZHMpID0+IHtcclxuICAvLyAgIGlmIChhW2VsZW1dIDwgYltlbGVtXSkge1xyXG4gIC8vICAgICByZXR1cm4gYXJyb3dTb3J0ID09PSB0cnVlID8gLTEgOiAxO1xyXG4gIC8vICAgfVxyXG4gIC8vICAgaWYgKGFbZWxlbV0gPiBiW2VsZW1dKSB7XHJcbiAgLy8gICAgIHJldHVybiBhcnJvd1NvcnQgPT09IHRydWUgPyAxIDogLTE7XHJcbiAgLy8gICB9XHJcbiAgLy8gICByZXR1cm4gMDtcclxuICAvLyB9KTtcclxuXHJcbiAgLy8gcmVuZGVyVGFibGVDb250ZW50KCk7XHJcbiAgLy8gcmVuZGVyQXJyb3coKTtcclxuICAvLyB9O1xyXG5cclxuICBjb25zdCByZW5kZXJUYWJsZUNvbnRlbnQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBlbGVtT2ZUYWJsZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YWJsZS1iaWRzLmNvbnRlbnQnKTtcclxuICAgIGlmIChlbGVtT2ZUYWJsZUNvbnRhaW5lciAhPT0gbnVsbCkge1xyXG4gICAgICBlbGVtT2ZUYWJsZUNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkYXRhRWxlbXMgPSBkYXRhLm1hcCgoZWxlbTogSURhdGFCaWRzKSA9PiB7XHJcbiAgICAgIHJldHVybiBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgPHAgY2xhc3M9XCJjZWxsIGNlbGwtZGF0ZVwiPiR7ZWxlbS5kYXRlfTwvcD5cclxuICAgICAgICAgIDxwIGNsYXNzPVwiY2VsbFwiPjxhIGhyZWY9XCIke2VsZW0udmFjYW5jeX1cIj5saW5rPC9hPjwvcD5cclxuICAgICAgICAgIDxwIGNsYXNzPVwiY2VsbCBjZWxsLXN0YXR1c1wiPiR7ZWxlbS5zdGF0dXN9PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICBgO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgY29tYmluZWREYXRhRWxlbXMgPSBkYXRhRWxlbXMuam9pbignJyk7XHJcblxyXG4gICAgZWxlbU9mVGFibGVDb250YWluZXI/Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgY29tYmluZWREYXRhRWxlbXMpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlckFycm93ID0gKCkgPT4ge1xyXG4gICAgbGV0IGVsZW1zT2ZBcnJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgICcuZGVzY3JpcHRpb24tYmlkcy5yb3cgLmFycm93J1xyXG4gICAgKTtcclxuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhTVEFURV9PRl9TT1JURURfQklEUyk7XHJcblxyXG4gICAga2V5cy5mb3JFYWNoKChrZXksIGluZGV4KSA9PiB7XHJcbiAgICAgIGNvbnN0IHZhbHVlID0gU1RBVEVfT0ZfU09SVEVEX0JJRFNba2V5IGFzIGtleW9mIElTVEFURV9PRl9TT1JURURfQklEU107XHJcbiAgICAgIGVsZW1zT2ZBcnJvd1tpbmRleF0uY2xhc3NOYW1lID1cclxuICAgICAgICB2YWx1ZSA9PT0gdHJ1ZSA/ICdhcnJvdyBhcnJvdy11cCcgOiAnYXJyb3cgYXJyb3ctZG93bic7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcmVuZGVyVGFibGVDb250ZW50LFxyXG4gICAgLy8gZGF0YVNvcnQsXHJcbiAgICBkYXRhLFxyXG4gICAgcmVuZGVyQXJyb3csXHJcbiAgICBhZGRPbmVFbGVtVG9EYXRhLFxyXG4gICAgYWRkTWFueUVsZW1zVG9EYXRhLFxyXG4gIH07XHJcbn07XHJcblxyXG4vLyDQv9C10YDQstGL0LUg0LTQstCwINC80LXRgtC+0LTQsCDQvdGD0LbQvdGLINC00LvRjyDQvtGC0YDQuNGB0L7QstC60Lgg0YLQsNCx0LvQuNGG0YtcclxuLy8gY3JlYXRlVGFibGVCaWRzKCkucmVuZGVyVGFibGVDb250ZW50KCk7XHJcbi8vIGNyZWF0ZVRhYmxlQmlkcygpLnJlbmRlckFycm93KCk7XHJcblxyXG4vLyDRgtCw0Log0LzQvtC20L3QviDQtNC+0LHQsNCy0LjRgtGMINC+0LTQuNC9INGN0LvQtdC80LXQvdGCINCyINGC0LDQsdC70LjRhtGDXHJcbi8vIGNyZWF0ZVRhYmxlQmlkcygpLmFkZE9uZUVsZW1Ub0RhdGEoe1xyXG4vLyAgIGRhdGU6ICcwNy4wNy4yMDA3JyxcclxuLy8gICB2YWNhbmN5OiAn0JLQsNC60LDQvdGB0LjRjyA1JyxcclxuLy8gICBzdGF0dXM6ICfQodGC0LDRgtGD0YEgNCcsXHJcbi8vIH0pO1xyXG5cclxuLy8g0YLQsNC6INC80L7QttC90L4g0LjQt9C80LXQvdC40YLRjCDQtNCw0L3QvdGL0LUg0LIg0YLQsNCx0LvQuNGG0LVcclxuLy8gY3JlYXRlVGFibGUoKS5hZGRNYW55RWxlbXNUb0RhdGEoW0lEYXRhXSk7XHJcbiIsImV4cG9ydCBpbnRlcmZhY2UgSURhdGFWYWNhbmN5IHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgY2FuZGlkYXRlczogc3RyaW5nW107XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSURhdGFDYW5kaWRhdGVzIHtcclxuICB2YWNhbmN5OiBJRGF0YVZhY2FuY3k7XHJcbiAgZnVsbG5hbWU6IHN0cmluZztcclxuICBldmVudDogc3RyaW5nO1xyXG4gIHJlc3VtZTogc3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgSVNUQVRFX09GX1NPUlRFRF9DQU5ESURBVEVTIHtcclxuICB2YWNhbmN5OiBib29sZWFuO1xyXG4gIGZ1bGxuYW1lOiBib29sZWFuO1xyXG4gIGV2ZW50OiBib29sZWFuO1xyXG4gIHJlc3VtZTogYm9vbGVhbjtcclxufVxyXG5cclxuY29uc3QgU1RBVEVfT0ZfU09SVEVEX0NBTkRJREFURVM6IElTVEFURV9PRl9TT1JURURfQ0FORElEQVRFUyA9IHtcclxuICB2YWNhbmN5OiB0cnVlLFxyXG4gIGZ1bGxuYW1lOiB0cnVlLFxyXG4gIGV2ZW50OiB0cnVlLFxyXG4gIHJlc3VtZTogdHJ1ZSxcclxufTtcclxuXHJcbmxldCBkYXRhQ2FuZGlkYXRlczogSURhdGFDYW5kaWRhdGVzW10gPSBbXTtcclxuXHJcbi8vIGRvY3VtZW50XHJcbi8vICAgLmdldEVsZW1lbnRCeUlkKCdjYW5kaWRhdGVzLXNvcnQtZGF0ZScpXHJcbi8vICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4vLyAgICAgY3JlYXRlVGFibGVDYW5kaWRhdGVzKCkuZGF0YVNvcnQoJ3ZhY2FuY3knKTtcclxuLy8gICB9KTtcclxuLy8gZG9jdW1lbnRcclxuLy8gICAuZ2V0RWxlbWVudEJ5SWQoJ2NhbmRpZGF0ZXMtc29ydC1mdWxsbmFtZScpXHJcbi8vICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4vLyAgICAgY3JlYXRlVGFibGVDYW5kaWRhdGVzKCkuZGF0YVNvcnQoJ2Z1bGxuYW1lJyk7XHJcbi8vICAgfSk7XHJcbi8vIGRvY3VtZW50XHJcbi8vICAgLmdldEVsZW1lbnRCeUlkKCdjYW5kaWRhdGVzLXNvcnQtZXZlbnQnKVxyXG4vLyAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuLy8gICAgIGNyZWF0ZVRhYmxlQ2FuZGlkYXRlcygpLmRhdGFTb3J0KCdldmVudCcpO1xyXG4vLyAgIH0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZVRhYmxlQ2FuZGlkYXRlcyA9ICgpID0+IHtcclxuICBjb25zdCBhZGRPbmVFbGVtVG9EYXRhID0gKHNvbWVEYXRhOiBJRGF0YUNhbmRpZGF0ZXMpID0+IHtcclxuICAgIGRhdGFDYW5kaWRhdGVzLnB1c2goc29tZURhdGEpO1xyXG4gICAgcmVuZGVyVGFibGVDb250ZW50KCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYWRkTWFueUVsZW1zVG9EYXRhID0gKHNvbWVEYXRhOiBJRGF0YUNhbmRpZGF0ZXNbXSkgPT4ge1xyXG4gICAgZGF0YUNhbmRpZGF0ZXMgPSBzb21lRGF0YTtcclxuICB9O1xyXG5cclxuICAvLyBjb25zdCBkYXRhU29ydCA9IChlbGVtOiBrZXlvZiBJRGF0YUNhbmRpZGF0ZXMpID0+IHtcclxuICAvLyAgIGxldCBhcnJvd1NvcnQgPSBTVEFURV9PRl9TT1JURURfQ0FORElEQVRFU1tlbGVtXTtcclxuICAvLyAgIGlmIChhcnJvd1NvcnQgPT09IGZhbHNlKSB7XHJcbiAgLy8gICAgIFNUQVRFX09GX1NPUlRFRF9DQU5ESURBVEVTW2VsZW1dID0gdHJ1ZTtcclxuICAvLyAgIH0gZWxzZSB7XHJcbiAgLy8gICAgIFNUQVRFX09GX1NPUlRFRF9DQU5ESURBVEVTW2VsZW1dID0gZmFsc2U7XHJcbiAgLy8gICB9XHJcblxyXG4gIC8vICAgZGF0YUNhbmRpZGF0ZXMuc29ydCgoYTogSURhdGFDYW5kaWRhdGVzLCBiOiBJRGF0YUNhbmRpZGF0ZXMpID0+IHtcclxuICAvLyAgICAgLy8g0YHQvtGA0YLQuNGA0L7QstC60LAg0L/QviDQstCw0LrQsNC90YHQuNC4XHJcbiAgLy8gICAgIGlmIChlbGVtID09PSAndmFjYW5jeScpIHtcclxuICAvLyAgICAgICBpZiAoYVtlbGVtXS5uYW1lIDwgYltlbGVtXS5uYW1lKSB7XHJcbiAgLy8gICAgICAgICByZXR1cm4gYXJyb3dTb3J0ID09PSB0cnVlID8gLTEgOiAxO1xyXG4gIC8vICAgICAgIH1cclxuICAvLyAgICAgICBpZiAoYVtlbGVtXS5uYW1lID4gYltlbGVtXS5uYW1lKSB7XHJcbiAgLy8gICAgICAgICByZXR1cm4gYXJyb3dTb3J0ID09PSB0cnVlID8gMSA6IC0xO1xyXG4gIC8vICAgICAgIH1cclxuICAvLyAgICAgICByZXR1cm4gMDtcclxuICAvLyAgICAgfVxyXG5cclxuICAvLyAgICAgLy8g0YHQvtGA0YLQuNGA0L7QstC60LAg0L/QviDQstGB0LXQvCDQvtGB0YLQsNC70YzQvdGL0Lwg0L/QvtC70Y/QvFxyXG4gIC8vICAgICBpZiAoYVtlbGVtXSA8IGJbZWxlbV0pIHtcclxuICAvLyAgICAgICByZXR1cm4gYXJyb3dTb3J0ID09PSB0cnVlID8gLTEgOiAxO1xyXG4gIC8vICAgICB9XHJcbiAgLy8gICAgIGlmIChhW2VsZW1dID4gYltlbGVtXSkge1xyXG4gIC8vICAgICAgIHJldHVybiBhcnJvd1NvcnQgPT09IHRydWUgPyAxIDogLTE7XHJcbiAgLy8gICAgIH1cclxuICAvLyAgICAgcmV0dXJuIDA7XHJcbiAgLy8gICB9KTtcclxuXHJcbiAgLy8gICByZW5kZXJUYWJsZUNvbnRlbnQoKTtcclxuICAvLyAgIHJlbmRlckFycm93KCk7XHJcbiAgLy8gfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyVGFibGVDb250ZW50ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZWxlbU9mVGFibGVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAnLnRhYmxlLWNhbmRpZGF0ZXMuY29udGVudCdcclxuICAgICk7XHJcbiAgICBpZiAoZWxlbU9mVGFibGVDb250YWluZXIgIT09IG51bGwpIHtcclxuICAgICAgZWxlbU9mVGFibGVDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGF0YUVsZW1zID0gZGF0YUNhbmRpZGF0ZXMubWFwKChlbGVtOiBJRGF0YUNhbmRpZGF0ZXMpID0+IHtcclxuICAgICAgcmV0dXJuIGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VsbCB2YWNhbmN5LWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRlc2NyaWJlXCI+XHJcbiAgICAgICAgICAgICAgPHA+JHtlbGVtLnZhY2FuY3kubmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImltZy1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJpbWctbGlzdFwiIHNyYz1cIndlYnNvZnRfZWR1Y2F0aW9uL2dhenByb20vc3JjL2ltYWdlcy9saXN0LnBuZ1wiIGFsdD1cImxpc3RcIj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYW5kaWRhdGVzIGhpZGVcIj5cclxuICAgICAgICAgICAgICAke2VsZW0udmFjYW5jeS5jYW5kaWRhdGVzXHJcbiAgICAgICAgICAgICAgICAubWFwKChjYW5kaWRhdGUpID0+IGA8cD48YSBocmVmPVwiI1wiPiR7Y2FuZGlkYXRlfTwvYT48L3A+YClcclxuICAgICAgICAgICAgICAgIC5qb2luKCcnKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgPHAgY2xhc3M9XCJjZWxsXCI+JHtlbGVtLmZ1bGxuYW1lfTwvcD5cclxuICAgICAgICAgIDxwIGNsYXNzPVwiY2VsbCBjZWxsLWV2ZW50XCI+JHtlbGVtLmV2ZW50fTwvcD5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZWxsIHJlc3VtZS1jb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbWctY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9XCJ3ZWJzb2Z0X2VkdWNhdGlvbi9nYXpwcm9tL3NyYy9pbWFnZXMvZXllLnBuZ1wiIGFsdD1cImV5ZVwiPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImltZy1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIndlYnNvZnRfZWR1Y2F0aW9uL2dhenByb20vc3JjL2ltYWdlcy9kb3dubG9hZC5wbmdcIiBhbHQ9XCJkb3dubG9hZFwiPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICBgO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgY29tYmluZWREYXRhRWxlbXMgPSBkYXRhRWxlbXMuam9pbignJyk7XHJcblxyXG4gICAgZWxlbU9mVGFibGVDb250YWluZXI/Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgY29tYmluZWREYXRhRWxlbXMpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlckFycm93ID0gKCkgPT4ge1xyXG4gICAgbGV0IGVsZW1zT2ZBcnJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXHJcbiAgICAgICcuZGVzY3JpcHRpb24tY2FuZGlkYXRlcy5yb3cgLmFycm93J1xyXG4gICAgKTtcclxuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhTVEFURV9PRl9TT1JURURfQ0FORElEQVRFUyk7XHJcblxyXG4gICAga2V5cy5mb3JFYWNoKChrZXksIGluZGV4KSA9PiB7XHJcbiAgICAgIGlmIChpbmRleCA+IDIpIHJldHVybjtcclxuICAgICAgY29uc3QgdmFsdWUgPVxyXG4gICAgICAgIFNUQVRFX09GX1NPUlRFRF9DQU5ESURBVEVTW2tleSBhcyBrZXlvZiBJU1RBVEVfT0ZfU09SVEVEX0NBTkRJREFURVNdO1xyXG4gICAgICBlbGVtc09mQXJyb3dbaW5kZXhdLmNsYXNzTmFtZSA9XHJcbiAgICAgICAgdmFsdWUgPT09IHRydWUgPyAnYXJyb3cgYXJyb3ctdXAnIDogJ2Fycm93IGFycm93LWRvd24nO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHJlbmRlclRhYmxlQ29udGVudCxcclxuICAgIC8vIGRhdGFTb3J0LFxyXG4gICAgZGF0YUNhbmRpZGF0ZXMsXHJcbiAgICByZW5kZXJBcnJvdyxcclxuICAgIGFkZE9uZUVsZW1Ub0RhdGEsXHJcbiAgICBhZGRNYW55RWxlbXNUb0RhdGEsXHJcbiAgfTtcclxufTtcclxuXHJcbi8vINC/0LXRgNCy0YvQtSDQtNCy0LAg0LzQtdGC0L7QtNCwINC90YPQttC90Ysg0LTQu9GPINC+0YLRgNC40YHQvtCy0LrQuCDRgtCw0LHQu9C40YbRi1xyXG4vLyBjcmVhdGVUYWJsZUNhbmRpZGF0ZXMoKS5yZW5kZXJUYWJsZUNvbnRlbnQoKTtcclxuLy8gY3JlYXRlVGFibGVDYW5kaWRhdGVzKCkucmVuZGVyQXJyb3coKTtcclxuLy8gY3JlYXRlVGFibGVDYW5kaWRhdGVzKCkuZGF0YVNvcnQoJ3ZhY2FuY3knKTtcclxuXHJcbi8vINGC0LDQuiDQvNC+0LbQvdC+INC00L7QsdCw0LLQuNGC0Ywg0L7QtNC40L0g0Y3Qu9C10LzQtdC90YIg0LIg0YLQsNCx0LvQuNGG0YNcclxuLy8gY3JlYXRlVGFibGVDYW5kaWRhdGVzKCkuYWRkT25lRWxlbVRvRGF0YSh7XHJcbi8vICAgdmFjYW5jeTogJ9CS0LDQutCw0L3RgdC40Y8gMScsXHJcbi8vICAgICBmdWxsbmFtZTogJ9CY0LLQsNC90L7QsiDQmNCy0LDQvSDQmNCy0LDQvdC+0LLQuNGHJyxcclxuLy8gICAgIGV2ZW50OiAnZXZlbnQgMScsXHJcbi8vICAgICByZXN1bWU6ICdyZXN1bWUgMScsXHJcbi8vICAgICBzaG93RmlsZTogJ3Nob3dGaWxlIDEnLFxyXG4vLyAgICAgZG93bmxvYWRGaWxlOiAnZG93bmxvYWRGaWxlIDEnLFxyXG4vLyB9KTtcclxuXHJcbi8vINGC0LDQuiDQvNC+0LbQvdC+INC30LrQvNC10L3QuNGC0Ywg0LTQsNC90L3Ri9C1INCyINGC0LDQsdC70LjRhtC1XHJcbi8vIGNyZWF0ZVRhYmxlKCkuYWRkTWFueUVsZW1zVG9EYXRhKFtJRGF0YV0pO1xyXG4vL1xyXG4iLCJleHBvcnQgaW50ZXJmYWNlIElEYXRhVmFjYW5jeSB7XHJcbiAgZGF0ZTogc3RyaW5nO1xyXG4gIHZhY2FuY3k6IHN0cmluZztcclxuICBzdGF0dXM6IHN0cmluZztcclxuICBmdWxsbmFtZTogc3RyaW5nO1xyXG4gIHJlY3J1aXRlckNvbnRhY3RzOiBzdHJpbmc7XHJcbiAgcmVzdW1lUmV2aWV3ZWQ6IHN0cmluZztcclxuICByZXN1bWVTZW50VG9DdXN0b21lcjogc3RyaW5nO1xyXG4gIGludGVydmlld1dpdGhUaGVDdXN0b21lcldhc0NvbmR1Y3RlZDogc3RyaW5nO1xyXG4gIGNoZWNrU0I6IHN0cmluZztcclxuICBvZmZlcjogc3RyaW5nO1xyXG4gIGVtcGxveWVkOiBzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBJU1RBVEVfT0ZfU09SVEVEX1ZBQ0FOQ1kge1xyXG4gIGRhdGU6IGJvb2xlYW47XHJcbiAgdmFjYW5jeTogYm9vbGVhbjtcclxuICBzdGF0dXM6IGJvb2xlYW47XHJcbiAgZnVsbG5hbWU6IGJvb2xlYW47XHJcbiAgcmVjcnVpdGVyQ29udGFjdHM6IGJvb2xlYW47XHJcbiAgcmVzdW1lUmV2aWV3ZWQ6IGJvb2xlYW47XHJcbiAgcmVzdW1lU2VudFRvQ3VzdG9tZXI6IGJvb2xlYW47XHJcbiAgaW50ZXJ2aWV3V2l0aFRoZUN1c3RvbWVyV2FzQ29uZHVjdGVkOiBib29sZWFuO1xyXG4gIGNoZWNrU0I6IGJvb2xlYW47XHJcbiAgb2ZmZXI6IGJvb2xlYW47XHJcbiAgZW1wbG95ZWQ6IGJvb2xlYW47XHJcbn1cclxuXHJcbmNvbnN0IFNUQVRFX09GX1NPUlRFRF9WQUNBTkNZOiBJU1RBVEVfT0ZfU09SVEVEX1ZBQ0FOQ1kgPSB7XHJcbiAgZGF0ZTogdHJ1ZSxcclxuICB2YWNhbmN5OiB0cnVlLFxyXG4gIHN0YXR1czogdHJ1ZSxcclxuICBmdWxsbmFtZTogdHJ1ZSxcclxuICByZWNydWl0ZXJDb250YWN0czogdHJ1ZSxcclxuICByZXN1bWVSZXZpZXdlZDogdHJ1ZSxcclxuICByZXN1bWVTZW50VG9DdXN0b21lcjogdHJ1ZSxcclxuICBpbnRlcnZpZXdXaXRoVGhlQ3VzdG9tZXJXYXNDb25kdWN0ZWQ6IHRydWUsXHJcbiAgY2hlY2tTQjogdHJ1ZSxcclxuICBvZmZlcjogdHJ1ZSxcclxuICBlbXBsb3llZDogdHJ1ZSxcclxufTtcclxuXHJcbmxldCBkYXRhVmFjYW5jeTogSURhdGFWYWNhbmN5W10gPSBbXTtcclxuXHJcbi8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2YWNhbmN5LXNvcnQtZGF0ZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4vLyAgIGNyZWF0ZVRhYmxlVmFjYW5jeSgpLmRhdGFTb3J0KCdkYXRlJyk7XHJcbi8vIH0pO1xyXG4vLyBkb2N1bWVudFxyXG4vLyAgIC5nZXRFbGVtZW50QnlJZCgndmFjYW5jeS1zb3J0LXZhY2FuY3knKVxyXG4vLyAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuLy8gICAgIGNyZWF0ZVRhYmxlVmFjYW5jeSgpLmRhdGFTb3J0KCd2YWNhbmN5Jyk7XHJcbi8vICAgfSk7XHJcbi8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2YWNhbmN5LXNvcnQtc3RhdHVzJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbi8vICAgY3JlYXRlVGFibGVWYWNhbmN5KCkuZGF0YVNvcnQoJ3N0YXR1cycpO1xyXG4vLyB9KTtcclxuLy8gZG9jdW1lbnRcclxuLy8gICAuZ2V0RWxlbWVudEJ5SWQoJ3ZhY2FuY3ktc29ydC1mdWxsbmFtZScpXHJcbi8vICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4vLyAgICAgY3JlYXRlVGFibGVWYWNhbmN5KCkuZGF0YVNvcnQoJ2Z1bGxuYW1lJyk7XHJcbi8vICAgfSk7XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlVGFibGVWYWNhbmN5ID0gKCkgPT4ge1xyXG4gIGNvbnN0IGFkZE9uZUVsZW1Ub0RhdGEgPSAoc29tZURhdGE6IElEYXRhVmFjYW5jeSkgPT4ge1xyXG4gICAgZGF0YVZhY2FuY3kucHVzaChzb21lRGF0YSk7XHJcbiAgICByZW5kZXJUYWJsZUNvbnRlbnQoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBhZGRNYW55RWxlbXNUb0RhdGEgPSAoc29tZURhdGE6IElEYXRhVmFjYW5jeVtdKSA9PiB7XHJcbiAgICBkYXRhVmFjYW5jeSA9IHNvbWVEYXRhO1xyXG4gIH07XHJcblxyXG4gIC8vIGNvbnN0IGRhdGFTb3J0ID0gKGVsZW06IGtleW9mIElEYXRhVmFjYW5jeSkgPT4ge1xyXG4gIC8vICAgbGV0IGFycm93U29ydCA9IFNUQVRFX09GX1NPUlRFRF9WQUNBTkNZW2VsZW1dO1xyXG4gIC8vICAgaWYgKGFycm93U29ydCA9PT0gZmFsc2UpIHtcclxuICAvLyAgICAgU1RBVEVfT0ZfU09SVEVEX1ZBQ0FOQ1lbZWxlbV0gPSB0cnVlO1xyXG4gIC8vICAgfSBlbHNlIHtcclxuICAvLyAgICAgU1RBVEVfT0ZfU09SVEVEX1ZBQ0FOQ1lbZWxlbV0gPSBmYWxzZTtcclxuICAvLyAgIH1cclxuXHJcbiAgLy8gICBkYXRhVmFjYW5jeS5zb3J0KChhOiBJRGF0YVZhY2FuY3ksIGI6IElEYXRhVmFjYW5jeSkgPT4ge1xyXG4gIC8vICAgICBpZiAoYVtlbGVtXSA8IGJbZWxlbV0pIHtcclxuICAvLyAgICAgICByZXR1cm4gYXJyb3dTb3J0ID09PSB0cnVlID8gLTEgOiAxO1xyXG4gIC8vICAgICB9XHJcbiAgLy8gICAgIGlmIChhW2VsZW1dID4gYltlbGVtXSkge1xyXG4gIC8vICAgICAgIHJldHVybiBhcnJvd1NvcnQgPT09IHRydWUgPyAxIDogLTE7XHJcbiAgLy8gICAgIH1cclxuICAvLyAgICAgcmV0dXJuIDA7XHJcbiAgLy8gICB9KTtcclxuXHJcbiAgLy8gICByZW5kZXJUYWJsZUNvbnRlbnQoKTtcclxuICAvLyAgIHJlbmRlckFycm93KCk7XHJcbiAgLy8gfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyVGFibGVDb250ZW50ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZWxlbU9mVGFibGVDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICAnLnRhYmxlLXZhY2FuY3kuY29udGVudCdcclxuICAgICk7XHJcbiAgICBpZiAoZWxlbU9mVGFibGVDb250YWluZXIgIT09IG51bGwpIHtcclxuICAgICAgZWxlbU9mVGFibGVDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGF0YUVsZW1zID0gZGF0YVZhY2FuY3kubWFwKChlbGVtOiBJRGF0YVZhY2FuY3kpID0+IHtcclxuICAgICAgcmV0dXJuIGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICA8cCBjbGFzcz1cImNlbGwgY2VsbC1kYXRlXCI+JHtlbGVtLmRhdGV9PC9wPlxyXG4gICAgICAgICAgPHAgY2xhc3M9XCJjZWxsXCI+JHtlbGVtLnZhY2FuY3l9PC9wPlxyXG4gICAgICAgICAgPHAgY2xhc3M9XCJjZWxsIGNlbGwtc3RhdHVzXCI+JHtlbGVtLnN0YXR1c308L3A+XHJcbiAgICAgICAgICA8cCBjbGFzcz1cImNlbGxcIj4ke2VsZW0uZnVsbG5hbWV9PC9wPlxyXG4gICAgICAgICAgPHAgY2xhc3M9XCJjZWxsXCI+JHtlbGVtLnJlY3J1aXRlckNvbnRhY3RzfTwvcD5cclxuICAgICAgICAgIDxwIGNsYXNzPVwiY2VsbFwiPiR7ZWxlbS5yZXN1bWVSZXZpZXdlZH08L3A+XHJcbiAgICAgICAgICA8cCBjbGFzcz1cImNlbGxcIj4ke2VsZW0ucmVzdW1lU2VudFRvQ3VzdG9tZXJ9PC9wPlxyXG4gICAgICAgICAgPHAgY2xhc3M9XCJjZWxsXCI+JHtlbGVtLmludGVydmlld1dpdGhUaGVDdXN0b21lcldhc0NvbmR1Y3RlZH08L3A+XHJcbiAgICAgICAgICA8cCBjbGFzcz1cImNlbGxcIj4ke2VsZW0uY2hlY2tTQn08L3A+XHJcbiAgICAgICAgICA8cCBjbGFzcz1cImNlbGxcIj4ke2VsZW0ub2ZmZXJ9PC9wPlxyXG4gICAgICAgICAgPHAgY2xhc3M9XCJjZWxsXCI+JHtlbGVtLmVtcGxveWVkfTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgYDtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGNvbWJpbmVkRGF0YUVsZW1zID0gZGF0YUVsZW1zLmpvaW4oJycpO1xyXG5cclxuICAgIGVsZW1PZlRhYmxlQ29udGFpbmVyPy5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGNvbWJpbmVkRGF0YUVsZW1zKTtcclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJBcnJvdyA9ICgpID0+IHtcclxuICAgIGxldCBlbGVtc09mQXJyb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICAnLmRlc2NyaXB0aW9uLXZhY2FuY3kucm93IC5hcnJvdydcclxuICAgICk7XHJcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoU1RBVEVfT0ZfU09SVEVEX1ZBQ0FOQ1kpO1xyXG5cclxuICAgIGtleXMuZm9yRWFjaCgoa2V5LCBpbmRleCkgPT4ge1xyXG4gICAgICBpZiAoaW5kZXggPiAzKSByZXR1cm47XHJcbiAgICAgIGNvbnN0IHZhbHVlID1cclxuICAgICAgICBTVEFURV9PRl9TT1JURURfVkFDQU5DWVtrZXkgYXMga2V5b2YgSVNUQVRFX09GX1NPUlRFRF9WQUNBTkNZXTtcclxuICAgICAgZWxlbXNPZkFycm93W2luZGV4XS5jbGFzc05hbWUgPVxyXG4gICAgICAgIHZhbHVlID09PSB0cnVlID8gJ2Fycm93IGFycm93LXVwJyA6ICdhcnJvdyBhcnJvdy1kb3duJztcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICByZW5kZXJUYWJsZUNvbnRlbnQsXHJcbiAgICAvLyBkYXRhU29ydCxcclxuICAgIGRhdGFWYWNhbmN5LFxyXG4gICAgcmVuZGVyQXJyb3csXHJcbiAgICBhZGRPbmVFbGVtVG9EYXRhLFxyXG4gICAgYWRkTWFueUVsZW1zVG9EYXRhLFxyXG4gIH07XHJcbn07XHJcblxyXG4vLyDQv9C10YDQstGL0LUg0LTQstCwINC80LXRgtC+0LTQsCDQvdGD0LbQvdGLINC00LvRjyDQvtGC0YDQuNGB0L7QstC60Lgg0YLQsNCx0LvQuNGG0YtcclxuLy8gY3JlYXRlVGFibGVWYWNhbmN5KCkucmVuZGVyVGFibGVDb250ZW50KCk7XHJcbi8vIGNyZWF0ZVRhYmxlVmFjYW5jeSgpLnJlbmRlckFycm93KCk7XHJcblxyXG4vLyAvLyDQvtGC0YHQvtGA0YLQuNGA0YPQtdC8INC/0L4g0LTQsNGC0LVcclxuLy8gY3JlYXRlVGFibGVWYWNhbmN5KCkuZGF0YVNvcnQoJ2RhdGUnKTtcclxuLy8gY3JlYXRlVGFibGVWYWNhbmN5KCkuZGF0YVNvcnQoJ2RhdGUnKTtcclxuXHJcbi8vINGC0LDQuiDQvNC+0LbQvdC+INC00L7QsdCw0LLQuNGC0Ywg0L7QtNC40L0g0Y3Qu9C10LzQtdC90YIg0LIg0YLQsNCx0LvQuNGG0YNcclxuLy8gY3JlYXRlVGFibGVWYWNhbmN5KCkuYWRkT25lRWxlbVRvRGF0YSh7XHJcbi8vIGRhdGU6ICcyMi4wNy4yMDEyJyxcclxuLy8gdmFjYW5jeTogJ9Cy0LDQutCw0L3RgdC40Y8gMicsXHJcbi8vIHN0YXR1czogJ9GB0YLQsNGC0YPRgSAyJyxcclxuLy8gZnVsbG5hbWU6ICfQmNCy0LDQvdC+0LIg0JjQstCw0L0g0J/QtdGC0YDQvtCy0LjRhycsXHJcbi8vIHJlY3J1aXRlckNvbnRhY3RzOiAn0LrQvtC90YLQsNC60YLRiyDRgNC10LrRgNGD0YLQtdGA0LAnLFxyXG4vLyByZXN1bWVSZXZpZXdlZDogJ9Cg0LDRgdGB0LzQvtGC0YDQtdC90L4g0YDQtdC30Y7QvNC1IDEnLFxyXG4vLyByZXN1bWVTZW50VG9DdXN0b21lcjogJ9Cg0LXQt9GO0LzQtSDQvdCw0L/RgNCw0LLQu9C10L3QviDQt9Cw0LrQsNC30YfQuNC60YMg0L3QsCDRgNCw0YHRgdC80L7RgtGA0LXQvdC40LUgMScsXHJcbi8vIGludGVydmlld1dpdGhUaGVDdXN0b21lcldhc0NvbmR1Y3RlZDogJ9Cf0YDQvtCy0LXQtNC10L3QviDQuNC90YLQtdGA0LLRjNGOINGBINC30LDQutCw0LfRh9C40LrQvtC8IDEnLFxyXG4vLyBjaGVja1NCOiAn0J/RgNC+0LLQtdGA0LrQsCDQodCRIDEnLFxyXG4vLyBvZmZlcjogJ9Ce0YTRhNC10YAgMScsXHJcbi8vIGVtcGxveWVkOiAn0KLRgNGD0LTQvtGD0YHRgtGA0L7QtdC90YsgMScsXHJcbi8vIH0pO1xyXG5cclxuLy8g0YLQsNC6INC80L7QttC90L4g0LfQutC80LXQvdC40YLRjCDQtNCw0L3QvdGL0LUg0LIg0YLQsNCx0LvQuNGG0LVcclxuLy8gY3JlYXRlVGFibGUoKS5hZGRNYW55RWxlbXNUb0RhdGEoW0lEYXRhVmFjYW5jeV0pO1xyXG4vL1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiaW1wb3J0IHsgY3JlYXRlVGFibGVCaWRzIH0gZnJvbSAnLi90cy90YWJsZS1iaWRzJztcclxuaW1wb3J0IHsgY3JlYXRlVGFibGVDYW5kaWRhdGVzIH0gZnJvbSAnLi90cy90YWJsZS1jYW5kaWRhdGVzJztcclxuaW1wb3J0IHsgY3JlYXRlVGFibGVWYWNhbmN5IH0gZnJvbSAnLi90cy90YWJsZS12YWNhbmN5JztcclxuXHJcbmltcG9ydCB7IGRhdGFCaWRzLCBkYXRhQ2FuZGlkYXRlcywgZGF0YVZhY2FuY3kgfSBmcm9tICcuL3RzL2RhdGEnO1xyXG5cclxuY29uc3QgaW5pdFRhYmxlID0gKCkgPT4ge1xyXG4gIC8vINGC0LDQsdC70LjRhtCwINGBINC30LDRj9Cy0LrQsNC80LhcclxuICAvLyDQt9Cw0L/QvtC70L3QuNGC0Ywg0YLQsNCx0LvQuNGG0YMg0LTQsNC90L3Ri9C80LhcclxuICBjcmVhdGVUYWJsZUJpZHMoKS5hZGRNYW55RWxlbXNUb0RhdGEoZGF0YUJpZHMpO1xyXG4gIC8vINC+0YLRgNC40YHQvtCy0LDRgtGMINGC0LDQsdC70LjRhtGDXHJcbiAgY3JlYXRlVGFibGVCaWRzKCkucmVuZGVyVGFibGVDb250ZW50KCk7XHJcbiAgLy8g0L7RgtGA0LjRgdC+0LLQsNGC0Ywg0YHRgtGA0LXQu9C60Lgg0YHQvtGA0YLQuNGA0L7QstC60LhcclxuICBjcmVhdGVUYWJsZUJpZHMoKS5yZW5kZXJBcnJvdygpO1xyXG5cclxuICAvLyDQvtGC0YHQvtGA0YLQuNGA0YPQtdC8INC/0L4g0LTQsNGC0LVcclxuICAvLyBjcmVhdGVUYWJsZUJpZHMoKS5kYXRhU29ydCgnZGF0ZScpO1xyXG4gIC8vIGNyZWF0ZVRhYmxlQmlkcygpLmRhdGFTb3J0KCdkYXRlJyk7XHJcblxyXG4gIC8vINGC0LDQsdC70LjRhtCwINGBINCy0LDQutCw0L3RgdC40Y/QvNC4XHJcbiAgY3JlYXRlVGFibGVWYWNhbmN5KCkuYWRkTWFueUVsZW1zVG9EYXRhKGRhdGFWYWNhbmN5KTtcclxuICBjcmVhdGVUYWJsZVZhY2FuY3koKS5yZW5kZXJUYWJsZUNvbnRlbnQoKTtcclxuICBjcmVhdGVUYWJsZVZhY2FuY3koKS5yZW5kZXJBcnJvdygpO1xyXG5cclxuICAvLyDQvtGC0YHQvtGA0YLQuNGA0YPQtdC8INC/0L4g0LTQsNGC0LVcclxuICAvLyBjcmVhdGVUYWJsZVZhY2FuY3koKS5kYXRhU29ydCgnZGF0ZScpO1xyXG4gIC8vIGNyZWF0ZVRhYmxlVmFjYW5jeSgpLmRhdGFTb3J0KCdkYXRlJyk7XHJcblxyXG4gIC8vINGC0LDQsdC70LjRhtCwINGBINC60LDQvdC00LjQtNCw0YLQsNC80LhcclxuICBjcmVhdGVUYWJsZUNhbmRpZGF0ZXMoKS5hZGRNYW55RWxlbXNUb0RhdGEoZGF0YUNhbmRpZGF0ZXMpO1xyXG4gIGNyZWF0ZVRhYmxlQ2FuZGlkYXRlcygpLnJlbmRlclRhYmxlQ29udGVudCgpO1xyXG4gIGNyZWF0ZVRhYmxlQ2FuZGlkYXRlcygpLnJlbmRlckFycm93KCk7XHJcblxyXG4gIC8vINC+0YLRgdC+0YDRgtC40YDRg9C10Lwg0L/QviDQstCw0LrQsNC90YHQuNC4XHJcbiAgLy8gY3JlYXRlVGFibGVDYW5kaWRhdGVzKCkuZGF0YVNvcnQoJ3ZhY2FuY3knKTtcclxufTtcclxuXHJcbmluaXRUYWJsZSgpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=