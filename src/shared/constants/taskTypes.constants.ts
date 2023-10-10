import { TaskTypes } from "shared/enums";

interface ITaskTypes {
  value: number;
  label: TaskTypes;
}

export const taskTypes: ITaskTypes[] = [
  { value: 1, label: TaskTypes.ORDINARY },
  { value: 2, label: TaskTypes.URGENT },
  { value: 3, label: TaskTypes.COMPLETED },
];
