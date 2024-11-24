import { experiencesData } from '../../data/experiencesData';

function Experiences() {
	return (
		<div className="w-full lg:w-1/2">
			<div className="text-left max-w-xl px-6">
				<h2 className="font-general-medium text-6xl text-primary-dark dark:text-primary-light mt-12 mb-8">
					My Experiences
				</h2>
				<ul>
					{experiencesData.map((exp) => (
						<li className="flex flex-col mb-6" key={exp.id}>
							<div className="flex items-center">
								<i className="text-2xl text-neutral-500 dark:text-neutral-400 mr-4">
									{exp.icon}
								</i>
								<a href={exp.url} className="text-lg font-semibold text-ternary-dark dark:text-ternary-light underline">
									{exp.name}
								</a>
							</div>
							<p className="text-md mt-2 text-gray-600 dark:text-gray-300 ml-8">
								{exp.description}
							</p>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default Experiences;
