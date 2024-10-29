import timer from "./modules/timer";
import toggleMenu from "./modules/menu";
import modal from "./modules/modal";
import scroll from "./modules/scroll";
import checkFields from "./modules/check-fields";
import calcForm from "./modules/calc-form";
import tabs from "./modules/tabs"
import slider from "./modules/slider"

timer('25 october 2024');
toggleMenu();
modal();
scroll();
checkFields();
calcForm();
tabs();
slider('.portfolio-content', '.portfolio-item', '.portfolio-dots', 'portfolio-item-active', 'dot-active');