import { v4 as uuidv4 } from 'uuid';
import { FiGlobe } from "react-icons/fi";
import { FiMonitor } from "react-icons/fi";

export const skillsData = [
	{
	  id: uuidv4(),
	  name: 'Languages',
	  icon: <FiGlobe />,
	  subSkills: [
		{
		  id: uuidv4(),
		  name: 'English',
		  description: 'B2 level - TOEFL ITP (593)',
		},
		{
		  id: uuidv4(),
		  name: 'German',
		  description: 'Basic - 2 trips as part of training',
		},
	  ],
	},
	{
	  id: uuidv4(),
	  name: 'Softwares',
	  icon: <FiMonitor />,
	  subSkills: [
		{
		  id: uuidv4(),
		  name: 'Modeling',
		  description: 'Solidworkd, Catia, Fusion',
		},
		{
		  id: uuidv4(),
		  name: 'Adobe Suite',
		  description: 'Photoshop, Illustrator, Premiere Pro...',
		},
		{
		  id: uuidv4(),
		  name: 'Office Pack',
		  description: "Excel, PowerPoint, Word",
		},
		{
		  id: uuidv4(),
		  name: 'Kicad',
		  description: "PCB design",
		},
		{
		  id: uuidv4(),
		  name: '3D printing',
		  description: "Cura, Prusa, OrcaSlicer",
		},
		{
		  id: uuidv4(),
		  name: 'Code',
		  description: "C#, Python, Arduino, SQL, Web Dev (HTML, CSS, JS, React, Next)",
		},
	  ],
	},
  ];
