import "./styles/main.pcss";

if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import "./scripts/hamburgerMenu";
import "./scripts/parallax";
import "./scripts/parallaxReviews";
import "./scripts/scrollTo";
import "./scripts/skills";
import "./scripts/works"
import "./scripts/sliderReviews"
import "./scripts/forms"