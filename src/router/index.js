import {
  createRouter,
  createWebHistory
} from "vue-router";
import AuthView from "@/views/AuthView.vue";
import RegisterView from "@/views/RegisterView.vue";
import Settings from "@/views/Dashboard/DashboardSettings.vue";
import PersonalSettings from "@/views/Settings/PersonalSettings.vue";
import PathNotFound from "@/views/PageNotFound.vue";

const routes = [{
  path: "",
  redirect: "/profile"
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
    component: Settings,
    children: [
      {
        path: "personal-settings",
        component: PersonalSettings
      },
      {
        path: "personal-private-settings",
        component: () =>
          import(
            /* webpackChunkName: "PersonalPrivateSettings" */
            "@/views/Settings/PersonalPrivateSettings.vue"
          )
      },
      {
        path: "personal-common-settings",
        component: () =>
          import(
            /* webpackChunkName: "PersonalCommonSettings" */
            "@/views/Settings/PersonalCommonSettings.vue"
          )
      }
    ]
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
  { path: '/:pathMatch(.*)*', component: PathNotFound },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/auth', '/register', '/'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  if (authRequired && !loggedIn) {
    return next('/auth');
  }

  next();
})

export default router;