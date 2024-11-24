import { v4 as uuidv4 } from 'uuid';
import {FiArrowRight }  from 'react-icons/fi';

export const experiencesData = [
	{
		id: uuidv4(),
		name: 'WIP : Medadom Internship',
		icon: <FiArrowRight  />,
		description:'Product Owner internship at Medadom, a french company working in health field.',
		url:'https://www.medadom.com/',
	},
	{
		id: uuidv4(),
		name: 'Safran Seats Fablab Internship',
		icon: <FiArrowRight  />,
		description:'Worked in Safran Seats fablab as an intern. Responsible for site and machines. Employee training and support. Site improvement. Project Management.',
		url:'https://www.safran-group.com/fr/societes/safran-seats',
	},
	{
		id: uuidv4(),
		name: 'Trace Internship',
		icon: <FiArrowRight  />,
		description:'Digital and environmental project management internship. Technological and environmental watch study. Support in identifying waste management opportunities.',
		url:'https://trace-groupe.com/',
	},
	{
		id: uuidv4(),
		name: 'Scoutmaster',
		icon: <FiArrowRight  />,
		description:'Master of around 40 scouts. Pedagogy, Responsability and Maturity. Oragnization',
		url:'https://www.scouts-europe.org/',
	},
];
