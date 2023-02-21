import type { ReactNode } from 'react';

interface IProps {
	title: string;
	children: ReactNode;
}

const LegalSection = ({ title, children }: IProps) => {
	return (
		<div className="flex flex-col gap-4 mt-6">
			<h2 className="text-2xl font-bold underline">{title}</h2>
			<div className="flex flex-col gap-4">{children}</div>
		</div>
	);
};

export default LegalSection;
