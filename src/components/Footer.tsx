import Image from 'next/image';
import Link from 'next/link';

const Footer = function () {
	return (
		<footer className="bg-primary text-center text-primary-content font-semibold py-8 grid grid-cols-3">
			<div className="m-auto">
				<Link href="/" className="flex">
					<Image
						priority
						height={100}
						width={100}
						quality={100}
						src="/img/logo.png"
						alt={'Main logo'}
					/>
				</Link>
			</div>
			<div>
				<h2 className="mb-3 text-md uppercase">Links</h2>
				<ul className="list-none">
					<li className="mb-3">
						<a
							href="https://ko-fi.com/killbasa"
							target="_blank"
							rel="noreferrer"
							className="hover:brightness-[0.7]"
						>
							Donations
						</a>
					</li>
				</ul>
			</div>
			<div>
				<h2 className="mb-3 text-md uppercase">Legal</h2>
				<ul className="list-none">
					<li className="mb-3">
						<Link href="/terms" className="hover:brightness-[0.7]">
							Terms of Use
						</Link>
					</li>
					<li className="mb-3">
						<Link href="/privacy" className="hover:brightness-[0.7]">
							Privacy Policy
						</Link>
					</li>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
