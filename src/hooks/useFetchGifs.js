import { useState, useEffect } from 'react';
import { gefGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading: true,
    })

    useEffect(() => {
        gefGifs( category ).then( imgs => setState({
            data: imgs,
            loading: false
        }) );
    }, [category]);

    return state;
}