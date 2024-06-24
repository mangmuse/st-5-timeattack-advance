import { useState } from "react";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import todoApi from "../api/todos";

export default function TodoForm({}) {
  const queryClient = useQueryClient();
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const { mutateAsync: addTodo } = useMutation({
    mutationFn: (todo) => todoApi.addTodo(todo),
    onSuccess: () => {
      queryClient.invalidateQueries(["todos"]);
    },
  });
  // TODO: useMutation 으로 리팩터링 하세요.
  const handleAddTodo = async (e) => {
    e.preventDefault();
    await addTodo({
      id: Date.now().toString(),
      title,
      contents,
      isCompleted: false,
      createdAt: Date.now(),
    });
    setTitle("");
    setContents("");
  };

  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="title">제목:</label>
      <input
        type="text"
        id="title"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <label htmlFor="contents">내용:</label>
      <input
        id="contents"
        name="contents"
        value={contents}
        onChange={(e) => setContents(e.target.value)}
        required
      />
      <button type="submit">추가하기</button>
    </form>
  );
}
