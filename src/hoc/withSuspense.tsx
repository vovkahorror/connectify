import React, {ComponentType, ReactNode, Suspense} from 'react';
import {Preloader} from '../components/common/Preloader/Preloader';

export function withSuspense(Component: ComponentType) {
    return (props: any): ReactNode => {
        window.scrollTo({
            top: 0,
        });
        
        return (
            <Suspense fallback={<Preloader/>}>
                <Component {...props} />
            </Suspense>
        );
    };
}