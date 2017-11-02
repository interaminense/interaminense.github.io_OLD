'use strict';

import templates from './profile.soy.js';
import Component from 'metal-component';
import Soy from 'metal-soy';

class profile extends Component {}

Soy.register(profile, templates);

export { profile };
export default profile;
