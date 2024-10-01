
const tareas = [];


function agregarTarea(descripcion) {
    const tarea = {
        descripcion: descripcion,
        completada: false
    };
    tareas.push(tarea);
    console.log(`Tarea agregada: "${descripcion}"`);
}


function marcarTareaComoCompletada(descripcion) {
    const tarea = tareas.find(t => t.descripcion === descripcion);
    if (tarea) {
        tarea.completada = true;
        console.log(`Tarea completada: "${descripcion}"`);
    } else {
        console.log(`No se encontró la tarea: "${descripcion}"`);
    }
}


function listarTareasPendientes() {
    const tareasPendientes = tareas.filter(t => !t.completada);
    console.log("Tareas pendientes:");
    if (tareasPendientes.length === 0) {
        console.log("No hay tareas pendientes.");
    } else {
        tareasPendientes.forEach(t => console.log(`- ${t.descripcion}`));
    }
}


function listarTareasCompletadas() {
    const tareasCompletadas = tareas.filter(t => t.completada);
    console.log("Tareas completadas:");
    if (tareasCompletadas.length === 0) {
        console.log("No hay tareas completadas.");
    } else {
        tareasCompletadas.forEach(t => console.log(`- ${t.descripcion}`));
    }
}


agregarTarea("Comprar leche");
agregarTarea("Llamar al médico");
agregarTarea("Estudiar JavaScript");


marcarTareaComoCompletada("Comprar leche");


listarTareasPendientes();
listarTareasCompletadas();
