import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:3000/',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  timeout: 10000
})

export default {
  getTasks() {
    return apiClient.get('/tasks')
  },
  getTask(id) {
    return apiClient.get('/tasks/' + id)
  },
  postTask(task) {
    return apiClient.post('/tasks', task)
  },
  editTaskTitle(id, title) {
    return apiClient.put('/tasks/' + id + '?title=' + title, { title: title })
  },
  deleteTask(id) {
    return apiClient.delete('/tasks/' + id)
  }
}
