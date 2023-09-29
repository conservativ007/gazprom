// Общее состояние для хранения выбранных элементов
let stateOfSelectCandidates = {
  vacancy: [],
  event: [],
};

// Функция для показа/скрытия элементов в таблице
const showOrHideTableElements = () => {
  let elemOfTableCandidates = document.querySelector(
    '.table-candidates.content'
  );

  let elemsOfRows = elemOfTableCandidates.querySelectorAll('.row');
  elemsOfRows.forEach((elem) => {
    let vacancyText = elem.querySelector(
      '.cell.vacancy-content .describe p'
    ).textContent;
    let eventText = elem.querySelector('.cell-event').textContent.trim();

    let isVacancySelected =
      stateOfSelectCandidates.vacancy.length === 0 ||
      stateOfSelectCandidates.vacancy.includes(vacancyText);
    let isEventSelected =
      stateOfSelectCandidates.event.length === 0 ||
      stateOfSelectCandidates.event.includes(eventText);

    if (isVacancySelected === true && isEventSelected === true) {
      elem.classList.remove('hide');
    } else {
      elem.classList.add('hide');
    }
  });
};

// Функция для обновления выбранных элементов и вызова фильтрации
const updateSelectedCandidates = () => {
  const vacancyInputs = document.querySelectorAll(
    '#select-candidates label input'
  );
  const eventInputs = document.querySelectorAll(
    '#select-candidates-event label input'
  );

  stateOfSelectCandidates.vacancy = [];
  stateOfSelectCandidates.event = [];

  setTimeout(() => {
    vacancyInputs.forEach((input) => {
      if (input.checked) {
        const label = input.closest('label');
        if (label) {
          stateOfSelectCandidates.vacancy.push(label.textContent.trim());
        }
      }
    });

    eventInputs.forEach((input) => {
      if (input.checked) {
        const label = input.closest('label');
        if (label) {
          stateOfSelectCandidates.event.push(label.textContent.trim());
        }
      }
    });

    showOrHideTableElements();
  }, 0);
};

// Добавляем обработчики событий для обновления выбранных элементов
document.querySelectorAll('#select-candidates label').forEach((label) => {
  label.addEventListener('click', updateSelectedCandidates);
  const input = label.querySelector('input');
  input.addEventListener('click', (e) => {
    e.stopPropagation();
  });
});

document.querySelectorAll('#select-candidates-event label').forEach((label) => {
  label.addEventListener('click', updateSelectedCandidates);
  const input = label.querySelector('input');
  input.addEventListener('click', (e) => {
    e.stopPropagation();
  });
});
