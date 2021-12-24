const actionsEl = document.querySelector("#actions");

const actionInput = document.querySelector("#task-name");
const actionValueInput = document.querySelector("#task-value");

const addAsGain = document.querySelector('#addGain')
const addAsExpansive = document.querySelector('#addExpansive')

addAsGain.addEventListener('click', addGain)
addAsExpansive.addEventListener('click', addExpansive)

function addGain() {
  const action = document.createElement('div');
  action.classList.add('action');
  action.classList.add('gain');

  action.innerHTML = 
   `
      <h1>${actionInput.value}</h1>
      <span class="value"> +R$${parseFloat(actionValueInput.value).toFixed(2)}</span>
      <h2>#data# | Ganho</h2>
  `;

  actionsEl.insertAdjacentElement("beforeend", action)
}

function addExpansive() {
  const action = document.createElement('div');
  action.classList.add('action');
  action.classList.add('expanse');

  action.innerHTML = 
   `
      <h1>${actionInput.value}</h1>
      <span class="value"> -R$${parseFloat(actionValueInput.value).toFixed(2)}</span>
      <h2>#data# | Gasto</h2>
  `;

  actionsEl.insertAdjacentElement("beforeend", action)
}
