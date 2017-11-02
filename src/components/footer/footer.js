'use strict';

import templates from './footer.soy.js';
import Component from 'metal-component';
import Soy from 'metal-soy';

class footer extends Component {}

Soy.register(footer, templates);

export { footer };
export default footer;
