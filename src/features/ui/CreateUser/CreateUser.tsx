import { Button, Form, Input, Space, message } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useMutation, useQueryClient } from "react-query";
import { IUser } from "shared/types";

import { useCreateUser } from "./api/createUser";
import { useFormItemConfigs } from "./hooks";

export const CreateUser = () => {
  const queryClient = useQueryClient();
  const [form] = Form.useForm();

  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      type: "success",
      content: "User created",
    });
  };

  const error = () => {
    messageApi.open({
      type: "error",
      content: "User creation failed",
    });
  };

  const CreateMutation = useMutation(
    (newUser: IUser) =>
      useCreateUser(newUser).then((response: any) => {
        if (response) localStorage.setItem("user", response.id);
      }),
    {
      onSuccess: () => queryClient.invalidateQueries(["users"]),
    },
  );

  const { usernameConfig } = useFormItemConfigs();

  const handleFinish = async (fieldValues: any) => {
    CreateMutation.mutate(fieldValues);
    form.resetFields();

    success();
  };

  const handleFinishFailed = (errorInfo: any) => {
    form.scrollToField(errorInfo.errorFields[0].name[0]);
    error();
  };

  return (
    <Space direction="vertical" size="small">
      <Form
        layout={"vertical"}
        form={form}
        style={{ maxWidth: 600, margin: "20px" }}
        name="create-user-form"
        onFinish={handleFinish}
        onFinishFailed={handleFinishFailed}
      >
        <Space.Compact style={{ width: "100%" }}>
          <Form.Item {...usernameConfig}>
            <Input placeholder="Create new user" />
          </Form.Item>

          <Button
            type="primary"
            onClick={() => form.submit()}
            icon={<PlusOutlined />}
          />
        </Space.Compact>
        {contextHolder}
      </Form>
    </Space>
  );
};
