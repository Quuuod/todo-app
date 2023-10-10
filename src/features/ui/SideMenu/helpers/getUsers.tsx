import { UserOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { IUser } from "shared/types";

type MenuItem = Required<MenuProps>["items"][number];

const getItem = (
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem => {
  {
    return {
      key,
      icon,
      children,
      label,
    } as MenuItem;
  }
};

export const getUsers = (data: IUser[] | undefined) => {
  if (!data) return;

  const items: MenuItem[] = data.map((element: IUser) => {
    return getItem(element.name, element.id, <UserOutlined />);
  });

  return items;
};
