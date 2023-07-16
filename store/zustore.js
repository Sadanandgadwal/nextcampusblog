import { create } from "zustand";
import { persist } from "zustand/middleware";

export const tokenStore = create(
  persist(
    (set) => ({
      token: "",
      userid: "",
      data: "",
      Action: (val) => set((state) => ({ token: val })),
      UserAction: (val) => set((state) => ({ userid: val })),
      UserData: (val) => set((state) => ({ data: val })),
    }),
    { name: "userinfo" }
  )
);

// export const Dashboard = create((set) => ({
//   componentState: "",
//   Action: (val) => set((state) => ({ componentState: val })),
// }));
// export const useWatchListStore = create(
//   persist(watchListStore, { name: "watchList" })
// );
