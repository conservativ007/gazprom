import { IDataBids } from './table-bids';
import { IDataCandidates } from './table-candidates';
import { IDataVacancy } from './table-vacancy';

export let dataBids: IDataBids[] = [
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

export let dataCandidates: IDataCandidates[] = [
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

export let dataVacancy: IDataVacancy[] = [
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
