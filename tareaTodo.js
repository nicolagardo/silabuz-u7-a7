const main = document.getElementById('tarea');
//let id = 1
async function getTask(id) {
  id = undefined
  if (id != undefined) {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/v1/todos/${id}`);
      const data = await response.json();
      renderTodo(data);
    } catch (error) {
      console.log(error);
    }
  } else {
    
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/v1/todos/`);
      const data = await response.json();
      renderTasks(data);
    } catch (error) {
      console.log(error);
  }
  }
}

function renderTasks(data) {
  main.innerHTML = '';
  data.forEach((task) => {
    let fechaCr = new Date(task.created_at).getTime();
    let fecheHoy = new Date().getTime();
    let diferencia = fecheHoy - fechaCr;
    main.innerHTML += `
    <div class="col-4">
      <div class="card">
        <div class="card-body">
          <h4>${task.title}</h2>
          <p>
            ${task.body}
          </p>
          <p>
            Creado hace: ${task.created_at}
            Creado hace: ${Math.round(diferencia/(1000*60*60*24))} días
            Creado hace: ${Math.round(diferencia/(1000*60*60))} horas
          </p>
          
        </div>
      </div>
    </div>`;
  });
}
function renderTodo(data){
  main.innerHTML = `<div class="col-4">
  <div class="card">
    <div class="card-body">
      <h4>Detalle</h2>
      <p>
        Título: ${data.title}
      </p>
      <p>
        ${data.body}
      </p>
      <p class="card-text"><small class="text-muted">Fecha de creación: ${data.created_at}</small></p>
      <button onClick="getTask()" class="btn btn-primary">Regresar</button>
    </div>
  </div>
</div>`
}

getTask();
