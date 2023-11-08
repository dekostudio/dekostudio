import type { RouterConfig } from "@nuxt/schema";
// https://router.vuejs.org/api/interfaces/routeroptions.html

export default <RouterConfig>{
  routes: (_routes) => [
    {
      name: "home",
      path: "/",
      component: () =>
        import("~/src/components/Pages/main.vue").then((r) => r.default || r),
    },
    {
      name: "offer",
      path: "/offer",
      component: () =>
        import("~/src/components/Pages/Offer.vue").then((r) => r.default || r),
    },
    {
      name: "contact",
      path: "/contact",
      component: () =>
        import("~/src/components/contact.vue").then((r) => r.default || r),
    },
  ],
};
