import axios from "axios";

const URL = `https://todo-jp-list.vercel.app/public/todo/`;


export function getAllTask() {
  return axios.get(URL + "all").then((res) => {
    return res.data;
  });
}

export function createTask(data) {
  return axios.post(URL + "create", data).then((res) => {
    return res.data;
  });
}

export function putTask(data) {
  return axios.put(URL, data).then((res) => {
    return res.data;
  });
}

export function deleteTask(id) {
  return axios.delete(`${URL}${id}`).then((res) => {
    return res.data;
  });
}
