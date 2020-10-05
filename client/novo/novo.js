Template.novo.events({
  'submit form'(event) {
    event.preventDefault()

    const input = document.querySelector('#tarefa')
    const nome = input.value

    const tasks = Session.get('tasks')

    tasks.push({ taskId: tasks.length, nome: nome })
    Session.set('tasks', tasks)

    input.value = ''
  },
})
