import { createRouter, createWebHistory } from "vue-router";
import DashboardView from "@/views/DashboardView.vue";
import AuthView from "@/views/AuthView.vue";
import RegisterView from "@/views/RegisterView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: DashboardView,
    children: [
      {
        path: "",
        component: () =>
          import(
            /* webpackChunkName: "DashboardProfile" */ "@/views/Dashboard/DashboardProfile.vue"
          ),
      },
      {
        path: "friends",
        component: () =>
          import(
            /* webpackChunkName: "DashboardFriends" */ "@/views/Dashboard/DashboardFriends.vue"
          ),
      },
      {
        path: "messages",
        component: () =>
          import(
            /* webpackChunkName: "DashboardMessages" */ "@/views/Dashboard/DashboardMessages.vue"
          ),
      },
      {
        path: "settings",
        component: () =>
          import(
            /* webpackChunkName: "DashboardSettings" */ "@/views/Dashboard/DashboardSettings.vue"
          ),
      },
    ],
  },
  {
    path: "/streams",
    component: () =>
      import(
        /* webpackChunkName: "StreamsSettings" */ "@/views/StreamsView.vue"
      ),
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: DashboardView,
    children: [
      {
        path: "profile",
        component: () =>
          import(
            /* webpackChunkName: "DashboardProfile" */ "@/views/Dashboard/DashboardProfile.vue"
          ),
      },
      {
        path: "friends",
        component: () =>
          import(
            /* webpackChunkName: "DashboardFriends" */ "@/views/Dashboard/DashboardFriends.vue"
          ),
      },
      {
        path: "messages",
        component: () =>
          import(
            /* webpackChunkName: "DashboardMessages" */ "@/views/Dashboard/DashboardMessages.vue"
          ),
      },
      {
        path: "settings",
        component: () =>
          import(
            /* webpackChunkName: "DashboardSettings" */ "@/views/Dashboard/DashboardSettings.vue"
          ),
      },
      {
        path: "user/:id",
        component: () =>
          import(
            /* webpackChunkName: "DashboardSettings" */ "@/views/Dashboard/DashboardUser.vue"
          ),
      },
    ],
  },
  {
    path: "/auth",
    component: AuthView,
  },
  {
    path: "/register",
    component: RegisterView,
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
