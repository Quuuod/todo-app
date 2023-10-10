import { Card } from "antd";
import { CheckCircleTwoTone, FireTwoTone } from "@ant-design/icons";
import { useAppStore } from "shared/store/app";
import { ITodo } from "shared/types";

import { getActions } from "./getActions";

export const TaskCard = ({
  title,
  createdAt,
  user,
  description,
  type,
  id,
  completed,
}: ITodo) => {
  const setModal = useAppStore((state) => state.setModal);

  const handleClick = () => {
    setModal({ title, createdAt, user, description, type, id, completed });
  };
  return (
    <Card
      style={{
        marginBottom: "20px",
        maxWidth: "100%",
        minWidth: "50vw",
      }}
      title={title}
      bordered={true}
      hoverable
      onClick={() => handleClick()}
      actions={[...getActions(id, type)]}
      extra={
        <>
          {type === "Urgent" ? (
            <>
              <FireTwoTone twoToneColor={"orange"} />
            </>
          ) : type === "Completed" ? (
            <>
              <CheckCircleTwoTone twoToneColor={"green"} />
            </>
          ) : (
            ""
          )}
        </>
      }
    >
      <p>{description}</p>
    </Card>
  );
};
