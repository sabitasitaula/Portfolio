import Banner from "../pages/Banner/Banner";
import ProjectWrapper from "../pages/Projects/ProjectWrapper";
import Contact from "../pages/Contact/Contact";
import About from "../pages/About/About";
import Services from "../pages/Services/Services";

const Routes = [
  {
    path: "/",
    element: Banner,
  },
  {
    path: "project",
    element: ProjectWrapper,
  },
  {
    path: "/contact",
    element: Contact,
  },
  {
    path: "/about",
    element: About,
  },
  {
    path: "/services",
    element: Services,
  },

];

export default Routes;
