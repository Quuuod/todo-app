import { useEffect, useState } from "react";
import { Layout, Menu } from "antd";
import { useQuery, useQueryClient } from "react-query";
import { CreateUser } from "features";

import { fetchUsers } from "./api/fetchUsers";
import { getUsers } from "./helpers";

const { Sider } = Layout;

export const SideMenu = () => {
  const queryClient = useQueryClient();

  const [selectedUser, setSelectedUser] = useState("");

  useEffect(() => {
    setSelectedUser(localStorage.user);
    queryClient.invalidateQueries(["todos"]);
  }, [localStorage.user]);

  const { data } = useQuery("users", fetchUsers);

  const items = getUsers(data);

  const handleSelect = (key: string) => {
    setSelectedUser(key);
    localStorage.user = key;
  };

  return (
    <Sider>
      <div className="demo-logo-vertical" />
      <Menu
        theme="dark"
        selectedKeys={[selectedUser]}
        mode="inline"
        items={items}
        onSelect={({ key }) => handleSelect(key)}
      />
      <CreateUser />
    </Sider>
  );
};
