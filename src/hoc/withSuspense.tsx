import React, {ComponentType, ReactNode} from 'react';
import {Preloader} from '../components/common/Preloader/Preloader';

export function withSuspense(Component: ComponentType) {
    return (props: any): ReactNode => {
        return (
            <React.Suspense fallback={<Preloader/>}>
                <Component {...props} />
            </React.Suspense>
        );
    };
}