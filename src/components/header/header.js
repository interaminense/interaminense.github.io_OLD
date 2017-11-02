'use strict';

import templates from './header.soy.js';
import Component from 'metal-component';
import Soy from 'metal-soy';

import './../menu/menu';

class header extends Component {}

Soy.register(header, templates);

export { header };
export default header;
