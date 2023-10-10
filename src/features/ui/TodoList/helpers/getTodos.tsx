import { ITodo } from "shared/types";
import { TaskCard } from "widgets";

export const getTodos = (data: ITodo[] | undefined, status: string) => {
  if (!data) return;
  const res = data
    .filter(({ user }) => {
      return user === localStorage.user;
    })
    .filter(({ type }) => type === status)
    .map(({ title, createdAt, user, description, type, id, completed }) => (
      <TaskCard
        title={title}
        type={type}
        id={id}
        description={description}
        key={id + user}
        user={user}
        createdAt={createdAt}
        completed={completed}
      />
    ))
    .reverse();

  return res;
};
