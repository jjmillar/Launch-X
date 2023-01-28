const Task = require('../models/task');

// ESTE ES EL CONTROLADOR
class TaskList {

    /**
     * Manejar APIs y despliega y maneja los tasks
     * @param {Task} taskObjeto
     */
    constructor(taskObjeto) {
        this.taskObjeto = taskObjeto
    }

    async showTasks(req, res) {
        const querySpec = {
            query: "SELECT * FROM root r WHERE r.completed=@completed",
            parameter: {
                name: "@completed",
                value: false
            }
        }

        const items = await this.taskObjeto.find(querySpec);
        res.render("index", {
            title: "Mi lista de pendientes",
            tasks: items
        });

    }

}