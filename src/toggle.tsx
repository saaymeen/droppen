import React, { FC, ReactElement, useContext } from 'react';

import { DropdownContext } from './context';

interface Props {
	className?: string;
}

const Toggle: FC<Props> = ({ children, className = '' }): ReactElement => {
	const { toggle, toggleNode } = useContext(DropdownContext);

	return (
		<button onClick={toggle} className={className}>
			{toggleNode ? toggleNode : children}
		</button>
	);
};

export default Toggle;
