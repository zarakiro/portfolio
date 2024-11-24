import { v4 as uuidv4 } from 'uuid';

export const projectsData = [
	{
		id: 1,
		title: 'Agricycle',
		url: 'agricycle',
		category: 'Innovation Project',
		img: '/images/agricycle3.jpg',
		ProjectHeader: {
			title: 'Agricycle',
			publishDate: 'Jan 22, 2024',
			tags: 'Mecanics / Innovation',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Agricycle 1',
				img: '/images/agricycle4.jpg',
			},
			{
				id: uuidv4(),
				title: 'Agricycle 2',
				img: '/images/agricycle2.jpg',
			},
			{
				id: uuidv4(),
				title: 'Agricycle 3',
				img: '/images/agricycle6.jpg',
			},
		],
		ProjectInfo: {
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'Building a farm vehicle',
			Technologies: [
				{
					title: 'Tools & Competences',
					techs: [
						'3D Modeling',
						'Mecanics',
						'MIG Welding',
						'Solidworks',
						'Manufacturing',	
						
					],
				},
			],
			Link : "https://ift.devinci.fr/" ,
			ProjectDetailsHeading: 'Description',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:
						'Agricycle is an innovative agricultural vehicle designed specifically for small farms. In response to the pollution caused by traditional gasoline-powered tractors, this project aims to provide a cleaner, more sustainable alternative. The vehicle operates on pedal power with electric assistance, making it both energy-efficient and easy to use for a variety of tasks in agricultural fields. With a 2000W brushless motor and four batteries, Agricycle can support essential farming activities while significantly reducing carbon emissions compared to conventional equipment.',
				},
				{
					id: uuidv4(),
					details:
						'The vehicle is built with four wheels, a comfortable adjustable seat for the driver, and a steering system that ensures smooth operation in uneven terrain. The system balances manual pedaling and electric assistance, making it both eco-friendly and effective for farmers. The design is simple yet robust, providing a reliable solution for small-scale farming. It’s a cost-effective alternative to traditional tractors, capable of performing basic tasks without the environmental impact.',
				},
				{
					id: uuidv4(),
					details:
						"As part of a six-person team, I worked on several key aspects of the Agricycle project. I contributed to the modeling and design of the vehicle, particularly the adjustable seat to ensure driver comfort. I was involved in welding the chassis and assembling the vehicle's structure, learning valuable fabrication techniques along the way. Additionally, I helped integrate the electronics, including the motor and power systems, ensuring everything functioned as planned. Throughout the process, we stayed connected with real farmers to make sure our design met their practical needs, and we’re now focusing on adding specific farming tools to complete the vehicle.",
				},
				{
					id: uuidv4(),
					details:
						"Agricycle is now a fully functional prototype, ready for real-world testing. This project has not only provided a cleaner alternative to gasoline-powered tractors but also allowed us to develop a product that aligns with the needs of small-scale farmers. The feedback from ongoing tests will be crucial for final adjustments, particularly for integrating specific tools for agricultural tasks. This project has been a valuable learning experience, combining technical skills, field research, and innovation to create a more sustainable agricultural solution.",
				},
			],
			
		},
	},
	{
		id: 2,
		title: 'Popshock',
		url: 'popshoc',
		category: 'Innovation Project',
		img: '/images/PopShock.jpg',
		ProjectHeader: {
			title: 'Popshock',
			publishDate: 'Mar 26, 2024',
			tags: 'Lowtech / Innovation / Sport / Sécurity',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Popshock 1',
				img: '/images/Logo_popshock.png',
			},
			{
				id: uuidv4(),
				title: 'Popshock 2',
				img: '/images/Material_popshock.jpg',
			},
			{
				id: uuidv4(),
				title: 'Popshock 3',
				img: '/images/PopShock.jpg',
			},
		],
		ProjectInfo: {
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'Reducing concussions in Rugby',
			Technologies: [
				{
					title: 'Tools & Competences',
					techs: [
						'Arduino',
						'Electronics',
						'Sensors',
						'Python',
					],
				},
			],
			Link : "https://ift.devinci.fr/" ,
			ProjectDetailsHeading: 'Description',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:"Popshock is an innovative connected rugby helmet designed to enhance player safety by preventing and managing concussions in the sport. Featuring discreet embedded electronics, it aims to provide real-time data to support both professional and amateur athletes. The helmet maintains the same design and comfort as traditional rugby helmets, ensuring that it is both practical and non-intrusive.",
				},
				{
					id: uuidv4(),
					details:"Popshock integrates several piezoelectric pressure sensors and an accelerometer that monitor the force of impacts during a game. If a player receives a blow deemed too violent, the system sends an immediate alert to the coach or medical staff via a dedicated app. This allows for quick action, such as removing the player from the game and initiating the appropriate concussion protocol (HIA1). Importantly, Popshock does not replace the existing concussion protocols but serves as a complementary tool alongside other protective gear, such as mouthguards. Although it may not offer the same level of protection as custom-made mouthguards, its affordability and compatibility with all head sizes make it a widely accessible safety solution for all rugby players.",
				},
				{
					id: uuidv4(),
					details:"In collaboration with a teammate, I contributed significantly to the development of the Popshock helmet, particularly in the coding and integration of the electronics. I worked extensively on the programming of the different sensors, including using Arduino to manage the piezoelectric pressure sensors and accelerometer. Additionally, I developed the Python code to handle the Bluetooth communication, ensuring that the impact data was transmitted accurately and in real-time to the app used by coaches and medical staff. My focus was on ensuring reliable data collection and seamless integration between the hardware and software to enhance the helmet’s effectiveness in concussion management.",
				},
				{
					id: uuidv4(),
					details:"Popshock offers a practical, cost-effective solution to improve safety in rugby by providing immediate feedback on potentially dangerous impacts. While still a prototype, the helmet has the potential to revolutionize concussion management in the sport. Further testing and refinement will be necessary to ensure optimal performance, and we hope that future iterations will become standard equipment for players at all levels of the game, enhancing safety on the field.",
				},
			],
		},
	},
	{
		id: 3,
		title: 'Foildable',
		url: 'foildable',
		category: 'Innovation Project',
		img: '/images/foil.png',
		ProjectHeader: {
			title: 'Foildable',
			publishDate: 'Jan 26, 2025',
			tags: 'Innovation / Sport',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Foildable 1',
				img: '/images/foil.png',
			},
			{
				id: uuidv4(),
				title: 'Foildable 2',
				img: '/images/foil.png',
			},
			{
				id: uuidv4(),
				title: 'Foildable 3',
				img: '/images/foil.png',
			},
		],
		ProjectInfo: {
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.',
			Technologies: [
				{
					title: 'Tools & Competences',
					techs: [
						'Research',
						'Mecanics',
					],
				},
			],
			Link : "https://ift.devinci.fr/" ,
			ProjectDetailsHeading: 'Description',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:'A completer'
				},
				{
					id: uuidv4(),
					details:'A completer'
				},
				{
					id: uuidv4(),
					details:'A completer'
				},
				{
					id: uuidv4(),
					details:'A completer'
				},
			],
		},
	},
	{
		id: 4,
		title: 'Koloburo',
		url: 'koloburo',
		category: 'Kickstarter campaign',
		img: '/images/Koloburo.jpeg',
		ProjectHeader: {
			title: 'Koloburo',
			publishDate: 'Mar 26, 2024',
			tags: 'Innovation / Kickstarter Campaign',
		},
		ProjectImages: [
			{
				id: uuidv4(),
				title: 'Koloburo 1',
				img: '/images/koloburo2.jpg',
			},
			{
				id: uuidv4(),
				title: 'Koloburo 2',
				img: '/images/Koloburo.jpeg',
			},
			{
				id: uuidv4(),
				title: 'Koloburo 3',
				img: '/images/koloburo5.jpg',
			},
		],
		ProjectInfo: {
			ObjectivesHeading: 'Objective',
			ObjectivesDetails:
				'Creating a leather object and running a successful kickstarter campaign',
			Technologies: [
				{
					title: 'Tools & Competences',
					techs: [
						'Product Design',
						'Innovation',
						'Marketing strategy',
						'Manufacturing',
						'Kickstarter campaign',
					],
				},
			],
			Link : "https://www.kickstarter.com/projects/koloburo/quickstarter-koloburo-leather-cable-management-device" ,
			ProjectDetailsHeading: 'Description',
			ProjectDetails: [
				{
					id: uuidv4(),
					details:"Koloburo is an elegant and functional cable management device designed to help you keep your chargers organized and easily accessible. Made from upcycled leather, it offers a sustainable and stylish solution to the common problem of misplaced cables. Simply attach Koloburo to your desk or bedside table, and use it to keep your cables in place, preventing them from getting lost or tangled.",
				},
				{
					id: uuidv4(),
					details:"Koloburo’s design is simple yet effective. It features five precisely-sized holes to fit different types of cables, including phone chargers, headphones, and thicker computer chargers. The device is compact (11 cm in length, 7 cm in width, and 0.5 cm in thickness), and its sleek leather material adds a touch of sophistication to any space. Available in black, brown, and dark blue, Koloburo blends seamlessly with modern interiors while providing a practical cable management solution.",
				},
				{
					id: uuidv4(),
					details:"As a team of three engineering students, we worked together to bring Koloburo from ideation to production. We were responsible for everything—from initial brainstorming and prototyping to supplier sourcing and launching a successful crowdfunding campaign. I contributed extensively to the prototyping process, where we used laser cutting to create initial models, followed by refining the design with a die-cutter made by a Parisian artisan. I was also involved in the communication and marketing aspects of the campaign, helping to engage our backers and ensure a successful launch.",
				},
				{
					id: uuidv4(),
					details:"Our Kickstarter campaign was a resounding success, reaching 678% of our funding goal and being selected as a 'Kickstarter Staff Pick'. With the funds secured, we are now moving forward with manufacturing, working closely with a local factory to ensure high-quality production. Koloburo’s eco-friendly design, using upcycled leather from the textile industry, has been well received, and we look forward to delivering the product to our backers by December 2024.",
				},
			],
		},
	},

];
