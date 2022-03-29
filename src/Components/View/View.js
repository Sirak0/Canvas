import React, { useEffect, useState } from "react";
import "./View.scss";
import { useSelector } from "react-redux";
import {useDispatch} from "react-redux";
import {useRef} from "react";
import "./View.responsive.scss";

function View() {
    const [src, setSrc] = useState()
    const viewContRef = useRef()
    const dispatch = useDispatch()
    const view = useSelector(function (state) {
        return state.view
    })
    function close(event){
   if(event.target === viewContRef.current){
        dispatch({
       type:"view",
       payload:false
        
   })}
    }
    
    useEffect(() => {
        if (!view) {
            const viewCont = document.querySelector(".view-cont")
            viewCont.style.display = "none"
        } else if (view) {
            const viewCont = document.querySelector(".view-cont")
            viewCont.style.display = "flex"
            setSrc(view)
        }
    }, [view])
    return (
        <div className="view-cont" onClick={close} ref={viewContRef}>

            <img className="view-image1" src={src}></img>

        </div>
    )
}
export default View;