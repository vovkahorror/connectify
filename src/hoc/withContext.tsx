import {ComponentType} from 'react';
import {useTheme, UseThemeResult} from '../theme/useTheme';

export const withContext = (Component: ComponentType<UseThemeResult>) => {
    return () => {
        const {theme, toggleTheme} = useTheme();

        return <Component theme={theme} toggleTheme={toggleTheme}/>;
    };
};