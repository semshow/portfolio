import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import "./scripts/skills";
import "./scripts/parallax";
import "./scripts/hamburger";
import "./scripts/works";
import "./scripts/reviews";
import "./scripts/scroll";
import Validate from "./scripts/contact";

const form = document.querySelector('.j-form');

if (form){
  const validate = new Validate({
    element: 'j-form'
  }); 
  validate.init();
}

