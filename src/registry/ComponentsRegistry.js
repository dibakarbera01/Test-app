import About from "../components/About";
import AppComponent from "../components/AppComponent";
import WrappidAppLayout from "../components/layouts/WrappidAppLayout";
import Profile from "../components/Profile";
// --------------------------------------
import modulesComponentsRegistry from "../modules/modules.components.registry";

export const ComponentsRegistry = {
  ...modulesComponentsRegistry,
  About           : { comp: About },
  AppComponent    : { comp: AppComponent },
  Profile         : { comp: Profile },
  WrappidAppLayout: { comp: WrappidAppLayout, layout: true }
};
