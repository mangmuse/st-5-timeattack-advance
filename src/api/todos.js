import axios from "axios";

export const todoApi = axios.create({
  baseURL: "http://localhost:4000",
});

export const patchTodo = async (id, updated) => {
  const res = await todoApi.patch(`/todos/${id}`, updated);
  return res.data;
};

export default todoApi;
