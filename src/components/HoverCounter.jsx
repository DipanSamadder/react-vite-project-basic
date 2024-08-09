export default function HoverCounter({counter,handelOnClick, theme, switchTheme}){
    const style = theme ==='dark' ? {backgroundColor:'#000000', color:'#ffffff' } : null;
    return (
       <>
        <h1 onMouseOver={handelOnClick} style={style}>Click {counter} time</h1>
        <button type="button" onClick={switchTheme}>Change Theme</button>
       </>
    );
} 