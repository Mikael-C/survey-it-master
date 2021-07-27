import * as React from 'react';
import DotsAnimation from '../../animations/dotsAnimation';

export default function Refreshing({message}) {

    const [notfound, setNotfound] = React.useState(false);

    React.useEffect(() => {
        const setTimeOut = setTimeout(() => {
            setNotfound(true);
        }, 10000);

        return ()=>clearTimeout(setTimeOut);
    }, []);

    return (
        <div className="d-flex justify-content-center">
            {!notfound?<DotsAnimation /> :null}
            {notfound && <span className="text-uppercase font-weight-bold">{message}</span>}
        </div>
    )
}
