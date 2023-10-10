import { CheckOutlined, DeleteOutlined } from "@ant-design/icons";
import { useMutation, useQueryClient } from "react-query";
import { IDoneParams } from "shared/types";
import { TaskTypes } from "shared/enums";

import { useDeleteTask, useDoneTask } from "../api";

export const getActions = (id: string, type: string) => {
  const queryClient = useQueryClient();

  const doneMutation = useMutation(
    (params: IDoneParams) => useDoneTask(params),
    {
      onSuccess: () => queryClient.invalidateQueries(["todos"]),
    },
  );

  const deleteMutation = useMutation((id: string) => useDeleteTask(id), {
    onSuccess: () => queryClient.invalidateQueries(["todos"]),
  });
  const handleDone = () => {
    doneMutation.mutate({ id, type: TaskTypes.COMPLETED });
  };
  const handleDelete = () => {
    deleteMutation.mutate(id);
  };

  if (type === TaskTypes.COMPLETED) {
    return [
      <DeleteOutlined
        key="delete"
        onClick={(event) => {
          event.stopPropagation();
          handleDelete();
        }}
      />,
    ];
  }

  return [
    <CheckOutlined
      key="done"
      onClick={(event) => {
        event.stopPropagation();
        handleDone();
      }}
    />,
    <DeleteOutlined
      key="delete"
      onClick={(event) => {
        event.stopPropagation();
        handleDelete();
      }}
    />,
  ];
};
