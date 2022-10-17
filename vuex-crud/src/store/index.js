import { createStore } from 'vuex'

export default createStore({
  state: {
    notes:[
      {
        id:0,
      Apellido: 'VALDEZ ALCEQUIES',
      Nombre: 'SONIA',
      Cédula: '001-0004779-4',
      Código: '7878',
      Programa: '6-DIRECCION DE RECURSOS HUMANOS',
      'Direccion o Dependencia': 'DIRECCION DE RECURSOS HUMANOS',
      Cargo: 'PROC. DE PENSION',
      'Fecha de ingreso': '1/02/2009',
      'Fecha de nacimiento': '10/11/1963',
      Edad: '58',
      Sexo: 'Femenino',
      Sueldo: '30,000.00 RD$',
      },   
    ]
  },
  getters: {
    getNotes: state => state.notes,
    getNote: state => id => state.notes.find(note =>  note.id === id)
  },
  mutations: {
    addingNote: (state, newNote) => state.notes.push(newNote),
    removingNote: (state, id) => (state.notes = state.note.filter(note =>  note.id != id))
  },
  actions: {

    addNote: ({commit}, newNote) => commit('addingNote', newNote),
    removeNote: ({commit}, id) => commit('removingNote', id)
  },
  modules: {
  }
})
