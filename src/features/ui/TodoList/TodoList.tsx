import { useQuery } from "react-query";
import { ITodo } from "shared/types";
import { Empty } from "antd";

import { fetchTodos } from "./api/fetchTodos";
import { getTodos } from "./helpers";

export const TodoList = ({ status }: { status: string }) => {
  const { data }: { data: ITodo[] | undefined } = useQuery("todos", fetchTodos);
  const items = getTodos(data, status);

  return items?.length ? (
    <>{items}</>
  ) : (
    <Empty description={<span>No tasks here</span>} />
  );
};
