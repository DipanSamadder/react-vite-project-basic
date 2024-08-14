import { useEffect, useState } from "react";



export default function GetPost(){
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response  => response.json())
        .then(data => {
            setLoading(false);
            setData(data);
            setError('');
        })
        .catch(()=>{
            setLoading(false);
            setData({});
            setError('This is a problem.');
        })
        
    },[]);

    return (
        <div>
            {loading ? 'loading...' : data.title}
            {error ? error : null}
        </div>
    )
}