export const stateOfSelectDropdownVacancy = {
  onWork: true,
  closed: true,
  closedByCustomer: true,
  newBids: true,
  canceled: true,
  suspended: true,
  aboveTotalLoad: true,
};

let elemOfSelectContentVacancy = document.querySelector(
  '#select-my-vacancy .content'
);

let elemOfSelectImageVacancy = document.querySelector(
  '#select-my-vacancy .select-image'
);
elemOfSelectContentVacancy.style.display = 'none';

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

const changeTheStateOfSelectDropdownVacancy = (text) => {
  stateOfTheElem = stateOfSelectDropdownVacancy[text];
  stateOfTheElem === false
    ? (stateOfSelectDropdownVacancy[text] = true)
    : (stateOfSelectDropdownVacancy[text] = false);

  console.log(stateOfSelectDropdownVacancy);
};
