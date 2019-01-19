var controller = require('../controllers/tasks.js');
// code to talk to the server.js file
const mongoose = require('mongoose');

module.exports = function(app) {
    app.get('/tasks', controller.index)

    app.post('/task', controller.create)

    app.get('/tasks/:id', controller.show)

    app.put('/tasks/update/:id', controller.update)

    app.delete('/tasks/remove/:id', controller.destroy)

    app.post('/tasks', controller.index)
};