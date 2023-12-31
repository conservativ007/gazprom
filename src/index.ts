import { createTableBids } from './ts/table-bids';
import { createTableCandidates } from './ts/table-candidates';
import { createTableVacancy } from './ts/table-vacancy';

import { dataBids, dataCandidates, dataVacancy } from './ts/data';

const initTable = () => {
  // таблица с заявками
  // заполнить таблицу данными
  createTableBids().addManyElemsToData(dataBids);
  // отрисовать таблицу
  createTableBids().renderTableContent();

  // отсортируем по дате
  createTableBids().dataSort('date');

  // таблица с вакансиями
  createTableVacancy().addManyElemsToData(dataVacancy);
  createTableVacancy().renderTableContent();
  // отсортируем по дате
  createTableVacancy().dataSort('date');
  createTableVacancy().dataSort('date');

  // таблица с кандидатами
  createTableCandidates().addManyElemsToData(dataCandidates);
  createTableCandidates().renderTableContent();

  // отсортируем по вакансии
  createTableCandidates().dataSort();
};

initTable();
