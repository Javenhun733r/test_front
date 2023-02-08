import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { faBars, faXmark, faCaretDown, faSpinner, faFilter, faBook,faCloudArrowDown,faBookOpen,faClipboard,faUser,faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import {faInstagram, faFacebook, faTelegram} from "@fortawesome/free-brands-svg-icons"
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

library.add(faBars, faPlus, faXmark, faCaretDown, faSpinner,
    faFilter, faBook, faFacebook, faInstagram, faTelegram, faChevronLeft, faChevronRight,faCloudArrowDown,faBookOpen,faClipboard,faUser,faCircleXmark);

export { FontAwesomeIcon };