import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { ITodo } from "shared/types";

interface AppState {
  todo: ITodo | null;
  modalOpen: boolean;

  setModal: (item?: ITodo) => void;
}

export const useAppStore = create<AppState>()(
  devtools((set, get) => ({
    todo: null,
    modalOpen: false,

    setModal: (item?: ITodo) => {
      if (item) {
        set({
          todo: item,
        });
      }
      set({
        modalOpen: !get().modalOpen,
      });
    },
  })),
);
