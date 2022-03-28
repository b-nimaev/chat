import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ChatSearch from "@/views/Chat/ChatSearch.vue";
import DashboardView from "@/views/DashboardView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/profile",
    name: "profile",
    component: () =>
      import(/* webpackChunkName: "profile" */ "../views/ProfileView.vue"),
  },
  {
    path: "/chat",
    name: "chat",
    component: () =>
      import(/* webpackChunkName: "chat" */ "@/views/Chat/ChatView.vue"),
    children: [
      {
        path: "",
        component: ChatSearch,
      },
    ],
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
    ],
  },
  {
    path: "/auth",
    component: () =>
      import('@/views/AuthView.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
