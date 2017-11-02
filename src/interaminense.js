'use strict';

import templates from './interaminense.soy.js';
import Component from 'metal-component';
import Soy from 'metal-soy';
import Moment from 'moment';

import './components/header/header';
import './components/profile/profile';
import './components/project/project';
import './components/footer/footer';

import './interaminense.scss';

class interaminense extends Component {

	created() {
		console.log(this);

		fetch("../src/data.json").then(function(response) {
			let contentType = response.headers.get("content-type");
			if(contentType && contentType.includes("application/json")) {
				return response.json();
			}
			throw new TypeError("Oops, we haven't got JSON!");
		})
		.then(projects => {

			//es6 projects: projects
			this.setState({ projects });
		})
		.catch(function(error) { console.log(error); });
	}

	getDate(date) {
		let FORMAT_DATE = "MMMM YYYY";

		return Moment(date).format(FORMAT_DATE);
	}
}

interaminense.STATE = {
	mainClass: {
		value: 'ai'
	},
	socialNetworks: {
		value: [
			{ name: 'Github', icon: 'github-alt', url: 'http://github.com/interaminense' },
			{ name: 'Codepen', icon: 'codepen', url: 'http://codepen.io/interaminense' },
			{ name: 'Behance', icon: 'behance', url: 'http://behance.net/imcreator' },
			{ name: 'Linkedin', icon: 'linkedin', url: 'https://www.linkedin.com/in/adriano-interaminense-405a90b3/' },
			{ name: 'Facebook', icon: 'facebook', url: 'http://facebook.com/interaminense' },
			{ name: 'Twitter', icon: 'twitter', url: 'http://twitter.com/adinteraminense' }
		]
	},
	profile: {
		value: {
			name: "Adriano Interaminense",
			description: "<p>Hey, how are you?<br>I'm 27 years old and since 2009 I started my professional career as a Front-End Developer and Interaction Design. I am finishing my degree in Information System and intend to specialize even more in the area of Front End.<br><br>I ❤️ what I do and I always try to be updated with the new technologies, it is a Hobby for me!<br><br>contact me <b>adriano.interaminense@gmail.com</b></p>",
			urlImage: "https://avatars.githubusercontent.com/u/12699849",
			urlResume: "http://www.interaminense.com/resume.pdf"
		}
	},
	projects: {
		value: []
	}
}

Soy.register(interaminense, templates);

export { interaminense };
export default interaminense;
