import { useContext } from 'react';
import ThemeContext from '../contexts/themeContext';
import Counter from './Counter';
import HoverCounter from './HoverCounter';
export default function Context(){
    const context = useContext(ThemeContext);
    const {theme, switchTheme} = context;
    return (
        <Counter>
            {(counter, onClick) =>  (
                <HoverCounter counter={counter} handelOnClick={onClick} theme={theme} switchTheme={switchTheme}/>
            )}
        </Counter>
    );
}

