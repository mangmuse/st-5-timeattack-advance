import axios from "axios";

const BASE_URL = "http://localhost:4000";

class TodoAPI {
  #client;
  #baseURL = BASE_URL;

  constructor() {
    this.#client = axios.create({ baseURL: this.#baseURL });
  }

  async addTodo(todo) {
    const path = "/todos";
    const res = await this.#client.post(path, todo);
    return res.data;
  }

  async getTodos() {
    const path = "/todos";
    const res = await this.#client.get(path);

    return res.data;
  }
  async getTodo(id) {
    const path = `/todos/${id}`;
    const res = await this.#client.get(path);
    return res.data;
  }
}

const todoApi = new TodoAPI();

export default todoApi;
