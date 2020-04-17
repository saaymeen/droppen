import React from 'react';
import { ReactNode } from 'react';
interface DropdownContext {
    updateSelection: (data: unknown, toggleReplacement: ReactNode, index: number) => void;
    expand: boolean;
    toggle: () => void;
    toggleNode: ReactNode;
    index: number;
}
declare const DropdownContext: React.Context<DropdownContext>;
declare const DropdownContextConsumer: React.Consumer<DropdownContext>, DropdownContextProvider: React.Provider<DropdownContext>;
export { DropdownContext, DropdownContextConsumer, DropdownContextProvider };
