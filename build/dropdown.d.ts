import { FC } from 'react';
export interface DropdownOption<T> {
    data: T;
    disabled: boolean;
    name: string;
}
interface Props {
    className?: string;
    setSelection: (data: unknown) => void;
}
declare const Dropdown: FC<Props>;
export default Dropdown;
