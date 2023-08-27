// Core packages
import Image from 'next/image'

/**
 * scss for themes elements should probably have a specific scss for it
 * /styles/blocks/hero.bg.module.scss
 */
import hero from '../../../styles/sections/index/hero.module.scss';
import heroImg from '../../../public/img/growth.png'

export default function bgColor1() {
	return (
		<div className={`${hero.colorfulV1}`}>
			<div className={`${hero.barContainer} noEvents`}>
				<div className={`${hero.barGradient}`}></div>
			</div>
			<div className={`${hero.radialContainer} noEvents`}>
				{/* <Image src={heroImg} alt="hero" className={hero.radialContainer.heroImg} height={700} width={700}/> */}
				<div className={`${hero.radialGradient}`}></div>
			</div>
		</div>
	)
}