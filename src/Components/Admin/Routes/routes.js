import Dashboard from "../Dashboard";
import Slider from "../Slider/Slider";
import AddSlider from "../Slider/AddSlider";
import Contact from "../Contact/Contact";
import About from "../About/About";
import Gallery from "../Gallery/Gallery";
import AddGallery from "../Gallery/AddGallery";
import ChangePassword from "../Auth/ChangePassword";
const  useraccess  = localStorage.getItem("user")    


const routes = [
  { exact: true, path: "/dashboard", component: Dashboard },
  { exact: true, path: "/slider", component: Slider },
  { exact: true, path: "/contact", component: Contact },
  { exact: true, path: "/addslider", component: AddSlider },
  { exact: true, path: "/about", component: About },
  { exact: true, path: "/gallery", component: Gallery },
  { exact: true, path: "/addgallery", component: AddGallery },
  { exact: true, path: "/changepassword", component: ChangePassword },
];

export default routes;
