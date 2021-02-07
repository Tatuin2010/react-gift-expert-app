import { useState, useEffect } from "react";
import { getGifts } from "../helpers/getGifs";

export const useFetchGifs = (categoria) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {

        getGifts(categoria).then(img => {
            setTimeout(() => {
                setState({
                data: img,
                loading: false
                })
                
            }, 1000);

        });
 

    }, [categoria])

    return state;
}