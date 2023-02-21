'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faBook, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons';

const Navbar = function () {
	return (
		<nav className="navbar sticky top-0 z-50 h-16 w-full bg-primary shadow-md text-primary-content gap-2">
			<div className="flex flex-1 gap-2">
				<span
					className="lg:hidden tooltip tooltip-bottom before:text-xs before:content-[attr(data-tip)]"
					data-tip="Menu"
				>
					<label htmlFor="drawer" className="btn btn-square btn-ghost drawer-button">
						<svg
							width="20"
							height="20"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							className="inline-block h-6 w-6 stroke-current"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h16M4 18h16"
							></path>
						</svg>
					</label>
				</span>
				<span
					className="tooltip tooltip-bottom before:text-xs before:content-[attr(data-tip)] lg:px-4"
					data-tip="Home"
				>
					<Link href="/" className="flex">
						<Image
							priority
							height={48}
							width={48}
							quality={100}
							src="/img/logo.png"
							alt="logo"
						/>
					</Link>
				</span>
				<a
					target="_blank"
					rel="noreferrer"
					href="https://docs.kbot.ca"
					className="hidden lg:flex nav-button lg:w-min lg:px-4 darken-bg-30"
				>
					<div className="flex justify-center items-center gap-2 mx-auto">
						<span className="hidden lg:flex">Docs</span>
						<span>
							<FontAwesomeIcon icon={faBook} size="1x" />
						</span>
					</div>
				</a>
				<a
					target="_blank"
					rel="noreferrer"
					href="/invite"
					className="hidden lg:flex nav-button lg:w-min lg:px-4 darken-bg-30"
				>
					<div className="flex justify-center items-center gap-2 mx-auto">
						<span className="hidden lg:flex">Add to Server</span>
						<span>
							<FontAwesomeIcon icon={faPlus} size="1x" />
						</span>
					</div>
				</a>
				<a
					target="_blank"
					rel="noreferrer"
					href="/discord"
					className="hidden lg:flex nav-button lg:w-min lg:px-4 darken-bg-30"
				>
					<div className="flex justify-center items-center gap-2 mx-auto">
						<span className="hidden lg:flex">Discord Server</span>
						<span>
							<FontAwesomeIcon icon={faDiscord} size="1x" />
						</span>
					</div>
				</a>
				<a
					target="_blank"
					rel="noreferrer"
					href="https://github.com/KBot-discord/KBot"
					className="hidden lg:flex nav-button lg:w-min lg:px-4 darken-bg-30"
				>
					<div className="flex justify-center items-center gap-2 mx-auto">
						<span className="hidden lg:flex">Source Code</span>
						<span>
							<FontAwesomeIcon icon={faGithub} size="1x" />
						</span>
					</div>
				</a>
				<a
					target="_blank"
					rel="noreferrer"
					href="https://status.kbot.ca/"
					className="hidden lg:flex nav-button lg:w-min lg:px-4 darken-bg-30"
				>
					<div className="flex justify-center items-center gap-2 mx-auto">
						<span className="hidden lg:flex">Status</span>
						<span>
							<FontAwesomeIcon icon={faHeart} size="1x" />
						</span>
					</div>
				</a>
			</div>
		</nav>
	);
};

export default Navbar;
