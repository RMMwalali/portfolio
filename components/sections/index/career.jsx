// Core packages
import Image from 'next/image'

import Badges 		from '../../utils/badge.list.util'
import button 		from '../../../styles/blocks/button.module.scss';

// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Section general blocks
import SectionTitle from '../../blocks/section.title.block'
import SectionGridBg from '../../blocks/section.grid.block'

// Career scss
import career from '../../../styles/sections/index/career.module.scss'

/**
 * Section: Career
 *
 * @returns {jsx} <Career />
 */
export default function Career() {
	return (
		<Section classProp={`${career.section} borderBottom`}>
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="Experience"
					preTitle="Career"
					subTitle="I am current managing, designing, and developing a number of web applications and software. To learn more, download my CV below."
				/>
				<div style={{ display: 'flex', justifyContent: 'center' }}>
					<a href="/path/to/rmmwalali.pdf" download="rmmwalali.pdf">
						<button className={`button ${button.primary}`}>Download PDF</button>
					</a>
				</div>
			</Container>
		</Section>
	)
}