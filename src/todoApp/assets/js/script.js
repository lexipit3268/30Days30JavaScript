const todoForm = document.querySelector('form');
const todoInput = document.getElementById('todo-input');
const todoListUL = document.getElementById('todo-list');

let allTodos = getTodos();
updateTodoList();

todoForm.addEventListener('submit', function(e){
   e.preventDefault();
   addTodo();
})

function addTodo(){

   const todoText = todoInput.value.trim();
   if(todoText.length > 0){
      const todoObject = {
         text: todoText,
         completed: false
      }
      allTodos.push(todoObject);
      updateTodoList();
      saveTodos();
      todoInput.value = "";
   }   
}

function updateTodoList(){
   todoListUL.innerHTML = "";
   allTodos.forEach((todo, todoIndex) => {
      todoItem = createTodoItem(todo, todoIndex);
      todoListUL.append(todoItem);
   })
}

function createTodoItem(todo, todoIndex){
   const todoLI = document.createElement("li");
   const todoID = "todo-"+todoIndex;
   const todoText = todo.text;
   todoLI.className = "todo";
   todoLI.innerHTML = `
      <input type="checkbox" name="" id="${todoID}">
      <label for="${todoID}" class="custom-checkbox">
         <svg fill="transparent" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>
      </label>
      <label for="${todoID}" class="todo-text">${todoText}</label>
      <button class="del-btn">
         <svg fill="var(--secondary-color)" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
      </button>
   `;

   const delButton = todoLI.querySelector(".del-btn");
   delButton.addEventListener("click", () => {
      deleteTodoItem(todoIndex);
   })
   const checkbox = todoLI.querySelector("input")
   checkbox.addEventListener("change", ()=>{
      allTodos[todoIndex].completed = checkbox.checked;
      saveTodos();
   })
   checkbox.checked = todo.completed;
   return todoLI; 
}

function deleteTodoItem(todoIndex){
   allTodos = allTodos.filter((_, i)=> i !== todoIndex);
   saveTodos();
   updateTodoList();
}

function saveTodos(){
   const todosJson = JSON.stringify(allTodos);
   localStorage.setItem("todos",todosJson);
}

function getTodos(){
   const todos = localStorage.getItem("todos") || "[]";
   return JSON.parse(todos);
}



const wrapper = document.querySelector('.wrapper');
const particlesCursor = document.getElementById('particles-cursor');

let lastParticleTime = 0;
const particleInterval = 1000 / 30; 

function spawnParticle(x, y) {
   const particle = document.createElement('div');
   particle.className = 'particle';

   const colors = [
      'radial-gradient(circle at 40% 40%, #00FFC4 0%, #00bfae 60%, #4A4D57 100%)',
      'radial-gradient(circle at 60% 60%, #00FFC4 0%, #4A4D57 80%, #00bfae 100%)',
      'radial-gradient(circle at 50% 50%, #00FFC4 0%, #00bfae 40%, #4A4D57 100%)'
   ];
   particle.style.background = colors[Math.floor(Math.random() * colors.length)];

   const size = 8 + Math.random() * 8;
   particle.style.width = `${size}px`;
   particle.style.height = `${size}px`;
   particle.style.left = `${x - size/2}px`;
   particle.style.top = `${y - size/2}px`;

   particlesCursor.appendChild(particle);

   const angle = Math.random() * Math.PI * 2;
   const distance = 18 + Math.random() * 24;
   const scale = 0.5 + Math.random() * 0.5;

   gsap.to(particle, {
      x: Math.cos(angle) * distance,
      y: Math.sin(angle) * distance,
      scale: scale,
      opacity: 0,
      duration: 0.35 + Math.random() * 0.18,
      ease: "expo.out",
      onComplete: () => {
         particle.remove();
      }
   });
}

document.addEventListener('mousemove', (e) => {
   const now = Date.now();
   if (now - lastParticleTime < particleInterval) return;
   lastParticleTime = now;

   const rect = wrapper.getBoundingClientRect();
   const x = e.clientX;
   const y = e.clientY;
   if (
      x < rect.left ||
      x > rect.right ||
      y < rect.top ||
      y > rect.bottom
   ) {
      spawnParticle(x, y);
   }
});