import { RouteRecordRaw } from "vue-router";

const WelcomeIndex = () => import("~/views/welcome");
const WelcomePage = () => import("~/views/welcome/[page]");
const NotFound = () => import("~/views/[...all]");

export const routes: RouteRecordRaw[] = [
  { path: "/", redirect: "/welcome" },
  {
    path: "/welcome",
    component: WelcomeIndex,
    children: [
      { path: "", redirect: "/welcome/1" },
      {
        path: ":page",
        component: WelcomePage,
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];
