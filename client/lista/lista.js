import { Tarefas } from '../../models/tarefas'

Template.lista.helpers({
  tarefas: function () {
    return Tarefas.find({})
  },

  formataData: function () {
    return moment(this.data).format('DD/MM/YYYY - HH:mm')
  },
})

Template.lista.events({
  'click #atualizar': function (event) {
    console.log('Atualizar')
  },
  'click #excluir': function (event) {
    Meteor.call('remove', this._id)
  },
})
