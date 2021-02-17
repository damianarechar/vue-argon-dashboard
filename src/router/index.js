import { createRouter, createWebHashHistory } from "vue-router";

import DashboardLayout from "@/layout/DashboardLayout";
import AuthLayout from "@/layout/AuthLayout";

import Dashboard from "../views/Dashboard.vue";
import Icons from "../views/Icons.vue";

const routes = [
  {
    path: "/",
    redirect: "dashboard",
    component: DashboardLayout,
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        components: { default: Dashboard }
      },
      {
        path: "/icons",
        name: "icons",
        components: { default: Icons }
      }
    ]
  },
  {
    path: "/",
    redirect: "login",
    component: AuthLayout,
    children: []
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
