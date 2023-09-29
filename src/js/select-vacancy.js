export const stateOfSelectDropdownVacancy = {
  onWork: true,
  closed: true,
  closedByCustomer: true,
  newBids: true,
  canceled: true,
  suspended: true,
  aboveTotalLoad: true,
};

const stateOfDates = {
  start: null,
  end: null,
  status: [],
};

const changeTheStateOfSelectDropdownVacancy = (text) => {
  let stateOfTheElem = stateOfSelectDropdownVacancy[text];
  stateOfTheElem === false
    ? (stateOfSelectDropdownVacancy[text] = true)
    : (stateOfSelectDropdownVacancy[text] = false);

  // console.log(stateOfSelectDropdownVacancy);
};

let elemOfSelectContentVacancy = document.querySelector(
  '#select-my-vacancy .content'
);

let elemOfSelectImageVacancy = document.querySelector(
  '#select-my-vacancy .select-image'
);
elemOfSelectContentVacancy.style.display = 'none';

const showOrHideTableElements = () => {
  let elemOfTableVacancy = document.querySelector('.table-vacancy.content');
  let elemsOfRows = elemOfTableVacancy.querySelectorAll('.row');

  elemsOfRows.forEach((elem) => {
    let vacancyTextDate = elem.querySelector('.cell-date').textContent;
    let dateValue = vacancyTextDate.split('.').reverse().join('-');

    const isDateInRange =
      (stateOfDates.start === null || dateValue >= stateOfDates.start) &&
      (stateOfDates.end === null || dateValue <= stateOfDates.end);

    const statusText = elem.querySelector('.cell-status').textContent.trim();
    const isStatusSelected =
      stateOfDates.status.length === 0 ||
      stateOfDates.status.includes(statusText);

    if (!isDateInRange || !isStatusSelected) {
      elem.classList.add('hide');
    } else {
      elem.classList.remove('hide');
    }
  });
};

// установить дату
function handleDateChange(event, date) {
  let inputValue = event.target.value;

  if (date === 'start-date') {
    stateOfDates.start = inputValue;
  }
  if (date === 'end-date') {
    stateOfDates.end = inputValue;
  }

  showOrHideTableElements();
}

// Функция для обновления выбранных элементов и вызова фильтрации
const updateSelectedStatus = () => {
  const statusInputs = document.querySelectorAll('#select-vacancy label input');
  stateOfDates.status = [];

  setTimeout(() => {
    statusInputs.forEach((input) => {
      if (input.checked) {
        const label = input.closest('label');
        if (label) {
          stateOfDates.status.push(label.textContent.trim());
        }
      }
    });

    showOrHideTableElements();
  }, 0);
};

let elemsOfSelectVacancy = document.querySelectorAll('#select-vacancy input');
let keysOfStateOfSelectDropdownBids = Object.keys(stateOfSelectDropdownVacancy);

elemsOfSelectVacancy.forEach((elem, index) => {
  elem.addEventListener('click', () => {
    changeTheStateOfSelectDropdownVacancy(
      keysOfStateOfSelectDropdownBids[index]
    );
  });
});

// DOM
// event

// Добавляем обработчики событий для обновления выбранных элементов
document.querySelectorAll('#select-vacancy label').forEach((label) => {
  label.addEventListener('click', updateSelectedStatus);
  const input = label.querySelector('input');
  input.addEventListener('click', (e) => {
    e.stopPropagation();
  });
});

// событие на клик по моим вакансиям
document.querySelectorAll('.main-nav .tab')[1].addEventListener('click', () => {
  document
    .querySelector('.start-date')
    .addEventListener('change', (e) => handleDateChange(e, 'start-date'));
  document
    .querySelector('.end-date')
    .addEventListener('change', (e) => handleDateChange(e, 'end-date'));
});

// скрывание раскрывание селекта
document
  .querySelector('#select-my-vacancy .select-image img')
  .addEventListener('click', () => {
    if (elemOfSelectContentVacancy.style.display === 'none') {
      elemOfSelectContentVacancy.style.display = 'block';
      elemOfSelectImageVacancy.style.transform = 'rotate(0.5turn)';
    } else {
      elemOfSelectContentVacancy.style.display = 'none';
      elemOfSelectImageVacancy.style.transform = 'rotate(1turn)';
    }
  });
