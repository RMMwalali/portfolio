// Core packages
import Image from 'next/image'

// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Section general blocks
import SectionTitle from '../../blocks/section.title.block'
import SectionGridBg from '../../blocks/section.grid.block'

// Section specific blocks
import BadgesBlock from '../../blocks/about.badges.block'
import CopyBlock from '../../blocks/about.copy.block'

// Section scss
import about from '../../../styles/sections/index/about.module.scss'

/**
 * Section: Technical
 * Highlight your technical skills with a short blurb about you,
 * Then display the programs you are proficient with and the technologies you use if applicable.
 * 
 * @returns {jsx} <Technical />
 */
export default function Technical() {
	return (
		<Section classProp={`${about.section} borderBottom`}>	
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="Non-Technical"
					preTitle="Softskills"
					subTitle="Soft skills, combined with my technical expertise, make me a well-rounded software developer."
				/>
				<section className={`${about.technicalContent} ${about.container}`}>
					<div className={about.copy}>
						{/* <CopyBlock 
							title="Softskills I've gained so far"
							icon={[ 'fat', 'chart-network' ]}
							copy="As a seasoned software developer, I bring more to the table than just technical expertise. I understand that the success of any project relies not only on technical prowess but also on effective communication, teamwork, and problem-solving skills."
							containerClass={about.container}
							list={software}
							block="software" 
							fullContainer="fullContainer"
							headerIcon={about.icon}
						/> */}
						<BadgesBlock 
							title="Softskills I've gained so far" 
							copy="As a seasoned software developer, I bring more to the table than just technical expertise. I understand that the success of any project relies not only on technical prowess but also on effective communication, teamwork, and problem-solving skills."
							list={software}
							block="software" 
							fullContainer="fullContainer"
							icon="grid-2-plus"
							containerClass={about.container}
							headerIcon={about.icon} 
						/>
						<BadgesBlock 
							title="Software I'm great with" 
							copy="In my journey as a software developer, I've gained proficiency in a wide array of technologies that enable me to deliver robust and efficient solutions. I'm always eager to learn and adapt to new technologies to stay at the forefront of the ever-evolving tech landscape."
							list={tech} 
							block="tech"
							fullContainer="fullContainer" 
							icon="laptop-code"
							containerClass={about.container}
							headerIcon={about.icon} 
						/>							
					</div>
					{/* <div className={`${about.image} ${about.technicalSvg}`}>
						<Image src="/img/dataism-24.svg" width={477} height={1111} alt="Data Strings 01 by Colorpong: https://ywft.us/2177b695b" />
					</div> */}
				</section>	
			</Container>
			{/* <SectionGridBg gridSize={4}/> */}
		</Section>
	)
}

const software 	= [
	{ key: 'comments', name: 'Communication', type: 'fad' },
	{ key: 'users', name: 'Teamwork', type: 'fad' },
	{ key: 'sync-alt', name: 'Adaptability', type: 'fad' },
	{ key: 'lightbulb', name: 'Problem Solving', type: 'fad' },
	{ key: 'chess-king', name: 'Leadership', type: 'fad' },
	{ key: 'clock', name: 'Time Management', type: 'fad' },
	{ key: 'paint-brush', name: 'Creativity', type: 'fad' },
	{ key: 'handshake', name: 'Conflict Resolution', type: 'fad' },
	{ key: 'brain', name: 'Emotional Intelligence', type: 'fad' },
	{ key: 'user-friends', name: 'Interpersonal Skills', type: 'fad' },
]

const tech	= [
	{ key: 'javascript', 	name: 'JavaScript', 		type: 'devicon' },
	{ key: 'nodejs', 		name: 'NodeJS', 			type: 'devicon' },
	{ key: 'react', 		name: 'React', 				type: 'devicon' },
	{ key: 'nextjs', 		name: 'NextJS', 			type: 'devicon' },
	{ key: 'python', 		name: 'Python', 			type: 'devicon' },
	{ key: 'php', 			name: 'PHP', 				type: 'devicon' },
	{ key: 'tailwindcss', 	name: 'TailwindCSS', 		type: 'devicon' },
	{ key: 'androidstudio', 	name: 'Android Studio', 		type: 'devicon' },
	{ key: "google",		name: "GA4/GTM", 			type: "devicon" },
	{ key: 'html5', 		name: 'HTML5', 				type: 'devicon' },
	{ key: 'css3', 			name: 'CSS3', 				type: 'devicon' },
	{ key: 'sass', 			name: 'SASS', 				type: 'devicon' },
	{ key: 'git', 			name: 'Git', 				type: 'devicon' },
	{ key: 'mysql', 		name: 'MySQL', 				type: 'devicon' },
	{ key: 'mongodb', 		name: 'MongoDB', 			type: 'devicon' },
]