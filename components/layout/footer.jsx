import { useState, useEffect } from 'react'

import Container from '../structure/container'
import Icon from '../utils/icon.util'

import css from '../../styles/structure/footer.module.scss'

import content from '../../content/footer.json'
import settings from '../../content/_settings.json'

export default function Footer() {
	
	const [gitHubInfo, setGitHubInfo] = useState({
		stars: null,
		forks: null,
	});

	useEffect(() => {
		fetch( settings.portfolio.repo_api )
			.then(response => response.json())
			.then(json => {
				const { stargazers_count, forks_count } = json;
				setGitHubInfo({
					stars: stargazers_count,
					forks: forks_count,
				});
			})
		.catch(e => console.error(e));
	}, []);
	
	return (
		<footer className={css.container}>
			<Container spacing={['verticalXXLrg', 'bottomLrg']}>
				<section className={css.github}>
					<a href={settings.portfolio.repo_html} rel="noreferrer" target="_blank">
						<ul>
							<li>
								<p><Icon icon={[ 'fad', 'code-branch' ]} /> Forks: { gitHubInfo.forks }</p>
							</li>
							<li>
								<p><Icon icon={[ 'fad', 'star' ]} /> Stars: { gitHubInfo.stars }</p>
							</li>
						</ul>
					</a>
				</section>
			</Container>
			<canvas id="gradient-canvas" className={''} data-transition-in ></canvas>
		</footer>
	)
}
