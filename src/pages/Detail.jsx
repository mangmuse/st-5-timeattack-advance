import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import todoApi from "../api/todos";

export default function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();

  // TODO: useQuery 로 리팩터링 하세요.

  const { data, isLoading, error } = useQuery({
    queryKey: ["todos", id],
    queryFn: () => todoApi.getTodo(id),
  });

  if (isLoading) return <div style={{ fontSize: 36 }}>로딩중...</div>;
  if (error) {
    console.error(error);
    return (
      <div style={{ fontSize: 24 }}>에러가 발생했습니다: {error.message}</div>
    );
  }

  return (
    <div>
      <button onClick={() => navigate("/")}>홈으로 이동</button>
      <p>제목: {data.title}</p>
      <p>내용: {data.contents}</p>
      <p>작성일자: {new Date(data.createdAt).toDateString()}</p>
    </div>
  );
}
