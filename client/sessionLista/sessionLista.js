Template.sessionLista.onCreated(function () {
  Session.set('tasks', [])
})

Template.sessionLista.helpers({
  tarefas: function () {
    return Session.get('tasks')
  },
})

Template.sessionLista.events({
  'click #excluir': function (event) {
    const taskId = event.currentTarget.attributes[1].value

    const tasks = Session.get('tasks')

    const filtedTasks = tasks.filter(task => task.taskId != taskId)

    Session.set('tasks', filtedTasks)
  },
})
