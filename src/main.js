import "./styles/main.pcss";

if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import "./scripts/hamburger-menu";
import "./scripts/parallax";
import "./scripts/parallax-reviews";
import "./scripts/scroll-to";
import "./scripts/skills";
import "./scripts/works"
import "./scripts/sliderReviews"