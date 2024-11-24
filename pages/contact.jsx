import { motion } from 'framer-motion';
import ContactDetails from '../components/contact/ContactDetails';
import PagesMetaHead from '../components/PagesMetaHead';
import Experiences from '../components/contact/Experiences';
import Formations from '../components/contact/Formations';
import Skills from '../components/contact/Skills';

function contact() {
	return (
		<div>
			<PagesMetaHead title="Contact" />

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{
					ease: 'easeInOut',
					duration: 0.5,
					delay: 0.1,
				}}
				className="container mx-auto flex flex-col-reverse lg:flex-row py-5 lg:py-10 lg:mt-5"
			>
				<Experiences />
				<Formations />			
			</motion.div>	
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{
					ease: 'easeInOut',
					duration: 0.5,
					delay: 0.1,
				}}
				className="container mx-auto flex flex-col-reverse lg:flex-row py-5 lg:py-10 lg:mt-5"
			>
				<Skills />	
				<ContactDetails />	
			</motion.div>
		</div>
	);
}

export default contact;
