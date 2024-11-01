import IconLibrary from "../components/icons/IconLibrary.vue";
import IconSetting from "../components/icons/IconSetting.vue";
import IconSearch from "../components/icons/IconSearch.vue";
import IconHome from "../components/icons/IconHome.vue";
import IconQuestion from "../components/icons/IconQuestion.vue";
import RouteName from "./router-name";

export const menu = [
  {
    id: 1,
    name: "Home",
    icon: IconHome,
    route: RouteName.INDEX,
  },
  {
    id: 2,
    name: "Products",
    icon: IconLibrary,
    route: RouteName.LIBRARY,
  },
  {
    id: 3,
    name: "Setting",
    icon: IconSetting,
    route: RouteName.SETTING,
  },
  {
    id: 4,
    name: "Search",
    icon: IconSearch,
    route: RouteName.SEARCH,
  },
  {
    id: 5,
    name: "Question",
    icon: IconQuestion,
    route: RouteName.QUESTION,
  },
];
