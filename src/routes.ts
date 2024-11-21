import CountryList from "./components/CountryList.vue";
import HomePage from "./components/HomePage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
    props: true,
    meta: {
      title: "REST API Countries App - Homepage",
    },
  },
  {
    path: "/:country",
    name: "country-detail",
    component: CountryList,
    props: true,
    meta: {
      title: "REST API Countries App",
    },
  },
];

export default routes;
