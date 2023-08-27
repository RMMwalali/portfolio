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
import about from '../../../styles/sections/index/about.module.scss';

/**
 * Section: About
 * An overview of yourself.
 * Highlight your top level attributes and disciplines.
 * 
 * @returns {jsx} <About />
 */
export default function About() {
	return (
		<Section classProp={about.section}>	
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="About Me"
					preTitle="Synopsis"
					subTitle="I possess a wide range of skills, including the ability to design user interfaces and user experiences, develop full stack applications, architect systems and operations, and create effective email marketing campaigns. I am also highly creative and detail-oriented, always staying up-to-date with the latest news and trends on the internet."
				/>
				<section className={about.content}>
					<div className={about.image}>
						{/* <img src="/img/growth.png" alt="Nelson family photo"/> */}
						<Image src="/img/growth.png" width={600} height={1000}/>
					</div>
					<div className={about.copy} >
						<CopyBlock 
							title="Get to know me."
							containerClass={about.container}
							iconClass={about.icon}
							icon={[ 'fat', 'ear-listen' ]}
							copy="👋 Hi, for the second time today; I’m a really passionate software developer. In my free time, I enjoy reading newsletters and blogs about finance 💰 and technology 💻, as well as watching movies 🎥 (I’ve probably seen them all!). My dream job is to become a data scientist 📊 because of my love for mathematics, python 🔢 and my natural inclination to analyze things 🔍, even in my day-to-day life. 😊"
						/>
						<BadgesBlock 
							title="My Contact Information" 
							containerClass={about.container}
							list={methods} 
							fullContainer="fullContainer"
							block="methods" 
							icon="fingerprint"
							// copy="One of my favorite aspects of creating is planning the architecture of a project. From Design Systems to Brand Strategy—I enjoy working with the many touch points of user experience."
							invertedColor="invertedColor"
							headerIcon={`${about.icon}`}
						/>
					</div>
				</section>	
			</Container>
		</Section>
	)
}

const methods 	= [
	{ key: 'phone', name: '+254742310406', type: 'fad' },
	{ key: 'qrcode', name: 'https://rmmwalali.vercel.app/', type: 'fad' },
	{ key: 'envelope', name: 'ruthmwende317@gmail', type: 'fad' },
	{ key: 'location', name: 'Nairobi, Kenya', type: 'fad' },
]