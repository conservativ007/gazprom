let elemOfTabCandidates = document.querySelector('[content_id="candidates"]');

elemOfTabCandidates.addEventListener('click', () => {
  let elemsOfImglist = document.querySelectorAll('.img-list');
  elemsOfImglist.forEach((e) =>
    e.addEventListener('click', handleClickElemsOfImglist)
  );
});

const handleClickElemsOfImglist = (e) => {
  let parentWithClass = e.target.closest('.cell.vacancy-content');
  let elemOfChildHide = null;

  if (parentWithClass) {
    elemOfChildHide = parentWithClass.querySelector('.candidates');
  }

  if (elemOfChildHide !== null) {
    elemOfChildHide.classList.toggle('hide');
  }
};
