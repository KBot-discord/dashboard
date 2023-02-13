import type { ReactNode } from 'react';

interface IProps {
	title: string;
	children: ReactNode;
}

const LegalSubsection = ({ title, children }: IProps) => {
	return (
		<div className="flex flex-col gap-4">
			<h2 className="text-lg font-bold">{title}</h2>
			<div className="flex flex-col ml-8 gap-4">{children}</div>
		</div>
	);
};

export default LegalSubsection;
