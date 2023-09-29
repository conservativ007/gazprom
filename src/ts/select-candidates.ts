// export const stateOfSelectDropdownCandidates = {
//   vacancy: true,
//   event: true,
// };

interface ITestObj {
  selectedCandidates: string[];
  getSelectedCandidates: () => string[];
  setSelectedCandidates: (candidate: string) => void;
  clearSelectedCandidates: () => void;
}
export const selectCandidatesInit = () => {
  let testObj: ITestObj = {
    selectedCandidates: [],
    getSelectedCandidates: function () {
      return this.selectedCandidates;
    },
    setSelectedCandidates: function (candidate) {
      console.log(candidate);
      this.selectedCandidates.push(candidate);
    },
    clearSelectedCandidates: function () {
      this.selectedCandidates = [];
    },
  };

  const getSelectedCandidates = () => {
    // Получаем все <input> внутри элемента с id "select-candidates"
    const inputs = document.querySelectorAll('#select-candidates input');
    testObj.clearSelectedCandidates();
    // Пройдемся по каждому <input> и проверим его состояние
    // setTimeout нужен для задержки, чтобы успело перерисоваться DOM дерево
    console.log(testObj);
    setTimeout(() => {
      inputs.forEach((input) => {
        if (input instanceof HTMLInputElement && input.checked) {
          const label = input.closest('label');
          if (label) {
            testObj.setSelectedCandidates(label.textContent.trim());
          }
        } else {
        }
      });
    }, 0);
  };

  document.querySelectorAll('#select-candidates label').forEach((label) => {
    label.addEventListener('click', getSelectedCandidates);

    const input = label.querySelector('input');
    input.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  });

  // const changeTheStateOfSelectDropdownCandidates = (text: string) => {
  //   let stateOfTheElem = stateOfSelectDropdownCandidates[text];
  //   stateOfTheElem === false
  //     ? (stateOfSelectDropdownCandidates[text] = true)
  //     : (stateOfSelectDropdownCandidates[text] = false);

  //   // console.log(stateOfSelectDropdownCandidates);
  // };

  let elemOfSelectContentCandidates = document.querySelector(
    '#select-my-candidates .content'
  ) as HTMLElement;

  let elemOfSelectImageCandidates = document.querySelector(
    '#select-my-candidates .select-image'
  ) as HTMLElement;
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
};

// let elemsOfSelectCandidates = document.querySelectorAll(
//   '#select-candidates input'
// );
// let keysOfStateOfSelectDropdownCandidates = Object.keys(
//   stateOfSelectDropdownCandidates
// );

// elemsOfSelectCandidates.forEach((elem, index) => {
//   elem.addEventListener('click', () =>
//     changeTheStateOfSelectDropdownCandidates(
//       keysOfStateOfSelectDropdownCandidates[index]
//     )
//   );
// });
