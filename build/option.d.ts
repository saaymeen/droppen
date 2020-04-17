import { FC, ReactNode } from 'react';
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
declare const Option: FC<OptionProps>;
declare const OptionContainer: FC<Props>;
export { Option as default, OptionContainer };
