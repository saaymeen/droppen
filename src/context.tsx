import React from 'react';
import { createContext, ReactNode } from 'react';

interface DropdownContext {
	updateSelection: (
		data: unknown,
		toggleReplacement: ReactNode,
		index: number,
	) => void;
	expand: boolean;
	toggle: () => void;
	toggleNode: ReactNode;
	index: number;
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
function placeholder(): void {}

const DropdownContext = createContext<DropdownContext>({
	updateSelection: placeholder,
	expand: false,
	toggle: placeholder,
	toggleNode: <button>Toggle</button>,
	index: 0,
});

const {
	Consumer: DropdownContextConsumer,
	Provider: DropdownContextProvider,
} = DropdownContext;

export { DropdownContext, DropdownContextConsumer, DropdownContextProvider };
