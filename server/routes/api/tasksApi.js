const express = require('express');
const router = express.Router();

const TaskModel = require('../../models/TaskModel');

// @route GET api/tasks/test
// @description tests tasks route
// @access Public
router.get('/test', (req, res) => res.send('Task route test: Successfull!'));

// @route GET api/tasks
// @description Get all tasks
// @access Public
router.get('/', (req, res) => {
    TaskModel.find()
        .then(tasks => res.json(tasks))
        .catch(err => res.status(404).json({ notasksfound: 'No Tasks found' }));
});

// @route GET api/tasks/:id
// @description Get single task by id
// @access Public
router.get('/:id', (req, res) => {
  TaskModel.findById(req.params.id)
    .then(task => res.json(task))
    .catch(err => res.status(404).json({ notaskfound: 'No Task found' }));
});

// @route GET api/tasks
// @description add/save task
// @access Public
router.post('/', (req, res) => {
  TaskModel.create(req.body)
    .then(task => res.json({ msg: 'Task added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this task' }));
});

// @route GET api/tasks/:id
// @description Update task
// @access Public
router.put('/:id', (req, res) => {
  TaskModel.findByIdAndUpdate(req.params.id, req.body)
    .then(task => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/tasks/:id
// @description Delete task by id
// @access Public
router.delete('/:id', (req, res) => {
  TaskModel.findByIdAndRemove(req.params.id, req.body)
    .then(task => res.json({ mgs: 'Task entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a task' }));
});

module.exports = router;