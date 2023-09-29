export const stateOfSelectDropdownBids = {
  bids: true,
  closed: true,
  rejected: true,
  draft: true,
};

const stateOfDates = {
  start: null,
  end: null,
  status: [],
};

const changeTheStateOfSelectDropdownBids = (text) => {
  let stateOfTheElem = stateOfSelectDropdownBids[text];
  stateOfTheElem === false
    ? (stateOfSelectDropdownBids[text] = true)
    : (stateOfSelectDropdownBids[text] = false);

  console.log(stateOfSelectDropdownBids);
};

let elemOfSelectContent = document.querySelector('.select-container .content');
let elemOfSelectImage = document.querySelector('.select-image');
elemOfSelectContent.style.display = 'none';

document.querySelector('.select-image img').addEventListener('click', () => {
  if (elemOfSelectContent.style.display === 'none') {
    elemOfSelectContent.style.display = 'block';
    elemOfSelectImage.style.transform = 'rotate(0.5turn)';
  } else {
    elemOfSelectContent.style.display = 'none';
    elemOfSelectImage.style.transform = 'rotate(1turn)';
  }
});

let elemsOfSelectBids = document.querySelectorAll('#select-bids input');
let keysOfStateOfSelectDropdownBids = Object.keys(stateOfSelectDropdownBids);

elemsOfSelectBids.forEach((elem, index) => {
  elem.addEventListener('click', () => {
    changeTheStateOfSelectDropdownBids(keysOfStateOfSelectDropdownBids[index]);
  });
});

//--------------------------------------------

const showOrHideTableElements = () => {
  let elemOfTableBids = document.querySelector('.table-bids.content');
  let elemsOfRows = elemOfTableBids.querySelectorAll('.row');

  // console.log(stateOfDates);

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
  const statusInputs = document.querySelectorAll('#select-bids label input');
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

// Добавляем обработчики событий для обновления выбранных элементов
document.querySelectorAll('#select-bids label').forEach((label) => {
  label.addEventListener('click', updateSelectedStatus);
  const input = label.querySelector('input');
  input.addEventListener('click', (e) => {
    e.stopPropagation();
  });
});

// событие на клик по заявкам
document
  .querySelector('.start-date-bids')
  .addEventListener('change', (e) => handleDateChange(e, 'start-date'));
document
  .querySelector('.end-date-bids')
  .addEventListener('change', (e) => handleDateChange(e, 'end-date'));
