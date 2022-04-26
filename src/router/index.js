import {
  createRouter,
  createWebHistory
} from "vue-router";
import AuthView from "@/views/AuthView.vue";
import RegisterView from "@/views/RegisterView.vue";

const routes = [{
    path: "",
    redirect: "profile"
  },
  {
    path: "/profile",
    component: () => import("@/views/Dashboard/DashboardProfile.vue")
  },
  {
    path: "/friends",
    component: () =>
      import(
        /* webpackChunkName: "DashboardFriends" */
        "@/views/Dashboard/DashboardFriends.vue"
      )

  },
  {
    path: "/messages",
    component: () =>
      import(
        /* webpackChunkName: "DashboardMessages" */
        "@/views/Dashboard/DashboardMessages.vue"
      )

  }, {
    path: "/settings",
    component: () =>
      import(
        /* webpackChunkName: "DashboardSettings" */
        "@/views/Dashboard/DashboardSettings.vue"
      ),
  },
  {
    path: "/streams",
    component: () =>
      import(
        /* webpackChunkName: "StreamsSettings" */
        "@/views/StreamsView.vue"
      ),
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

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/auth', '/streams', '/register', '/'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  if (authRequired && !loggedIn) {
    return next('/auth');
  }

  next();
})

export default router;