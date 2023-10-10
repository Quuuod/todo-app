import { Button, Form, Input, Select, message } from "antd";
import { useMutation, useQueryClient } from "react-query";
import { taskTypes } from "shared/constants";
import { useAppStore } from "shared/store/app";
import { ITaskFormItems, ITaskFormProps } from "shared/types";
import { useEffect } from "react";
import { TaskTypes } from "shared/enums";

import { getParameters } from "./helpers";
import { useFormItemConfigs } from "./hooks";

const { Option } = Select;

export const TaskForm = ({
  isEdit,
  btnText,
  msg,
  method,
  formName,
}: ITaskFormProps) => {
  const todo = useAppStore((state) => state.todo);
  const setModal = useAppStore((state) => state.setModal);

  if (!todo && isEdit) return <></>;

  const queryClient = useQueryClient();
  const [form] = Form.useForm();

  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    if (isEdit) {
      form.setFieldsValue({ ...todo });
    }
  }, [form, todo]);

  const success = (text: string) => {
    messageApi.open({
      type: "success",
      content: text,
    });
  };

  const error = (text: string) => {
    messageApi.open({
      type: "error",
      content: text,
    });
  };

  const mutation = useMutation((params: ITaskFormItems) => method(params), {
    onSuccess: () => queryClient.invalidateQueries(["todos"]),
  });

  const { titleConfig, descriptionConfig, typeConfig } = useFormItemConfigs();

  const handleFinish = async (fieldValues: ITaskFormItems) => {
    const res = getParameters(fieldValues);
    const id = todo ? todo.id : "";
    isEdit
      ? (mutation.mutate({ id, ...res }), setModal())
      : mutation.mutate(getParameters(fieldValues));

    form.resetFields();
    success(msg);
  };

  const handleFinishFailed = (errorInfo: any) => {
    form.scrollToField(errorInfo.errorFields[0].name[0]);
    error("Сomplete all required fields");
  };

  return (
    <Form
      layout={"vertical"}
      form={form}
      style={{ maxWidth: 600, margin: "20px" }}
      name={formName}
      onFinish={handleFinish}
      onFinishFailed={handleFinishFailed}
    >
      <Form.Item {...titleConfig}>
        <Input placeholder="Create a title for the task" />
      </Form.Item>
      <Form.Item {...descriptionConfig}>
        <Input placeholder="Describe the task" />
      </Form.Item>
      <Form.Item {...typeConfig}>
        <Select placeholder="Choose task type" allowClear>
          {taskTypes.map(
            ({ label, value }: { label: TaskTypes; value: number }) => (
              <Option key={value} value={label}>
                {label}
              </Option>
            ),
          )}
        </Select>
      </Form.Item>

      <Button type="primary" onClick={() => form.submit()}>
        {btnText}
      </Button>
      {contextHolder}
    </Form>
  );
};
