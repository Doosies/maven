import React, {useEffect, useReducer} from 'react';


function reducer(state, action){
    switch(action.type){
        case 'LOADING':
            return {
              loading: true,
              data: null,
              error: null
            };
        case 'SUCCESS':
            return {
              loading: false,
              data: action.data,
              error: null
            };
        case 'ERROR':
            return {
              loading: false,
              data: null,
              error: action.error
            };
        default:
            throw new Error(`알수없는 타입 : ${action.type}`);
    }
}

const initialState = {
    loading: false,
    data: null,
    error: null,
};

function useAsync(callback, deps = [], skip = false){
    const[state, dispatch] = useReducer(reducer, initialState )

    const fetchData = async() =>{
        dispatch({type:'LOADING'});
        try{
            const data = await callback();
            dispatch({type:'SUCCESS', data});
        }catch(e){
            dispatch({type:'ERROR', error:e});
        }
    };

    useEffect(()=>{
        if(skip) return;
        fetchData();
        //eslint-disable-next-line
    }, deps);

    return [state, fetchData];
}
export default useAsync