const inputEl = document.querySelector('#tasker');
const add_btnEl = document.querySelector('#add-task')

const task_areaEl = document.querySelector('#tasks-area');
const task_tipEl = document.querySelector('.task-tip')
const task_countEl = document.querySelector('#task-count');
let task_Count = 0;

let canAdd = false;

add_btnEl.addEventListener('click', () => {
  canAdd = true;
});

setInterval(() => {
  if (canAdd && inputEl.value !== "") {
    addTask();
  } else if (task_Count <= 0) {
    showError('Digite alguma atividade para ser listada.');
    canAdd = false;
  }

  task_countEl.innerText = task_Count <= 0 ? 'Nenhuma atividade' : `${task_Count} ${task_Count <= 1 ? 'Atividade' : 'Atividades'}`;

}, 1000 / 15);

window.addEventListener('keydown', (e) => {
  if(e.key === 'Enter') {
    if(inputEl.value !== '') {
      addTask();
    }
  }
});

function addTask() {
  const thisDate = generateTimeAndInfo();
  
  task_tipEl.style.position = 'absolute';
  task_tipEl.style.visibility = 'hidden';
  
  // Cria o elemento inicial para o cartão
  const task_divEl = document.createElement('div');
  task_divEl.classList.add('task');

  task_divEl.innerHTML = `<span class="task-text">${inputEl.value}</span><span class="task-date">${thisDate}</span>`;

  task_divEl.addEventListener("click", remove);
  
  task_divEl.addEventListener('click', markAsDone);
  
  // Botão de remoção da atividade
  // CRIAR FUNÇÂO SEPARADA
  const removeButton = document.createElement('button');
  removeButton.classList.add('red-button');
  removeButton.insertAdjacentHTML('beforeend', 'REMOVER');
  task_divEl.appendChild(removeButton);

  task_areaEl.insertAdjacentElement('beforeend', task_divEl);

  inputEl.value = '';
  
  task_Count++;
  
  canAdd = false;
}

function markAsDone(e){
  const item = e.target;
  if (item.classList[0] === 'task') {
    const task = item.parentElement;
    item.style.backgroundColor = '#33cd22';
    item.style.border = "5px solid #cd3323";
  }
}

function generateTimeAndInfo (info) {
  const data = new Date();
  
  const h = data.getHours();
  const m = data.getMinutes();
  
  const d = data.getDay();
  const mh = data.getMonth();
  const y = data.getFullYear();
  
  return `Data da tarefa: ${returnData(h)}:${returnData(m)} | ${returnData(d)}/${returnData(mh)}/${y}`;
  
  function returnData(d) {
    if(d < 10) {
      return `0${d}`;
    } else {
      return d;
    }
  }
}

function remove(e) {
  const item = e.target;
  if (item.classList[0] === 'red-button') {
    const task = item.parentElement;
    task.remove();
    task_Count--;
  }
}

function showError(err) {
  task_tipEl.style.position = 'relative';
  task_tipEl.style.visibility = 'visible';

  task_tipEl.innerText = err;
}