const actionsEl = document.querySelector("#actions");

const actionInput = document.querySelector("#task-name");
const actionValueInput = document.querySelector("#task-value");
const actionTypeOp = document.querySelector("#type")

const add = document.querySelector('#add-action');

add.addEventListener('click', create_action);

const actions = [];

function refresh_action_on_display () {
  actionsEl.innerHTML = '';
  for(let i=0; i < actions.length; i++) {
    show_action_on_list(actions[i]);
  }
}

function create_action() {
  const action = {};

  function generate_date() {
    const DT = new Date;
    const day = DT.getDate();
    const mouth = DT.getMonth() + 1;

    return `${day < 10 ? '0' + day : day}/${mouth < 10 ? '0' + mouth : mouth}`;
  }

  action.date = generate_date();

  if (actionInput.value == '') {
    alert('Adicione um nome para a ação');
    return;
  } else {
    action.name = actionInput.value;
  }
  if (actionValueInput.value == '' || actionValueInput.value <= 0) {
    alert('Adicione um valor válido para essa ação.');
    return;
  } else {
    action.value = actionValueInput.value;
  }

  if (actionTypeOp.value == 'default') {
    alert('Selecione uma opção.');
    return;
  } else {
    action.type = actionTypeOp.value;
  }

  //console.log(action)
  
  actions.push(action);
  
  refresh_action_on_display();
}

const show_action_on_list = (action) => {
  const actionEl = document.createElement('div');
  actionEl.classList.add('action');

  if (action.type != null) {
    actionEl.classList.add(action.type == 'gain' ? 'gain' : 'expanse');
  } else {
    alert("internal error: actionType not defined");
  }

  actionEl.innerHTML =
    `
     <h1>${action.name}</h1>
     <span class="value"> ${action.type == 'gain' ? '+' : '-'}R$${parseFloat(action.value).toFixed(2)} </span>
     <h2>Data: ${action.date}</h2>
   `;

  actionsEl.insertAdjacentElement('beforeend', actionEl);
  
  actionInput.value = '';
  actionValueInput.value = '';
}