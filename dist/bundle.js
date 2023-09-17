/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ts/data.ts":
/*!************************!*\
  !*** ./src/ts/data.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dataBids: () => (/* binding */ dataBids),
/* harmony export */   dataCandidates: () => (/* binding */ dataCandidates)
/* harmony export */ });
var dataBids = [
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
var dataCandidates = [
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


/***/ }),

/***/ "./src/ts/table-bids.ts":
/*!******************************!*\
  !*** ./src/ts/table-bids.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTableBids: () => (/* binding */ createTableBids)
/* harmony export */ });
var STATE_OF_SORTED_BIDS = {
    date: true,
    vacancy: true,
    status: true,
};
var data = [];
document.getElementById('bids-sort-date').addEventListener('click', function () {
    createTableBids().dataSort('date');
});
document.getElementById('bids-sort-vacancy').addEventListener('click', function () {
    createTableBids().dataSort('vacancy');
});
document.getElementById('bids-sort-status').addEventListener('click', function () {
    createTableBids().dataSort('status');
});
var createTableBids = function () {
    var addOneElemToData = function (someData) {
        data.push(someData);
        renderTableContent();
    };
    var addManyElemsToData = function (someData) {
        data = someData;
    };
    var dataSort = function (elem) {
        var arrowSort = STATE_OF_SORTED_BIDS[elem];
        if (arrowSort === false) {
            STATE_OF_SORTED_BIDS[elem] = true;
        }
        else {
            STATE_OF_SORTED_BIDS[elem] = false;
        }
        data.sort(function (a, b) {
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
    var renderTableContent = function () {
        var elemOfTableContainer = document.querySelector('.table-bids.content');
        if (elemOfTableContainer !== null) {
            elemOfTableContainer.innerHTML = '';
        }
        var dataElems = data.map(function (elem) {
            return "\n        <div class=\"row\">\n          <p class=\"cell\">".concat(elem.date, "</p>\n          <p class=\"cell\"><a href=\"").concat(elem.vacancy, "\">link</a></p>\n          <p class=\"cell\">").concat(elem.status, "</p>\n        </div>\n      ");
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
        dataSort: dataSort,
        data: data,
        renderArrow: renderArrow,
        addOneElemToData: addOneElemToData,
        addManyElemsToData: addManyElemsToData,
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


/***/ }),

/***/ "./src/ts/table-candidates.ts":
/*!************************************!*\
  !*** ./src/ts/table-candidates.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTableCandidates: () => (/* binding */ createTableCandidates)
/* harmony export */ });
var STATE_OF_SORTED_CANDIDATES = {
    vacancy: true,
    fullname: true,
    event: true,
    resume: true,
    showFile: true,
    downloadFile: true,
};
var dataCandidates = [];
document
    .getElementById('candidates-sort-date')
    .addEventListener('click', function () {
    createTableCandidates().dataSort('vacancy');
});
document
    .getElementById('candidates-sort-fullname')
    .addEventListener('click', function () {
    createTableCandidates().dataSort('fullname');
});
document
    .getElementById('candidates-sort-event')
    .addEventListener('click', function () {
    createTableCandidates().dataSort('event');
});
var createTableCandidates = function () {
    var addOneElemToData = function (someData) {
        dataCandidates.push(someData);
        renderTableContent();
    };
    var addManyElemsToData = function (someData) {
        dataCandidates = someData;
    };
    var dataSort = function (elem) {
        var arrowSort = STATE_OF_SORTED_CANDIDATES[elem];
        if (arrowSort === false) {
            STATE_OF_SORTED_CANDIDATES[elem] = true;
        }
        else {
            STATE_OF_SORTED_CANDIDATES[elem] = false;
        }
        dataCandidates.sort(function (a, b) {
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
    var renderTableContent = function () {
        var elemOfTableContainer = document.querySelector('.table-candidates.content');
        if (elemOfTableContainer !== null) {
            elemOfTableContainer.innerHTML = '';
        }
        var dataElems = dataCandidates.map(function (elem) {
            return "\n        <div class=\"row\">\n          <p class=\"cell\">".concat(elem.vacancy, "</p>\n          <p class=\"cell\">").concat(elem.fullname, "</p>\n          <p class=\"cell\">").concat(elem.event, "</p>\n          <p class=\"cell\">").concat(elem.resume, "</p>\n          <p class=\"cell\">").concat(elem.showFile, "</p>\n          <p class=\"cell\">").concat(elem.downloadFile, "</p>\n        </div>\n      ");
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
        dataSort: dataSort,
        dataCandidates: dataCandidates,
        renderArrow: renderArrow,
        addOneElemToData: addOneElemToData,
        addManyElemsToData: addManyElemsToData,
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


/***/ }),

/***/ "./src/ts/table-vacancy.ts":
/*!*********************************!*\
  !*** ./src/ts/table-vacancy.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTableVacancy: () => (/* binding */ createTableVacancy)
/* harmony export */ });
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
var dataVacancy = [
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
document.getElementById('vacancy-sort-date').addEventListener('click', function () {
    createTableVacancy().dataSort('date');
});
document
    .getElementById('vacancy-sort-vacancy')
    .addEventListener('click', function () {
    createTableVacancy().dataSort('vacancy');
});
document.getElementById('vacancy-sort-status').addEventListener('click', function () {
    createTableVacancy().dataSort('status');
});
document
    .getElementById('vacancy-sort-fullname')
    .addEventListener('click', function () {
    createTableVacancy().dataSort('fullname');
});
var createTableVacancy = function () {
    var addOneElemToData = function (someData) {
        dataVacancy.push(someData);
        renderTableContent();
    };
    var addManyElemsToData = function (someData) {
        dataVacancy = someData;
    };
    var dataSort = function (elem) {
        var arrowSort = STATE_OF_SORTED_VACANCY[elem];
        if (arrowSort === false) {
            STATE_OF_SORTED_VACANCY[elem] = true;
        }
        else {
            STATE_OF_SORTED_VACANCY[elem] = false;
        }
        dataVacancy.sort(function (a, b) {
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
    var renderTableContent = function () {
        var elemOfTableContainer = document.querySelector('.table-vacancy.content');
        if (elemOfTableContainer !== null) {
            elemOfTableContainer.innerHTML = '';
        }
        var dataElems = dataVacancy.map(function (elem) {
            return "\n        <div class=\"row\">\n          <p class=\"cell\">".concat(elem.date, "</p>\n          <p class=\"cell\">").concat(elem.vacancy, "</p>\n          <p class=\"cell\">").concat(elem.status, "</p>\n          <p class=\"cell\">").concat(elem.fullname, "</p>\n          <p class=\"cell\">").concat(elem.recruiterContacts, "</p>\n          <p class=\"cell\">").concat(elem.resumeReviewed, "</p>\n          <p class=\"cell\">").concat(elem.resumeSentToCustomer, "</p>\n          <p class=\"cell\">").concat(elem.interviewWithTheCustomerWasConducted, "</p>\n          <p class=\"cell\">").concat(elem.checkSB, "</p>\n          <p class=\"cell\">").concat(elem.offer, "</p>\n          <p class=\"cell\">").concat(elem.employed, "</p>\n        </div>\n      ");
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
        dataSort: dataSort,
        dataVacancy: dataVacancy,
        renderArrow: renderArrow,
        addOneElemToData: addOneElemToData,
        addManyElemsToData: addManyElemsToData,
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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ts_table_bids__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ts/table-bids */ "./src/ts/table-bids.ts");
/* harmony import */ var _ts_table_candidates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ts/table-candidates */ "./src/ts/table-candidates.ts");
/* harmony import */ var _ts_table_vacancy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ts/table-vacancy */ "./src/ts/table-vacancy.ts");
/* harmony import */ var _ts_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ts/data */ "./src/ts/data.ts");




var initTable = function () {
    // таблица с заявками
    // заполнить таблицу данными
    (0,_ts_table_bids__WEBPACK_IMPORTED_MODULE_0__.createTableBids)().addManyElemsToData(_ts_data__WEBPACK_IMPORTED_MODULE_3__.dataBids);
    // отрисовать таблицу
    (0,_ts_table_bids__WEBPACK_IMPORTED_MODULE_0__.createTableBids)().renderTableContent();
    // отрисовать стрелки сортировки
    (0,_ts_table_bids__WEBPACK_IMPORTED_MODULE_0__.createTableBids)().renderArrow();
    // отсортируем по дате
    (0,_ts_table_bids__WEBPACK_IMPORTED_MODULE_0__.createTableBids)().dataSort('date');
    (0,_ts_table_bids__WEBPACK_IMPORTED_MODULE_0__.createTableBids)().dataSort('date');
    // таблица с вакансиями
    (0,_ts_table_vacancy__WEBPACK_IMPORTED_MODULE_2__.createTableVacancy)().renderTableContent();
    (0,_ts_table_vacancy__WEBPACK_IMPORTED_MODULE_2__.createTableVacancy)().renderArrow();
    // отсортируем по дате
    (0,_ts_table_vacancy__WEBPACK_IMPORTED_MODULE_2__.createTableVacancy)().dataSort('date');
    (0,_ts_table_vacancy__WEBPACK_IMPORTED_MODULE_2__.createTableVacancy)().dataSort('date');
    // таблица с кандидатами
    (0,_ts_table_candidates__WEBPACK_IMPORTED_MODULE_1__.createTableCandidates)().addManyElemsToData(_ts_data__WEBPACK_IMPORTED_MODULE_3__.dataCandidates);
    (0,_ts_table_candidates__WEBPACK_IMPORTED_MODULE_1__.createTableCandidates)().renderTableContent();
    (0,_ts_table_candidates__WEBPACK_IMPORTED_MODULE_1__.createTableCandidates)().renderArrow();
    // отсортируем по вакансии
    (0,_ts_table_candidates__WEBPACK_IMPORTED_MODULE_1__.createTableCandidates)().dataSort('vacancy');
};
initTable();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZSxFQUFFLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUN2QyxnQ0FBZ0M7SUFDaEMsK0RBQWUsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBRWhDLHNCQUFzQjtJQUN0QiwrREFBZSxFQUFFLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ25DLCtEQUFlLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7SUFFbkMsdUJBQXVCO0lBQ3ZCLHFFQUFrQixFQUFFLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUMxQyxxRUFBa0IsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBRW5DLHNCQUFzQjtJQUN0QixxRUFBa0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN0QyxxRUFBa0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUV0Qyx3QkFBd0I7SUFDeEIsMkVBQXFCLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxvREFBYyxDQUFDLENBQUM7SUFDM0QsMkVBQXFCLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzdDLDJFQUFxQixFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7SUFFdEMsMEJBQTBCO0lBQzFCLDJFQUFxQixFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQzlDLENBQUMsQ0FBQztBQUVGLFNBQVMsRUFBRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2F6cHJvbS8uL3NyYy90cy9kYXRhLnRzIiwid2VicGFjazovL2dhenByb20vLi9zcmMvdHMvdGFibGUtYmlkcy50cyIsIndlYnBhY2s6Ly9nYXpwcm9tLy4vc3JjL3RzL3RhYmxlLWNhbmRpZGF0ZXMudHMiLCJ3ZWJwYWNrOi8vZ2F6cHJvbS8uL3NyYy90cy90YWJsZS12YWNhbmN5LnRzIiwid2VicGFjazovL2dhenByb20vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZ2F6cHJvbS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZ2F6cHJvbS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2dhenByb20vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9nYXpwcm9tLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElEYXRhQmlkcyB9IGZyb20gJy4vdGFibGUtYmlkcyc7XHJcbmltcG9ydCB7IElEYXRhQ2FuZGlkYXRlcyB9IGZyb20gJy4vdGFibGUtY2FuZGlkYXRlcyc7XHJcblxyXG5leHBvcnQgbGV0IGRhdGFCaWRzOiBJRGF0YUJpZHNbXSA9IFtcclxuICB7XHJcbiAgICBkYXRlOiAnMTIuMTEuMjAyMicsXHJcbiAgICB2YWNhbmN5OiAn0JLQsNC60LDQvdGB0LjRjyAxJyxcclxuICAgIHN0YXR1czogJ9Ch0YLQsNGC0YPRgSAzJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGRhdGU6ICcwMS4wNy4xOTg5JyxcclxuICAgIHZhY2FuY3k6ICfQktCw0LrQsNC90YHQuNGPIDInLFxyXG4gICAgc3RhdHVzOiAn0KHRgtCw0YLRg9GBIDEnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgZGF0ZTogJzExLjAxLjIwMTUnLFxyXG4gICAgdmFjYW5jeTogJ9CS0LDQutCw0L3RgdC40Y8gMycsXHJcbiAgICBzdGF0dXM6ICfQodGC0LDRgtGD0YEgMicsXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBsZXQgZGF0YUNhbmRpZGF0ZXM6IElEYXRhQ2FuZGlkYXRlc1tdID0gW1xyXG4gIHtcclxuICAgIHZhY2FuY3k6ICfQktCw0LrQsNC90YHQuNGPIDEnLFxyXG4gICAgZnVsbG5hbWU6ICfQmNCy0LDQvdC+0LIg0JjQstCw0L0g0JjQstCw0L3QvtCy0LjRhycsXHJcbiAgICBldmVudDogJ2V2ZW50IDEnLFxyXG4gICAgcmVzdW1lOiAncmVzdW1lIDEnLFxyXG4gICAgc2hvd0ZpbGU6ICdzaG93RmlsZSAxJyxcclxuICAgIGRvd25sb2FkRmlsZTogJ2Rvd25sb2FkRmlsZSAxJyxcclxuICB9LFxyXG4gIHtcclxuICAgIHZhY2FuY3k6ICfQktCw0LrQsNC90YHQuNGPIDInLFxyXG4gICAgZnVsbG5hbWU6ICfQmtC40YHQtdC70ZHQsiDQnNCw0LrRgdC40Lwg0J7Qu9C10LPQvtCy0LjRhycsXHJcbiAgICBldmVudDogJ2V2ZW50IDInLFxyXG4gICAgcmVzdW1lOiAncmVzdW1lIDInLFxyXG4gICAgc2hvd0ZpbGU6ICdzaG93RmlsZSAyJyxcclxuICAgIGRvd25sb2FkRmlsZTogJ2Rvd25sb2FkRmlsZSAyJyxcclxuICB9LFxyXG5dO1xyXG4iLCJleHBvcnQgaW50ZXJmYWNlIElEYXRhQmlkcyB7XHJcbiAgZGF0ZTogc3RyaW5nO1xyXG4gIHZhY2FuY3k6IHN0cmluZztcclxuICBzdGF0dXM6IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIElTVEFURV9PRl9TT1JURURfQklEUyB7XHJcbiAgZGF0ZTogYm9vbGVhbjtcclxuICB2YWNhbmN5OiBib29sZWFuO1xyXG4gIHN0YXR1czogYm9vbGVhbjtcclxufVxyXG5cclxuY29uc3QgU1RBVEVfT0ZfU09SVEVEX0JJRFM6IElTVEFURV9PRl9TT1JURURfQklEUyA9IHtcclxuICBkYXRlOiB0cnVlLFxyXG4gIHZhY2FuY3k6IHRydWUsXHJcbiAgc3RhdHVzOiB0cnVlLFxyXG59O1xyXG5cclxubGV0IGRhdGE6IElEYXRhQmlkc1tdID0gW107XHJcblxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmlkcy1zb3J0LWRhdGUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBjcmVhdGVUYWJsZUJpZHMoKS5kYXRhU29ydCgnZGF0ZScpO1xyXG59KTtcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JpZHMtc29ydC12YWNhbmN5JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgY3JlYXRlVGFibGVCaWRzKCkuZGF0YVNvcnQoJ3ZhY2FuY3knKTtcclxufSk7XHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiaWRzLXNvcnQtc3RhdHVzJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgY3JlYXRlVGFibGVCaWRzKCkuZGF0YVNvcnQoJ3N0YXR1cycpO1xyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVUYWJsZUJpZHMgPSAoKSA9PiB7XHJcbiAgY29uc3QgYWRkT25lRWxlbVRvRGF0YSA9IChzb21lRGF0YTogSURhdGFCaWRzKSA9PiB7XHJcbiAgICBkYXRhLnB1c2goc29tZURhdGEpO1xyXG4gICAgcmVuZGVyVGFibGVDb250ZW50KCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYWRkTWFueUVsZW1zVG9EYXRhID0gKHNvbWVEYXRhOiBJRGF0YUJpZHNbXSkgPT4ge1xyXG4gICAgZGF0YSA9IHNvbWVEYXRhO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRhdGFTb3J0ID0gKGVsZW06IGtleW9mIElEYXRhQmlkcykgPT4ge1xyXG4gICAgbGV0IGFycm93U29ydCA9IFNUQVRFX09GX1NPUlRFRF9CSURTW2VsZW1dO1xyXG4gICAgaWYgKGFycm93U29ydCA9PT0gZmFsc2UpIHtcclxuICAgICAgU1RBVEVfT0ZfU09SVEVEX0JJRFNbZWxlbV0gPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgU1RBVEVfT0ZfU09SVEVEX0JJRFNbZWxlbV0gPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBkYXRhLnNvcnQoKGE6IElEYXRhQmlkcywgYjogSURhdGFCaWRzKSA9PiB7XHJcbiAgICAgIGlmIChhW2VsZW1dIDwgYltlbGVtXSkge1xyXG4gICAgICAgIHJldHVybiBhcnJvd1NvcnQgPT09IHRydWUgPyAtMSA6IDE7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGFbZWxlbV0gPiBiW2VsZW1dKSB7XHJcbiAgICAgICAgcmV0dXJuIGFycm93U29ydCA9PT0gdHJ1ZSA/IDEgOiAtMTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gMDtcclxuICAgIH0pO1xyXG5cclxuICAgIHJlbmRlclRhYmxlQ29udGVudCgpO1xyXG4gICAgcmVuZGVyQXJyb3coKTtcclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJUYWJsZUNvbnRlbnQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBlbGVtT2ZUYWJsZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YWJsZS1iaWRzLmNvbnRlbnQnKTtcclxuICAgIGlmIChlbGVtT2ZUYWJsZUNvbnRhaW5lciAhPT0gbnVsbCkge1xyXG4gICAgICBlbGVtT2ZUYWJsZUNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkYXRhRWxlbXMgPSBkYXRhLm1hcCgoZWxlbTogSURhdGFCaWRzKSA9PiB7XHJcbiAgICAgIHJldHVybiBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgPHAgY2xhc3M9XCJjZWxsXCI+JHtlbGVtLmRhdGV9PC9wPlxyXG4gICAgICAgICAgPHAgY2xhc3M9XCJjZWxsXCI+PGEgaHJlZj1cIiR7ZWxlbS52YWNhbmN5fVwiPmxpbms8L2E+PC9wPlxyXG4gICAgICAgICAgPHAgY2xhc3M9XCJjZWxsXCI+JHtlbGVtLnN0YXR1c308L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIGA7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBjb21iaW5lZERhdGFFbGVtcyA9IGRhdGFFbGVtcy5qb2luKCcnKTtcclxuXHJcbiAgICBlbGVtT2ZUYWJsZUNvbnRhaW5lcj8uaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBjb21iaW5lZERhdGFFbGVtcyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyQXJyb3cgPSAoKSA9PiB7XHJcbiAgICBsZXQgZWxlbXNPZkFycm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgJy5kZXNjcmlwdGlvbi1iaWRzLnJvdyAuYXJyb3cnXHJcbiAgICApO1xyXG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKFNUQVRFX09GX1NPUlRFRF9CSURTKTtcclxuXHJcbiAgICBrZXlzLmZvckVhY2goKGtleSwgaW5kZXgpID0+IHtcclxuICAgICAgY29uc3QgdmFsdWUgPSBTVEFURV9PRl9TT1JURURfQklEU1trZXkgYXMga2V5b2YgSVNUQVRFX09GX1NPUlRFRF9CSURTXTtcclxuICAgICAgZWxlbXNPZkFycm93W2luZGV4XS5jbGFzc05hbWUgPVxyXG4gICAgICAgIHZhbHVlID09PSB0cnVlID8gJ2Fycm93IGFycm93LXVwJyA6ICdhcnJvdyBhcnJvdy1kb3duJztcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICByZW5kZXJUYWJsZUNvbnRlbnQsXHJcbiAgICBkYXRhU29ydCxcclxuICAgIGRhdGEsXHJcbiAgICByZW5kZXJBcnJvdyxcclxuICAgIGFkZE9uZUVsZW1Ub0RhdGEsXHJcbiAgICBhZGRNYW55RWxlbXNUb0RhdGEsXHJcbiAgfTtcclxufTtcclxuXHJcbi8vINC/0LXRgNCy0YvQtSDQtNCy0LAg0LzQtdGC0L7QtNCwINC90YPQttC90Ysg0LTQu9GPINC+0YLRgNC40YHQvtCy0LrQuCDRgtCw0LHQu9C40YbRi1xyXG4vLyBjcmVhdGVUYWJsZUJpZHMoKS5yZW5kZXJUYWJsZUNvbnRlbnQoKTtcclxuLy8gY3JlYXRlVGFibGVCaWRzKCkucmVuZGVyQXJyb3coKTtcclxuXHJcbi8vINGC0LDQuiDQvNC+0LbQvdC+INC00L7QsdCw0LLQuNGC0Ywg0L7QtNC40L0g0Y3Qu9C10LzQtdC90YIg0LIg0YLQsNCx0LvQuNGG0YNcclxuLy8gY3JlYXRlVGFibGVCaWRzKCkuYWRkT25lRWxlbVRvRGF0YSh7XHJcbi8vICAgZGF0ZTogJzA3LjA3LjIwMDcnLFxyXG4vLyAgIHZhY2FuY3k6ICfQktCw0LrQsNC90YHQuNGPIDUnLFxyXG4vLyAgIHN0YXR1czogJ9Ch0YLQsNGC0YPRgSA0JyxcclxuLy8gfSk7XHJcblxyXG4vLyDRgtCw0Log0LzQvtC20L3QviDQuNC30LzQtdC90LjRgtGMINC00LDQvdC90YvQtSDQsiDRgtCw0LHQu9C40YbQtVxyXG4vLyBjcmVhdGVUYWJsZSgpLmFkZE1hbnlFbGVtc1RvRGF0YShbSURhdGFdKTtcclxuIiwiZXhwb3J0IGludGVyZmFjZSBJRGF0YUNhbmRpZGF0ZXMge1xyXG4gIHZhY2FuY3k6IHN0cmluZztcclxuICBmdWxsbmFtZTogc3RyaW5nO1xyXG4gIGV2ZW50OiBzdHJpbmc7XHJcbiAgcmVzdW1lOiBzdHJpbmc7XHJcbiAgc2hvd0ZpbGU6IHN0cmluZztcclxuICBkb3dubG9hZEZpbGU6IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIElTVEFURV9PRl9TT1JURURfQ0FORElEQVRFUyB7XHJcbiAgdmFjYW5jeTogYm9vbGVhbjtcclxuICBmdWxsbmFtZTogYm9vbGVhbjtcclxuICBldmVudDogYm9vbGVhbjtcclxuICByZXN1bWU6IGJvb2xlYW47XHJcbiAgc2hvd0ZpbGU6IGJvb2xlYW47XHJcbiAgZG93bmxvYWRGaWxlOiBib29sZWFuO1xyXG59XHJcblxyXG5jb25zdCBTVEFURV9PRl9TT1JURURfQ0FORElEQVRFUzogSVNUQVRFX09GX1NPUlRFRF9DQU5ESURBVEVTID0ge1xyXG4gIHZhY2FuY3k6IHRydWUsXHJcbiAgZnVsbG5hbWU6IHRydWUsXHJcbiAgZXZlbnQ6IHRydWUsXHJcbiAgcmVzdW1lOiB0cnVlLFxyXG4gIHNob3dGaWxlOiB0cnVlLFxyXG4gIGRvd25sb2FkRmlsZTogdHJ1ZSxcclxufTtcclxuXHJcbmxldCBkYXRhQ2FuZGlkYXRlczogSURhdGFDYW5kaWRhdGVzW10gPSBbXTtcclxuXHJcbmRvY3VtZW50XHJcbiAgLmdldEVsZW1lbnRCeUlkKCdjYW5kaWRhdGVzLXNvcnQtZGF0ZScpXHJcbiAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgY3JlYXRlVGFibGVDYW5kaWRhdGVzKCkuZGF0YVNvcnQoJ3ZhY2FuY3knKTtcclxuICB9KTtcclxuZG9jdW1lbnRcclxuICAuZ2V0RWxlbWVudEJ5SWQoJ2NhbmRpZGF0ZXMtc29ydC1mdWxsbmFtZScpXHJcbiAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgY3JlYXRlVGFibGVDYW5kaWRhdGVzKCkuZGF0YVNvcnQoJ2Z1bGxuYW1lJyk7XHJcbiAgfSk7XHJcbmRvY3VtZW50XHJcbiAgLmdldEVsZW1lbnRCeUlkKCdjYW5kaWRhdGVzLXNvcnQtZXZlbnQnKVxyXG4gIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGNyZWF0ZVRhYmxlQ2FuZGlkYXRlcygpLmRhdGFTb3J0KCdldmVudCcpO1xyXG4gIH0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZVRhYmxlQ2FuZGlkYXRlcyA9ICgpID0+IHtcclxuICBjb25zdCBhZGRPbmVFbGVtVG9EYXRhID0gKHNvbWVEYXRhOiBJRGF0YUNhbmRpZGF0ZXMpID0+IHtcclxuICAgIGRhdGFDYW5kaWRhdGVzLnB1c2goc29tZURhdGEpO1xyXG4gICAgcmVuZGVyVGFibGVDb250ZW50KCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYWRkTWFueUVsZW1zVG9EYXRhID0gKHNvbWVEYXRhOiBJRGF0YUNhbmRpZGF0ZXNbXSkgPT4ge1xyXG4gICAgZGF0YUNhbmRpZGF0ZXMgPSBzb21lRGF0YTtcclxuICB9O1xyXG5cclxuICBjb25zdCBkYXRhU29ydCA9IChlbGVtOiBrZXlvZiBJRGF0YUNhbmRpZGF0ZXMpID0+IHtcclxuICAgIGxldCBhcnJvd1NvcnQgPSBTVEFURV9PRl9TT1JURURfQ0FORElEQVRFU1tlbGVtXTtcclxuICAgIGlmIChhcnJvd1NvcnQgPT09IGZhbHNlKSB7XHJcbiAgICAgIFNUQVRFX09GX1NPUlRFRF9DQU5ESURBVEVTW2VsZW1dID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIFNUQVRFX09GX1NPUlRFRF9DQU5ESURBVEVTW2VsZW1dID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZGF0YUNhbmRpZGF0ZXMuc29ydCgoYTogSURhdGFDYW5kaWRhdGVzLCBiOiBJRGF0YUNhbmRpZGF0ZXMpID0+IHtcclxuICAgICAgaWYgKGFbZWxlbV0gPCBiW2VsZW1dKSB7XHJcbiAgICAgICAgcmV0dXJuIGFycm93U29ydCA9PT0gdHJ1ZSA/IC0xIDogMTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoYVtlbGVtXSA+IGJbZWxlbV0pIHtcclxuICAgICAgICByZXR1cm4gYXJyb3dTb3J0ID09PSB0cnVlID8gMSA6IC0xO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiAwO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmVuZGVyVGFibGVDb250ZW50KCk7XHJcbiAgICByZW5kZXJBcnJvdygpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbmRlclRhYmxlQ29udGVudCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGVsZW1PZlRhYmxlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgJy50YWJsZS1jYW5kaWRhdGVzLmNvbnRlbnQnXHJcbiAgICApO1xyXG4gICAgaWYgKGVsZW1PZlRhYmxlQ29udGFpbmVyICE9PSBudWxsKSB7XHJcbiAgICAgIGVsZW1PZlRhYmxlQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRhdGFFbGVtcyA9IGRhdGFDYW5kaWRhdGVzLm1hcCgoZWxlbTogSURhdGFDYW5kaWRhdGVzKSA9PiB7XHJcbiAgICAgIHJldHVybiBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgPHAgY2xhc3M9XCJjZWxsXCI+JHtlbGVtLnZhY2FuY3l9PC9wPlxyXG4gICAgICAgICAgPHAgY2xhc3M9XCJjZWxsXCI+JHtlbGVtLmZ1bGxuYW1lfTwvcD5cclxuICAgICAgICAgIDxwIGNsYXNzPVwiY2VsbFwiPiR7ZWxlbS5ldmVudH08L3A+XHJcbiAgICAgICAgICA8cCBjbGFzcz1cImNlbGxcIj4ke2VsZW0ucmVzdW1lfTwvcD5cclxuICAgICAgICAgIDxwIGNsYXNzPVwiY2VsbFwiPiR7ZWxlbS5zaG93RmlsZX08L3A+XHJcbiAgICAgICAgICA8cCBjbGFzcz1cImNlbGxcIj4ke2VsZW0uZG93bmxvYWRGaWxlfTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgYDtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGNvbWJpbmVkRGF0YUVsZW1zID0gZGF0YUVsZW1zLmpvaW4oJycpO1xyXG5cclxuICAgIGVsZW1PZlRhYmxlQ29udGFpbmVyPy5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGNvbWJpbmVkRGF0YUVsZW1zKTtcclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJBcnJvdyA9ICgpID0+IHtcclxuICAgIGxldCBlbGVtc09mQXJyb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG4gICAgICAnLmRlc2NyaXB0aW9uLWNhbmRpZGF0ZXMucm93IC5hcnJvdydcclxuICAgICk7XHJcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoU1RBVEVfT0ZfU09SVEVEX0NBTkRJREFURVMpO1xyXG5cclxuICAgIGtleXMuZm9yRWFjaCgoa2V5LCBpbmRleCkgPT4ge1xyXG4gICAgICBpZiAoaW5kZXggPiAyKSByZXR1cm47XHJcbiAgICAgIGNvbnN0IHZhbHVlID1cclxuICAgICAgICBTVEFURV9PRl9TT1JURURfQ0FORElEQVRFU1trZXkgYXMga2V5b2YgSVNUQVRFX09GX1NPUlRFRF9DQU5ESURBVEVTXTtcclxuICAgICAgZWxlbXNPZkFycm93W2luZGV4XS5jbGFzc05hbWUgPVxyXG4gICAgICAgIHZhbHVlID09PSB0cnVlID8gJ2Fycm93IGFycm93LXVwJyA6ICdhcnJvdyBhcnJvdy1kb3duJztcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICByZW5kZXJUYWJsZUNvbnRlbnQsXHJcbiAgICBkYXRhU29ydCxcclxuICAgIGRhdGFDYW5kaWRhdGVzLFxyXG4gICAgcmVuZGVyQXJyb3csXHJcbiAgICBhZGRPbmVFbGVtVG9EYXRhLFxyXG4gICAgYWRkTWFueUVsZW1zVG9EYXRhLFxyXG4gIH07XHJcbn07XHJcblxyXG4vLyDQv9C10YDQstGL0LUg0LTQstCwINC80LXRgtC+0LTQsCDQvdGD0LbQvdGLINC00LvRjyDQvtGC0YDQuNGB0L7QstC60Lgg0YLQsNCx0LvQuNGG0YtcclxuLy8gY3JlYXRlVGFibGVDYW5kaWRhdGVzKCkucmVuZGVyVGFibGVDb250ZW50KCk7XHJcbi8vIGNyZWF0ZVRhYmxlQ2FuZGlkYXRlcygpLnJlbmRlckFycm93KCk7XHJcbi8vIGNyZWF0ZVRhYmxlQ2FuZGlkYXRlcygpLmRhdGFTb3J0KCd2YWNhbmN5Jyk7XHJcblxyXG4vLyDRgtCw0Log0LzQvtC20L3QviDQtNC+0LHQsNCy0LjRgtGMINC+0LTQuNC9INGN0LvQtdC80LXQvdGCINCyINGC0LDQsdC70LjRhtGDXHJcbi8vIGNyZWF0ZVRhYmxlQ2FuZGlkYXRlcygpLmFkZE9uZUVsZW1Ub0RhdGEoe1xyXG4vLyAgIHZhY2FuY3k6ICfQktCw0LrQsNC90YHQuNGPIDEnLFxyXG4vLyAgICAgZnVsbG5hbWU6ICfQmNCy0LDQvdC+0LIg0JjQstCw0L0g0JjQstCw0L3QvtCy0LjRhycsXHJcbi8vICAgICBldmVudDogJ2V2ZW50IDEnLFxyXG4vLyAgICAgcmVzdW1lOiAncmVzdW1lIDEnLFxyXG4vLyAgICAgc2hvd0ZpbGU6ICdzaG93RmlsZSAxJyxcclxuLy8gICAgIGRvd25sb2FkRmlsZTogJ2Rvd25sb2FkRmlsZSAxJyxcclxuLy8gfSk7XHJcblxyXG4vLyDRgtCw0Log0LzQvtC20L3QviDQt9C60LzQtdC90LjRgtGMINC00LDQvdC90YvQtSDQsiDRgtCw0LHQu9C40YbQtVxyXG4vLyBjcmVhdGVUYWJsZSgpLmFkZE1hbnlFbGVtc1RvRGF0YShbSURhdGFdKTtcclxuLy9cclxuIiwiaW50ZXJmYWNlIElEYXRhVmFjYW5jeSB7XHJcbiAgZGF0ZTogc3RyaW5nO1xyXG4gIHZhY2FuY3k6IHN0cmluZztcclxuICBzdGF0dXM6IHN0cmluZztcclxuICBmdWxsbmFtZTogc3RyaW5nO1xyXG4gIHJlY3J1aXRlckNvbnRhY3RzOiBzdHJpbmc7XHJcbiAgcmVzdW1lUmV2aWV3ZWQ6IHN0cmluZztcclxuICByZXN1bWVTZW50VG9DdXN0b21lcjogc3RyaW5nO1xyXG4gIGludGVydmlld1dpdGhUaGVDdXN0b21lcldhc0NvbmR1Y3RlZDogc3RyaW5nO1xyXG4gIGNoZWNrU0I6IHN0cmluZztcclxuICBvZmZlcjogc3RyaW5nO1xyXG4gIGVtcGxveWVkOiBzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBJU1RBVEVfT0ZfU09SVEVEX1ZBQ0FOQ1kge1xyXG4gIGRhdGU6IGJvb2xlYW47XHJcbiAgdmFjYW5jeTogYm9vbGVhbjtcclxuICBzdGF0dXM6IGJvb2xlYW47XHJcbiAgZnVsbG5hbWU6IGJvb2xlYW47XHJcbiAgcmVjcnVpdGVyQ29udGFjdHM6IGJvb2xlYW47XHJcbiAgcmVzdW1lUmV2aWV3ZWQ6IGJvb2xlYW47XHJcbiAgcmVzdW1lU2VudFRvQ3VzdG9tZXI6IGJvb2xlYW47XHJcbiAgaW50ZXJ2aWV3V2l0aFRoZUN1c3RvbWVyV2FzQ29uZHVjdGVkOiBib29sZWFuO1xyXG4gIGNoZWNrU0I6IGJvb2xlYW47XHJcbiAgb2ZmZXI6IGJvb2xlYW47XHJcbiAgZW1wbG95ZWQ6IGJvb2xlYW47XHJcbn1cclxuXHJcbmNvbnN0IFNUQVRFX09GX1NPUlRFRF9WQUNBTkNZOiBJU1RBVEVfT0ZfU09SVEVEX1ZBQ0FOQ1kgPSB7XHJcbiAgZGF0ZTogdHJ1ZSxcclxuICB2YWNhbmN5OiB0cnVlLFxyXG4gIHN0YXR1czogdHJ1ZSxcclxuICBmdWxsbmFtZTogdHJ1ZSxcclxuICByZWNydWl0ZXJDb250YWN0czogdHJ1ZSxcclxuICByZXN1bWVSZXZpZXdlZDogdHJ1ZSxcclxuICByZXN1bWVTZW50VG9DdXN0b21lcjogdHJ1ZSxcclxuICBpbnRlcnZpZXdXaXRoVGhlQ3VzdG9tZXJXYXNDb25kdWN0ZWQ6IHRydWUsXHJcbiAgY2hlY2tTQjogdHJ1ZSxcclxuICBvZmZlcjogdHJ1ZSxcclxuICBlbXBsb3llZDogdHJ1ZSxcclxufTtcclxuXHJcbmxldCBkYXRhVmFjYW5jeTogSURhdGFWYWNhbmN5W10gPSBbXHJcbiAge1xyXG4gICAgZGF0ZTogJzIyLjA3LjIwMjEnLFxyXG4gICAgdmFjYW5jeTogJ9Cy0LDQutCw0L3RgdC40Y8gMScsXHJcbiAgICBzdGF0dXM6ICfRgdGC0LDRgtGD0YEgMScsXHJcbiAgICBmdWxsbmFtZTogJ9CY0LLQsNC90L7QsiDQmNCy0LDQvSDQmNCy0LDQvdC+0LLQuNGHJyxcclxuICAgIHJlY3J1aXRlckNvbnRhY3RzOiAn0LrQvtC90YLQsNC60YLRiyDRgNC10LrRgNGD0YLQtdGA0LAnLFxyXG4gICAgcmVzdW1lUmV2aWV3ZWQ6ICfQoNCw0YHRgdC80L7RgtGA0LXQvdC+INGA0LXQt9GO0LzQtSAxJyxcclxuICAgIHJlc3VtZVNlbnRUb0N1c3RvbWVyOiAn0KDQtdC30Y7QvNC1INC90LDQv9GA0LDQstC70LXQvdC+INC30LDQutCw0LfRh9C40LrRgyDQvdCwINGA0LDRgdGB0LzQvtGC0YDQtdC90LjQtSAxJyxcclxuICAgIGludGVydmlld1dpdGhUaGVDdXN0b21lcldhc0NvbmR1Y3RlZDogJ9Cf0YDQvtCy0LXQtNC10L3QviDQuNC90YLQtdGA0LLRjNGOINGBINC30LDQutCw0LfRh9C40LrQvtC8IDEnLFxyXG4gICAgY2hlY2tTQjogJ9Cf0YDQvtCy0LXRgNC60LAg0KHQkSAxJyxcclxuICAgIG9mZmVyOiAn0J7RhNGE0LXRgCAxJyxcclxuICAgIGVtcGxveWVkOiAn0KLRgNGD0LTQvtGD0YHRgtGA0L7QtdC90YsgMScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBkYXRlOiAnMjIuMDcuMjAxMicsXHJcbiAgICB2YWNhbmN5OiAn0LLQsNC60LDQvdGB0LjRjyAyJyxcclxuICAgIHN0YXR1czogJ9GB0YLQsNGC0YPRgSAyJyxcclxuICAgIGZ1bGxuYW1lOiAn0JjQstCw0L3QvtCyINCY0LLQsNC9INCf0LXRgtGA0L7QstC40YcnLFxyXG4gICAgcmVjcnVpdGVyQ29udGFjdHM6ICfQutC+0L3RgtCw0LrRgtGLINGA0LXQutGA0YPRgtC10YDQsCcsXHJcbiAgICByZXN1bWVSZXZpZXdlZDogJ9Cg0LDRgdGB0LzQvtGC0YDQtdC90L4g0YDQtdC30Y7QvNC1IDEnLFxyXG4gICAgcmVzdW1lU2VudFRvQ3VzdG9tZXI6ICfQoNC10LfRjtC80LUg0L3QsNC/0YDQsNCy0LvQtdC90L4g0LfQsNC60LDQt9GH0LjQutGDINC90LAg0YDQsNGB0YHQvNC+0YLRgNC10L3QuNC1IDEnLFxyXG4gICAgaW50ZXJ2aWV3V2l0aFRoZUN1c3RvbWVyV2FzQ29uZHVjdGVkOiAn0J/RgNC+0LLQtdC00LXQvdC+INC40L3RgtC10YDQstGM0Y4g0YEg0LfQsNC60LDQt9GH0LjQutC+0LwgMScsXHJcbiAgICBjaGVja1NCOiAn0J/RgNC+0LLQtdGA0LrQsCDQodCRIDEnLFxyXG4gICAgb2ZmZXI6ICfQntGE0YTQtdGAIDEnLFxyXG4gICAgZW1wbG95ZWQ6ICfQotGA0YPQtNC+0YPRgdGC0YDQvtC10L3RiyAxJyxcclxuICB9LFxyXG5dO1xyXG5cclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZhY2FuY3ktc29ydC1kYXRlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgY3JlYXRlVGFibGVWYWNhbmN5KCkuZGF0YVNvcnQoJ2RhdGUnKTtcclxufSk7XHJcbmRvY3VtZW50XHJcbiAgLmdldEVsZW1lbnRCeUlkKCd2YWNhbmN5LXNvcnQtdmFjYW5jeScpXHJcbiAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgY3JlYXRlVGFibGVWYWNhbmN5KCkuZGF0YVNvcnQoJ3ZhY2FuY3knKTtcclxuICB9KTtcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZhY2FuY3ktc29ydC1zdGF0dXMnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBjcmVhdGVUYWJsZVZhY2FuY3koKS5kYXRhU29ydCgnc3RhdHVzJyk7XHJcbn0pO1xyXG5kb2N1bWVudFxyXG4gIC5nZXRFbGVtZW50QnlJZCgndmFjYW5jeS1zb3J0LWZ1bGxuYW1lJylcclxuICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBjcmVhdGVUYWJsZVZhY2FuY3koKS5kYXRhU29ydCgnZnVsbG5hbWUnKTtcclxuICB9KTtcclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVUYWJsZVZhY2FuY3kgPSAoKSA9PiB7XHJcbiAgY29uc3QgYWRkT25lRWxlbVRvRGF0YSA9IChzb21lRGF0YTogSURhdGFWYWNhbmN5KSA9PiB7XHJcbiAgICBkYXRhVmFjYW5jeS5wdXNoKHNvbWVEYXRhKTtcclxuICAgIHJlbmRlclRhYmxlQ29udGVudCgpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGFkZE1hbnlFbGVtc1RvRGF0YSA9IChzb21lRGF0YTogSURhdGFWYWNhbmN5W10pID0+IHtcclxuICAgIGRhdGFWYWNhbmN5ID0gc29tZURhdGE7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZGF0YVNvcnQgPSAoZWxlbToga2V5b2YgSURhdGFWYWNhbmN5KSA9PiB7XHJcbiAgICBsZXQgYXJyb3dTb3J0ID0gU1RBVEVfT0ZfU09SVEVEX1ZBQ0FOQ1lbZWxlbV07XHJcbiAgICBpZiAoYXJyb3dTb3J0ID09PSBmYWxzZSkge1xyXG4gICAgICBTVEFURV9PRl9TT1JURURfVkFDQU5DWVtlbGVtXSA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBTVEFURV9PRl9TT1JURURfVkFDQU5DWVtlbGVtXSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGRhdGFWYWNhbmN5LnNvcnQoKGE6IElEYXRhVmFjYW5jeSwgYjogSURhdGFWYWNhbmN5KSA9PiB7XHJcbiAgICAgIGlmIChhW2VsZW1dIDwgYltlbGVtXSkge1xyXG4gICAgICAgIHJldHVybiBhcnJvd1NvcnQgPT09IHRydWUgPyAtMSA6IDE7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGFbZWxlbV0gPiBiW2VsZW1dKSB7XHJcbiAgICAgICAgcmV0dXJuIGFycm93U29ydCA9PT0gdHJ1ZSA/IDEgOiAtMTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gMDtcclxuICAgIH0pO1xyXG5cclxuICAgIHJlbmRlclRhYmxlQ29udGVudCgpO1xyXG4gICAgcmVuZGVyQXJyb3coKTtcclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJUYWJsZUNvbnRlbnQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBlbGVtT2ZUYWJsZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICcudGFibGUtdmFjYW5jeS5jb250ZW50J1xyXG4gICAgKTtcclxuICAgIGlmIChlbGVtT2ZUYWJsZUNvbnRhaW5lciAhPT0gbnVsbCkge1xyXG4gICAgICBlbGVtT2ZUYWJsZUNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkYXRhRWxlbXMgPSBkYXRhVmFjYW5jeS5tYXAoKGVsZW06IElEYXRhVmFjYW5jeSkgPT4ge1xyXG4gICAgICByZXR1cm4gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgIDxwIGNsYXNzPVwiY2VsbFwiPiR7ZWxlbS5kYXRlfTwvcD5cclxuICAgICAgICAgIDxwIGNsYXNzPVwiY2VsbFwiPiR7ZWxlbS52YWNhbmN5fTwvcD5cclxuICAgICAgICAgIDxwIGNsYXNzPVwiY2VsbFwiPiR7ZWxlbS5zdGF0dXN9PC9wPlxyXG4gICAgICAgICAgPHAgY2xhc3M9XCJjZWxsXCI+JHtlbGVtLmZ1bGxuYW1lfTwvcD5cclxuICAgICAgICAgIDxwIGNsYXNzPVwiY2VsbFwiPiR7ZWxlbS5yZWNydWl0ZXJDb250YWN0c308L3A+XHJcbiAgICAgICAgICA8cCBjbGFzcz1cImNlbGxcIj4ke2VsZW0ucmVzdW1lUmV2aWV3ZWR9PC9wPlxyXG4gICAgICAgICAgPHAgY2xhc3M9XCJjZWxsXCI+JHtlbGVtLnJlc3VtZVNlbnRUb0N1c3RvbWVyfTwvcD5cclxuICAgICAgICAgIDxwIGNsYXNzPVwiY2VsbFwiPiR7ZWxlbS5pbnRlcnZpZXdXaXRoVGhlQ3VzdG9tZXJXYXNDb25kdWN0ZWR9PC9wPlxyXG4gICAgICAgICAgPHAgY2xhc3M9XCJjZWxsXCI+JHtlbGVtLmNoZWNrU0J9PC9wPlxyXG4gICAgICAgICAgPHAgY2xhc3M9XCJjZWxsXCI+JHtlbGVtLm9mZmVyfTwvcD5cclxuICAgICAgICAgIDxwIGNsYXNzPVwiY2VsbFwiPiR7ZWxlbS5lbXBsb3llZH08L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIGA7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBjb21iaW5lZERhdGFFbGVtcyA9IGRhdGFFbGVtcy5qb2luKCcnKTtcclxuXHJcbiAgICBlbGVtT2ZUYWJsZUNvbnRhaW5lcj8uaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBjb21iaW5lZERhdGFFbGVtcyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyQXJyb3cgPSAoKSA9PiB7XHJcbiAgICBsZXQgZWxlbXNPZkFycm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgJy5kZXNjcmlwdGlvbi12YWNhbmN5LnJvdyAuYXJyb3cnXHJcbiAgICApO1xyXG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKFNUQVRFX09GX1NPUlRFRF9WQUNBTkNZKTtcclxuXHJcbiAgICBrZXlzLmZvckVhY2goKGtleSwgaW5kZXgpID0+IHtcclxuICAgICAgaWYgKGluZGV4ID4gMykgcmV0dXJuO1xyXG4gICAgICBjb25zdCB2YWx1ZSA9XHJcbiAgICAgICAgU1RBVEVfT0ZfU09SVEVEX1ZBQ0FOQ1lba2V5IGFzIGtleW9mIElTVEFURV9PRl9TT1JURURfVkFDQU5DWV07XHJcbiAgICAgIGVsZW1zT2ZBcnJvd1tpbmRleF0uY2xhc3NOYW1lID1cclxuICAgICAgICB2YWx1ZSA9PT0gdHJ1ZSA/ICdhcnJvdyBhcnJvdy11cCcgOiAnYXJyb3cgYXJyb3ctZG93bic7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcmVuZGVyVGFibGVDb250ZW50LFxyXG4gICAgZGF0YVNvcnQsXHJcbiAgICBkYXRhVmFjYW5jeSxcclxuICAgIHJlbmRlckFycm93LFxyXG4gICAgYWRkT25lRWxlbVRvRGF0YSxcclxuICAgIGFkZE1hbnlFbGVtc1RvRGF0YSxcclxuICB9O1xyXG59O1xyXG5cclxuLy8g0L/QtdGA0LLRi9C1INC00LLQsCDQvNC10YLQvtC00LAg0L3Rg9C20L3RiyDQtNC70Y8g0L7RgtGA0LjRgdC+0LLQutC4INGC0LDQsdC70LjRhtGLXHJcbi8vIGNyZWF0ZVRhYmxlVmFjYW5jeSgpLnJlbmRlclRhYmxlQ29udGVudCgpO1xyXG4vLyBjcmVhdGVUYWJsZVZhY2FuY3koKS5yZW5kZXJBcnJvdygpO1xyXG5cclxuLy8gLy8g0L7RgtGB0L7RgNGC0LjRgNGD0LXQvCDQv9C+INC00LDRgtC1XHJcbi8vIGNyZWF0ZVRhYmxlVmFjYW5jeSgpLmRhdGFTb3J0KCdkYXRlJyk7XHJcbi8vIGNyZWF0ZVRhYmxlVmFjYW5jeSgpLmRhdGFTb3J0KCdkYXRlJyk7XHJcblxyXG4vLyDRgtCw0Log0LzQvtC20L3QviDQtNC+0LHQsNCy0LjRgtGMINC+0LTQuNC9INGN0LvQtdC80LXQvdGCINCyINGC0LDQsdC70LjRhtGDXHJcbi8vIGNyZWF0ZVRhYmxlVmFjYW5jeSgpLmFkZE9uZUVsZW1Ub0RhdGEoe1xyXG4vLyBkYXRlOiAnMjIuMDcuMjAxMicsXHJcbi8vIHZhY2FuY3k6ICfQstCw0LrQsNC90YHQuNGPIDInLFxyXG4vLyBzdGF0dXM6ICfRgdGC0LDRgtGD0YEgMicsXHJcbi8vIGZ1bGxuYW1lOiAn0JjQstCw0L3QvtCyINCY0LLQsNC9INCf0LXRgtGA0L7QstC40YcnLFxyXG4vLyByZWNydWl0ZXJDb250YWN0czogJ9C60L7QvdGC0LDQutGC0Ysg0YDQtdC60YDRg9GC0LXRgNCwJyxcclxuLy8gcmVzdW1lUmV2aWV3ZWQ6ICfQoNCw0YHRgdC80L7RgtGA0LXQvdC+INGA0LXQt9GO0LzQtSAxJyxcclxuLy8gcmVzdW1lU2VudFRvQ3VzdG9tZXI6ICfQoNC10LfRjtC80LUg0L3QsNC/0YDQsNCy0LvQtdC90L4g0LfQsNC60LDQt9GH0LjQutGDINC90LAg0YDQsNGB0YHQvNC+0YLRgNC10L3QuNC1IDEnLFxyXG4vLyBpbnRlcnZpZXdXaXRoVGhlQ3VzdG9tZXJXYXNDb25kdWN0ZWQ6ICfQn9GA0L7QstC10LTQtdC90L4g0LjQvdGC0LXRgNCy0YzRjiDRgSDQt9Cw0LrQsNC30YfQuNC60L7QvCAxJyxcclxuLy8gY2hlY2tTQjogJ9Cf0YDQvtCy0LXRgNC60LAg0KHQkSAxJyxcclxuLy8gb2ZmZXI6ICfQntGE0YTQtdGAIDEnLFxyXG4vLyBlbXBsb3llZDogJ9Ci0YDRg9C00L7Rg9GB0YLRgNC+0LXQvdGLIDEnLFxyXG4vLyB9KTtcclxuXHJcbi8vINGC0LDQuiDQvNC+0LbQvdC+INC30LrQvNC10L3QuNGC0Ywg0LTQsNC90L3Ri9C1INCyINGC0LDQsdC70LjRhtC1XHJcbi8vIGNyZWF0ZVRhYmxlKCkuYWRkTWFueUVsZW1zVG9EYXRhKFtJRGF0YVZhY2FuY3ldKTtcclxuLy9cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBJRGF0YUJpZHMsIGNyZWF0ZVRhYmxlQmlkcyB9IGZyb20gJy4vdHMvdGFibGUtYmlkcyc7XHJcbmltcG9ydCB7IGNyZWF0ZVRhYmxlQ2FuZGlkYXRlcyB9IGZyb20gJy4vdHMvdGFibGUtY2FuZGlkYXRlcyc7XHJcbmltcG9ydCB7IGNyZWF0ZVRhYmxlVmFjYW5jeSB9IGZyb20gJy4vdHMvdGFibGUtdmFjYW5jeSc7XHJcblxyXG4vLyDQt9C00LXRgdGMINC80L7QttC90L4g0L7RgtGB0LvQtdC20LjQstCw0YLRjCDQvtGC0LzQtdGH0LXQvdC90YvQtSDRh9C10LrQsdC+0LrRgdGLXHJcbmltcG9ydCB7IHN0YXRlT2ZTZWxlY3REcm9wZG93bkJpZHMgfSBmcm9tICcuL2pzL3NlbGVjdC1iaWRzJztcclxuaW1wb3J0IHsgc3RhdGVPZlNlbGVjdERyb3Bkb3duVmFjYW5jeSB9IGZyb20gJy4vanMvc2VsZWN0LXZhY2FuY3knO1xyXG5pbXBvcnQgeyBzdGF0ZU9mU2VsZWN0RHJvcGRvd25DYW5kaWRhdGVzIH0gZnJvbSAnLi9qcy9zZWxlY3QtY2FuZGlkYXRlcyc7XHJcblxyXG5pbXBvcnQgeyBkYXRhQmlkcywgZGF0YUNhbmRpZGF0ZXMgfSBmcm9tICcuL3RzL2RhdGEnO1xyXG5cclxuY29uc3QgaW5pdFRhYmxlID0gKCkgPT4ge1xyXG4gIC8vINGC0LDQsdC70LjRhtCwINGBINC30LDRj9Cy0LrQsNC80LhcclxuICAvLyDQt9Cw0L/QvtC70L3QuNGC0Ywg0YLQsNCx0LvQuNGG0YMg0LTQsNC90L3Ri9C80LhcclxuICBjcmVhdGVUYWJsZUJpZHMoKS5hZGRNYW55RWxlbXNUb0RhdGEoZGF0YUJpZHMpO1xyXG4gIC8vINC+0YLRgNC40YHQvtCy0LDRgtGMINGC0LDQsdC70LjRhtGDXHJcbiAgY3JlYXRlVGFibGVCaWRzKCkucmVuZGVyVGFibGVDb250ZW50KCk7XHJcbiAgLy8g0L7RgtGA0LjRgdC+0LLQsNGC0Ywg0YHRgtGA0LXQu9C60Lgg0YHQvtGA0YLQuNGA0L7QstC60LhcclxuICBjcmVhdGVUYWJsZUJpZHMoKS5yZW5kZXJBcnJvdygpO1xyXG5cclxuICAvLyDQvtGC0YHQvtGA0YLQuNGA0YPQtdC8INC/0L4g0LTQsNGC0LVcclxuICBjcmVhdGVUYWJsZUJpZHMoKS5kYXRhU29ydCgnZGF0ZScpO1xyXG4gIGNyZWF0ZVRhYmxlQmlkcygpLmRhdGFTb3J0KCdkYXRlJyk7XHJcblxyXG4gIC8vINGC0LDQsdC70LjRhtCwINGBINCy0LDQutCw0L3RgdC40Y/QvNC4XHJcbiAgY3JlYXRlVGFibGVWYWNhbmN5KCkucmVuZGVyVGFibGVDb250ZW50KCk7XHJcbiAgY3JlYXRlVGFibGVWYWNhbmN5KCkucmVuZGVyQXJyb3coKTtcclxuXHJcbiAgLy8g0L7RgtGB0L7RgNGC0LjRgNGD0LXQvCDQv9C+INC00LDRgtC1XHJcbiAgY3JlYXRlVGFibGVWYWNhbmN5KCkuZGF0YVNvcnQoJ2RhdGUnKTtcclxuICBjcmVhdGVUYWJsZVZhY2FuY3koKS5kYXRhU29ydCgnZGF0ZScpO1xyXG5cclxuICAvLyDRgtCw0LHQu9C40YbQsCDRgSDQutCw0L3QtNC40LTQsNGC0LDQvNC4XHJcbiAgY3JlYXRlVGFibGVDYW5kaWRhdGVzKCkuYWRkTWFueUVsZW1zVG9EYXRhKGRhdGFDYW5kaWRhdGVzKTtcclxuICBjcmVhdGVUYWJsZUNhbmRpZGF0ZXMoKS5yZW5kZXJUYWJsZUNvbnRlbnQoKTtcclxuICBjcmVhdGVUYWJsZUNhbmRpZGF0ZXMoKS5yZW5kZXJBcnJvdygpO1xyXG5cclxuICAvLyDQvtGC0YHQvtGA0YLQuNGA0YPQtdC8INC/0L4g0LLQsNC60LDQvdGB0LjQuFxyXG4gIGNyZWF0ZVRhYmxlQ2FuZGlkYXRlcygpLmRhdGFTb3J0KCd2YWNhbmN5Jyk7XHJcbn07XHJcblxyXG5pbml0VGFibGUoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9