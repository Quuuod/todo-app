import { FormItemProps } from "antd";
import { useMemo } from "react";

export const useFormItemConfigs = () => {
  const titleConfig = useMemo<FormItemProps>(
    () => ({
      name: "title",
      label: "Title",
      rules: [
        {
          required: true,
          message: "Required Field",
        },
      ],
    }),
    [],
  );
  const descriptionConfig = useMemo<FormItemProps>(
    () => ({
      name: "description",
      label: "Description",
      rules: [
        {
          required: true,
          message: "Required Field",
        },
      ],
    }),
    [],
  );
  const typeConfig = useMemo<FormItemProps>(
    () => ({
      name: "type",
      label: "Type",
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
    descriptionConfig,
    typeConfig,
    titleConfig,
  };
};
