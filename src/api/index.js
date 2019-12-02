import axios from "axios";

const client = axios.create({
  baseURL: 'https://test.megapolis-it.ru/api/list'
});


export default {
  fetchTodos() {
    return client.get(``)
    .then(({data}) => ({items: data.data}))
  },
  addTodo(clientData) {
    return client.post(``, clientData)
    .then(({data}) => data)
  },
  editTodo(id, clientData) {
    return client.post(`${id}`, clientData)
  },
  deleteTodo(id) {
    return client.delete(`${id}`)
  },
}