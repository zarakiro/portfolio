import { formationsData } from '../../data/formationsData';

function Formation() {
	return (
		<div className="w-full lg:w-1/2">
			<div className="text-left max-w-xl px-6">
				<h2 className="font-general-medium text-6xl text-primary-dark dark:text-primary-light mt-12 mb-8">
					My Education
				</h2>
				<ul>
					{formationsData.map((formation) => (
						<li className="mb-6" key={formation.id}>
							<h3 className="text-lg font-semibold text-ternary-dark dark:text-ternary-light">
								{formation.title}
							</h3>
							<p className="text-md text-neutral-600 dark:text-neutral-400">
								<a href={formation.link}>{formation.institution}</a>  / {formation.year}
							</p>
							<p className="text-md mt-2 text-gray-600 dark:text-gray-300">
								{formation.description}
							</p>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default Formation;
