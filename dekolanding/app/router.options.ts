import type {RouterConfig} from "@nuxt/schema";
// https://router.vuejs.org/api/interfaces/routeroptions.html

export default <RouterConfig>{
    routes: (_routes) => {
      return [
        {
          name: "home",
          path: "/",
          component: () =>
              import("~/src/components/Pages/index.vue").then((r) => r.default || r),
        },
        {
          name: "contact",
          path: "/contact",
          component: () =>
              import("~/src/components/contact.vue").then((r) => r.default || r),
        },
      ];
    },
};
