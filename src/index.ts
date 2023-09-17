import { IDataBids, createTableBids } from './ts/table-bids';
import { createTableCandidates } from './ts/table-candidates';
import { createTableVacancy } from './ts/table-vacancy';

// здесь можно отслеживать отмеченные чекбоксы
import { stateOfSelectDropdownBids } from './js/select-bids';
import { stateOfSelectDropdownVacancy } from './js/select-vacancy';
import { stateOfSelectDropdownCandidates } from './js/select-candidates';

import { dataBids, dataCandidates, dataVacancy } from './ts/data';

const initTable = () => {
  // таблица с заявками
  // заполнить таблицу данными
  createTableBids().addManyElemsToData(dataBids);
  // отрисовать таблицу
  createTableBids().renderTableContent();
  // отрисовать стрелки сортировки
  createTableBids().renderArrow();

  // отсортируем по дате
  createTableBids().dataSort('date');
  createTableBids().dataSort('date');

  // таблица с вакансиями
  createTableVacancy().addManyElemsToData(dataVacancy);
  createTableVacancy().renderTableContent();
  createTableVacancy().renderArrow();

  // отсортируем по дате
  createTableVacancy().dataSort('date');
  createTableVacancy().dataSort('date');

  // таблица с кандидатами
  createTableCandidates().addManyElemsToData(dataCandidates);
  createTableCandidates().renderTableContent();
  createTableCandidates().renderArrow();

  // отсортируем по вакансии
  createTableCandidates().dataSort('vacancy');
};

initTable();
