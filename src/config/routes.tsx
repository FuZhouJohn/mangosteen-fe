import { RouteRecordRaw } from "vue-router";

export const routes: RouteRecordRaw[] = [
  { path: "/", redirect: "/welcome" },
  {
    path: "/welcome",
    component: () => import("~/views/welcome"),
    children: [
      { path: "", redirect: "/welcome/1" },
      {
        path: ":page",
        component: () => import("~/views/welcome/[page]"),
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("~/views/[...all]"),
  },
];
