import { v4 as uuidv4 } from 'uuid';
import { FiPhone, FiMapPin, FiMail } from 'react-icons/fi';
import { FaCar } from "react-icons/fa";

export const contactData = [
	{
		id: uuidv4(),
		name: 'Saint Germain en Laye, France',
		icon: <FiMapPin />,
	},
	{
		id: uuidv4(),
		name: 'mombertmatt@gmail.com',
		icon: <FiMail />,
	},
	{
		id: uuidv4(),
		name: '+33 7 68 79 27 53',
		icon: <FiPhone />,
	},
	{
		id: uuidv4(),
		name: 'Driver License (Permis B)',
		icon: <FaCar />,
	},
];
