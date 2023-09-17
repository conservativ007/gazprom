export const stateOfSelectDropdownCandidates = {
  vacancy: true,
  event: true,
};

let elemOfSelectContentCandidates = document.querySelector(
  '#select-my-candidates .content'
);

let elemOfSelectImageCandidates = document.querySelector(
  '#select-my-candidates .select-image'
);
elemOfSelectContentCandidates.style.display = 'none';

document
  .querySelector('#select-my-candidates .select-image img')
  .addEventListener('click', () => {
    if (elemOfSelectContentCandidates.style.display === 'none') {
      elemOfSelectContentCandidates.style.display = 'block';
      elemOfSelectImageCandidates.style.transform = 'rotate(0.5turn)';
    } else {
      elemOfSelectContentCandidates.style.display = 'none';
      elemOfSelectImageCandidates.style.transform = 'rotate(1turn)';
    }
  });

const changeTheStateOfSelectDropdownCandidates = (text) => {
  stateOfTheElem = stateOfSelectDropdownCandidates[text];
  stateOfTheElem === false
    ? (stateOfSelectDropdownCandidates[text] = true)
    : (stateOfSelectDropdownCandidates[text] = false);

  console.log(stateOfSelectDropdownCandidates);
};
