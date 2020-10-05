import { Tarefas } from '../models/tarefas'

Meteor.methods({
  adiciona: function (obj) {
    Session.set({
      nome: obj.nome,
      data: new Date(),
      usuario: this.userId,
    })
  },
  remove: function (id) {
    Tarefas.remove({ _id: id, usuario: this.userId })
  },
  atualiza: function (id) {
    Tarefas.updateOne({ _id: id, usuario: this.userId })
  },
})
