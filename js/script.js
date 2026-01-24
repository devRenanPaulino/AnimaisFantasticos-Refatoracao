import ScrollSuave from "./modules/scrool-suave.js";
import Accordion from "./modules/accordion.js";
import TabNav from "./modules/tab-nav.js";
import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";
import DropdownMenu from "./modules/dropdown.js";
import MenuMobile from "./modules/menuMobile.js";
import Funcionamento from "./modules/funcionamento.js";
import fetchAnimais from "./modules/fetchAnimais.js";
import fetchBitcoin from "./modules/fetchBitcoin.js";
import ScrollAnima from "./modules/scrollAnima.js";

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabNav.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
modal.init();

const tooltip = new Tooltip("[data-tooltip]");
tooltip.init();

const scrollAnima = new ScrollAnima('[data-anime="scroll"]');
scrollAnima.init();

const dropDownMenus = new DropdownMenu("[data-dropdown]");
dropDownMenus.init();

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

const funcionamentoLoja = new Funcionamento("[data-semana]", "aberto");
funcionamentoLoja.init();

fetchAnimais('./animaisAPI.json', ".numeros-grid");
fetchBitcoin("https://blockchain.info/ticker", ".btc-preco");
