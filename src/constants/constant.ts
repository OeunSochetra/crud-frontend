import IconLibrary from "../components/icons/IconLibrary.vue";
import IconSetting from "../components/icons/IconSetting.vue";
import IconSearch from "../components/icons/IconSearch.vue";
import IconHome from "../components/icons/IconHome.vue";
import IconQuestion from "../components/icons/IconQuestion.vue";

export const menu = [
  {
    name: "Home",
    icon: IconHome,
    route: "/",
  },
  {
    name: "Products",
    icon: IconLibrary,
    route: "#",
  },
  {
    name: "Setting",
    icon: IconSetting,
    route: "#",
  },
  {
    name: "Search",
    icon: IconSearch,
    route: "#",
  },
  {
    name: "Question",
    icon: IconQuestion,
    route: "#",
  },
];
