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
	}

	getDate(date) {
		let FORMAT_DATE = "MMMM YYYY";

		if(date) {
			return Moment(date).format(FORMAT_DATE);
		} else {
			return Moment().format(FORMAT_DATE);
		}
	}

	_handleSaveNewProject(event) {
		event.preventDefault();

		let target = event.target;

		console.log(event.target);
		let newProject = {
			createdOn: this.getDate(target.createdOn.value),
			description: target.description.value,
			hostedOn: target.hostedOn.value,
			subtitle: target.subtitle.value,
			tags: [],
			title: target.title.value,
			urlImage: target.urlImage.value,
			urlProject: target.urlProject.value
		}

		this.projects.push(newProject);
		this.setState({ projects: this.projects });
	}

	_handleCreatedToday(event) {
		this.setState({ createdToday: event.target.checked })
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
		value: [
			{
				createdOn: "Mach 2017",
				description: "",
				hostedOn: "github",
				subtitle: "🌡️ A component has created with create-react-app",
				tags: [
					"tag-1",
					"tag-2",
					"tag-3",
					"tag-4",
					"tag-5",
					"tag-6"
				],
				title: "React UI Thermometer",
				urlImage: "http://www.interaminense.com/src/imgs/react-ui-thermometer.jpg",
				urlProject: "https://github.com/interaminense/react-ui-thermometer"
			},
			{
				createdOn: "Mach 2017",
				description: "",
				hostedOn: "github",
				subtitle: "🌡️ A component has created with create-react-app",
				tags: [
					"tag-1",
					"tag-2",
					"tag-3",
					"tag-4",
					"tag-5",
					"tag-6"
				],
				title: "React UI Thermometer",
				urlImage: "http://www.interaminense.com/src/imgs/react-ui-thermometer.jpg",
				urlProject: "https://github.com/interaminense/react-ui-thermometer"
			}
		]
	},
	createdToday: {
		value: true
	}
}

Soy.register(interaminense, templates);

export { interaminense };
export default interaminense;
