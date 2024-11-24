import { skillsData } from '../../data/skillsData';


function Skills() {
	return (
		<div className="w-full lg:w-1/2">
			<div className="text-left max-w-xl px-6">
				<h2 className="font-general-medium text-5xl text-primary-dark dark:text-primary-light mt-12 mb-8">
					My Skills
				</h2>
				<ul>
					{skillsData.map((skills) => (
						<li className="flex flex-col mb-6" key={skills.id}>
							<div className="flex items-center">
								<i className="text-2xl text-neutral-500 dark:text-neutral-400 mr-4">
									{skills.icon}
								</i>
								<span className="text-lg font-semibold text-ternary-dark dark:text-ternary-light">
									{skills.name}
								</span>
							</div>
							<ul>
								{skills.subSkills.map((subSkill) => (
								<li className="flex mb-4 mt-4" key={subSkill.id}>
									<span className="text-lg text-ternary-dark dark:text-ternary-light mr-4">
										{subSkill.name}
									</span>
									<span className="text-md mt-auto text-neutral-600 dark:text-neutral-400">
										{subSkill.description}
									</span>
								</li>
								))}
							</ul>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
  
export default Skills;
