import About from "../components/About";
import AppComponent from "../components/AppComponent";
import WrappidAppLayout from "../components/layouts/WrappidAppLayout";
import Profile from "../components/Profile";
import modulesRoutesRegistry from "../modules/modules.routes.registry";

export const RoutesRegistry = {
  About: {
    Page        : { appComponent: About.name, layout: WrappidAppLayout.name },
    authRequired: false,
    entityRef   : "about",
    url         : "about"
  },
  Profile: {
    Page        : { appComponent: Profile.name, layout: WrappidAppLayout.name },
    authRequired: false,
    entityRef   : "profile",
    url         : "profile"
  },
  defaultAppRoute: {
    Page        : { appComponent: AppComponent.name, layout: WrappidAppLayout.name },
    authRequired: false,
    entityRef   : "defaultAppRoute",
    url         : "defaultAppRoute"
  },
  ...modulesRoutesRegistry
};