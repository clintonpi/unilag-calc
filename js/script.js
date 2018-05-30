(() => {
  // focus on input when window loads
  const utmeInput = document.querySelector('#utme-input');
  utmeInput.focus();

  // get utme aggregate
  const getUtmeAgg = () => {
    // get utme score
    const utmeScore = parseInt(utmeInput.value);
    // validate
    if(utmeScore > 400) {
      return;
    }
    // calculate utme aggregate
    const utmeAgg  = parseFloat((utmeScore / 8).toFixed(2));
    return utmeAgg;
  };

  // get post utme score
  const pUtmeScore = () => {
    // get post utme score
    const pUtmeInput = document.querySelector('#p-utme-input');
    const pUtmeScore = parseInt(pUtmeInput.value);
    // validate
    if(pUtmeScore > 30) {
      return;
    }
    return pUtmeScore;
  };

  // get waec aggregate
  const getWaecAgg = () =>  {
    const grades = Array.from(document.querySelectorAll('.waec-grades'));
    const waecAgg = grades
      .map(grade => parseFloat(grade.value))
      .reduce((grade, sum) => grade += sum, 0);
    return waecAgg;
  };

  // get total aggregate
  const totalAgg = (utmeAgg, pUtmeScore, waecAgg) => parseFloat(utmeAgg + pUtmeScore + waecAgg).toFixed(2);

  // get flipping cards
  const front = document.querySelector('#front');
  const back = document.querySelector('#back');

  // get forms
  const details = document.querySelector('#details');
  const result = document.querySelector('#result');
  
  // remove message
  const messageWrap = document.querySelector('#message-wrap');
  messageWrap.addEventListener('click', () => {
    messageWrap.style.display = 'none';
  });

  // listen for submit events on details form
  details.addEventListener('submit', (e) => {
    e.preventDefault();

    const utme = getUtmeAgg();
    const pUtme = pUtmeScore();
    const waec = getWaecAgg();

    const message = document.querySelector('#message');

    // display message
    if (!utme) {
      messageWrap.style.display = 'flex';
      message.innerHTML = '<p>Please enter a valid U.T.M.E score.</p><p>Click anywhere to remove this message.</p>';
      return;
    } else if (!pUtme) {
      messageWrap.style.display = 'flex';
      message.innerHTML = '<p>Please enter a valid Post U.T.M.E score.</p><p>Click anywhere to remove this message.</p>';
      return;
    }

    // show result
    document.querySelector('#inner-circle').innerHTML = totalAgg(utme, pUtme, waec);
    front.classList.add('at-back');
    back.classList.remove('at-back');
    result.firstElementChild.focus();
  });

  // listen for submit event on result form
  result.addEventListener('submit', (e) => {
    e.preventDefault();

    details.reset();
    utmeInput.focus();
    back.classList.add('at-back');
    front.classList.remove('at-back');
  });

})();