'use strict';

import templates from './menu.soy.js';
import Component from 'metal-component';
import Soy from 'metal-soy';

class menu extends Component {}

Soy.register(menu, templates);

export { menu };
export default menu;
