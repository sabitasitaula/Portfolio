import Banner from "../pages/Banner/Banner";
import ProjectWrapper from "../pages/Projects/ProjectWrapper";
import Contact from "../pages/Contact/Contact";

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
];

export default Routes;
