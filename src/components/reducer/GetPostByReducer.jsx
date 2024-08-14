import React, { useEffect, useReducer } from "react";

const initialState = {
    loading: true,
    error:'',
    data:{}
}

const reduce = (state, action)=> {
    switch(action.type){
        case 'SUCCESS':
            return {
                loading:false,
                error:'',
                data: action.result
            }
        case 'ERROR':
            return {
                loading:true,
                error:'There was a problem fatching.',
                data: {}
            }
        default:
            state
    }
     
}

export default function GetPostByReducer(){
    const [state, dispatch] = useReducer(reduce, initialState);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response  => response.json())
        .then(data => {
            dispatch({type:'SUCCESS', result: data});
        })
        .catch(()=>{
            dispatch({type:'ERROR'});
        })
        
    },[]);

    return (
        <div>
            {state.loading ? 'loading...' : state.data.title}
            {state.error ? state.error : null}
        </div>
    )
}