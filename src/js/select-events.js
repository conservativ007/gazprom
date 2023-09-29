// сворачивание разворачивание селекта (event)
// CANDIDATES
let elemOfSelectContentCandidatesEvent = document.querySelector(
  '#select-candidates-event'
);

let elemOfSelectImageCandidatesVacancy = document.querySelector(
  '#select-my-candidates-event .select-image'
);

document
  .querySelector('#select-my-candidates-event .select-image img')
  .addEventListener('click', () => {
    elemOfSelectContentCandidatesEvent.classList.toggle('hide');
    elemOfSelectImageCandidatesVacancy.classList.toggle(
      'select-image-rotate-up'
    );
  });
