import { FloatButton, Layout, theme, Collapse } from "antd";
import { TodoList, SideMenu } from "features";
import { TaskForm, TaskModal } from "widgets";
import { createTask } from "shared/api";
import type { CollapseProps } from "antd";

const { Content } = Layout;

export const MainPage = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: "Urgent tasks",
      children: <TodoList status={"Urgent"} />,
    },
    {
      key: "2",
      label: "Tasks in progress",
      children: <TodoList status={"Ordinary"} />,
    },
    {
      key: "3",
      label: "Completed Tasks",
      children: <TodoList status={"Completed"} />,
    },
  ];

  return (
    <Layout style={{ minHeight: "100vh", margin: 0 }}>
      <SideMenu />
      <Layout>
        <Content style={{ margin: "50px" }}>
          <TaskForm
            btnText={"Create"}
            isEdit={false}
            msg={"Task created"}
            method={createTask}
            formName="create-task-form"
          />
          <div
            style={{
              padding: 24,
              background: colorBgContainer,
            }}
          >
            <Collapse
              style={{ minWidth: "100%" }}
              items={items}
              defaultActiveKey={["1", "2", "3"]}
              ghost
            />
          </div>
        </Content>
      </Layout>
      <TaskModal />
      <FloatButton.BackTop />
    </Layout>
  );
};
