import { create } from "zustand";
import { persist } from "zustand/middleware";


export const useStore = create(
  persist(
    (set) => ({
      plants: [],
      setPlants: (data) => set({ plants: data }),
      clearPlants: () => set({ plants: [] }),
      removePlant: (plantName) =>
        set((state) => ({
          plants: state.plants.filter((plant) => plant !== plantName)
        })),
    }),
    {
      name: "plants-storage", // clave en localStorage
      getStorage: () => localStorage,
    }
  )
);
