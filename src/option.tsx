import React, { FC, ReactElement, useContext, ReactNode } from 'react';
import styled from 'styled-components';
import { DropdownContext } from './context';

interface Props {
	className?: string;
}

interface OptionProps extends Props {
	toggleReplacement: ReactNode;
	data: unknown;
	index: number;
	disabled?: boolean;
	btnDisabled?: boolean;
}

const Option: FC<OptionProps> = ({
	disabled = false,
	btnDisabled = false,
	index,
	children,
	className = '',
	toggleReplacement,
	data,
}): ReactElement => {
	const { updateSelection } = useContext(DropdownContext);

	return (
		<LI disabled={disabled} className={className}>
			<button
				disabled={btnDisabled}
				onClick={(): void =>
					updateSelection(data, toggleReplacement, index)
				}
			>
				{children}
			</button>
		</LI>
	);
};

const OptionContainer: FC<Props> = ({
	children,
	className = '',
}): ReactElement | null => {
	const { expand } = useContext(DropdownContext);

	if (!expand) {
		return null;
	}

	return <ol className={className}>{children}</ol>;
};

const LI = styled.li<{ disabled: boolean }>``;

export { Option as default, OptionContainer };
