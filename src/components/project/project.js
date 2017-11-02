'use strict';

import templates from './project.soy.js';
import Component from 'metal-component';
import Soy from 'metal-soy';

class project extends Component {}

Soy.register(project, templates);

export { project };
export default project;
