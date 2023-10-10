import { Modal } from "antd";
import { useAppStore } from "shared/store/app";
import { TaskForm } from "widgets/TaskForm";
import { editTask } from "shared/api";

export const TaskModal = () => {
  const setModal = useAppStore((state) => state.setModal);
  const modalOpen = useAppStore((state) => state.modalOpen);

  const handleCancel = () => {
    setModal();
  };

  return (
    <>
      <Modal open={modalOpen} onCancel={handleCancel} footer={null}>
        <TaskForm
          btnText={"Save"}
          isEdit={true}
          msg={"Task edited"}
          method={editTask}
          formName="edit-task-form"
        />
      </Modal>
    </>
  );
};
