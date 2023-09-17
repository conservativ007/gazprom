export const stateOfSelectDropdownBids = {
  bids: true,
  closed: true,
  rejected: true,
  draft: true,
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

const changeTheStateOfSelectDropdownBids = (text) => {
  stateOfTheElem = stateOfSelectDropdownBids[text];
  stateOfTheElem === false
    ? (stateOfSelectDropdownBids[text] = true)
    : (stateOfSelectDropdownBids[text] = false);

  console.log(stateOfSelectDropdownBids);
};
