import React, {
	FC,
	ReactElement,
	useState,
	ReactNode,
	useRef,
	useEffect,
} from 'react';

import { DropdownContextProvider } from './context';

export interface DropdownOption<T> {
	data: T;
	disabled: boolean;
	name: string;
}

interface Props {
	className?: string;
	setSelection: (data: unknown) => void;
}

const Dropdown: FC<Props> = ({
	children,
	className = '',
	setSelection,
}): ReactElement => {
	const [expand, setExpand] = useState(false);
	const [toggleNode, setToggleNode] = useState<ReactNode>(null);
	const [index, setIndex] = useState<number>(-1);
	const ref = useRef(document.createElement('div'));

	const updateSelection = (
		data: unknown,
		toggleReplacement: ReactNode,
		index: number,
	): void => {
		setExpand(false);
		setSelection(data);
		setToggleNode(toggleReplacement);
		setIndex(index);
	};

	const toggle = (): void => {
		setExpand(!expand);
	};

	const handleClickOutside = (e: MouseEvent): void => {
		if (e.currentTarget) {
			if (ref.current.contains(e.target as Node)) {
				return;
			}
		}
		setExpand(false);
	};

	useEffect((): (() => void) => {
		if (expand) {
			document.addEventListener('mousedown', handleClickOutside);
		} else {
			document.removeEventListener('mousedown', handleClickOutside);
		}

		return (): void => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [expand]);

	return (
		<DropdownContextProvider
			value={{ index, toggleNode, updateSelection, expand, toggle }}
		>
			<div ref={ref} className={className}>
				{children}
			</div>
		</DropdownContextProvider>
	);
};

export default Dropdown;
