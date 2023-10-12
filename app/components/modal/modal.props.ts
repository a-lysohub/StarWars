import { ReactNode } from 'react';

export type ModalProps = {
    children?: ReactNode,
    isVisible: boolean,
    title?: string,
    text?: string,
    onCancelTitle?: string,
    cancelHandler?: () => void,
    onSuccessTitle?: string,
    successHandler?: () => void,
};
