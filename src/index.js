import timer from "./modules/timer";
import toggleMenu from "./modules/menu";
import modal from "./modules/modal";
import scroll from "./modules/scroll";
import checkFields from "./modules/check-fields";
import calc from "./modules/calc";
import tabs from "./modules/tabs"
import slider from "./modules/slider"
import sendForm from "./modules/sendForm";

timer('20 november 2024');
toggleMenu();
modal();
scroll();
checkFields();
calc(100);
tabs();
slider('.portfolio-content', '.portfolio-item', '.portfolio-dots', 'portfolio-item-active', 'dot-active');
sendForm({
    formId: 'form1',
    someElem: [
        {
            type: 'block',
            id: 'total'
        }
    ]
});
sendForm({
    formId: 'form2',
    someElem: [
        {
            type: 'block',
            id: 'total'
        }
    ]
});
sendForm({
    formId: 'form3',
    someElem: [
        {
            type: 'block',
            id: 'total'
        }
    ]
});