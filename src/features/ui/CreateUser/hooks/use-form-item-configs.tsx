import { FormItemProps } from "antd";
import { useMemo } from "react";

export const useFormItemConfigs = () => {
  const usernameConfig = useMemo<FormItemProps>(
    () => ({
      name: "name",
      rules: [
        {
          required: true,
          message: "Required Field",
        },
      ],
    }),
    [],
  );
  return {
    usernameConfig,
  };
};
