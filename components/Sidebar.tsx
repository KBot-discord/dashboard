import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faBook, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons';

function Sidebar() {
	return (
		<div className="drawer-side border-r border-neutral">
			<label htmlFor="drawer" className="drawer-overlay" />
			<div className="flex h-full w-[200px] bg-primary py-16">
				<ul className="menu flex-1 bg-base-100 text-base-100-content">
					<li>
						<a target="_blank" rel="noreferrer" href="https://docs.kbot.ca">
							<span>
								<FontAwesomeIcon icon={faBook} size="1x" />
							</span>
							Docs
						</a>
					</li>
					<li>
						<a target="_blank" rel="noreferrer" href="/invite">
							<span>
								<FontAwesomeIcon icon={faPlus} size="1x" />
							</span>
							Add to Server
						</a>
					</li>
					<li>
						<a target="_blank" rel="noreferrer" href="/discord">
							<span>
								<FontAwesomeIcon icon={faDiscord} size="1x" />
							</span>
							Discord Server
						</a>
					</li>
					<li>
						<a target="_blank" rel="noreferrer" href="/github">
							<span>
								<FontAwesomeIcon icon={faGithub} size="1x" />
							</span>
							Source Code
						</a>
					</li>
					<li>
						<a target="_blank" rel="noreferrer" href="https://status.kbot.ca/">
							<span>
								<FontAwesomeIcon icon={faHeart} size="1x" />
							</span>
							Status
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Sidebar;
