import React from "react";
import {devAreaData} from '../../data/devarea_data';
import DevAreaItem from "../DevAreaItem/DevAreaItem";

function DevArea(){
    return (
        <div className="w-full md:w-3/4 p-2">
            <h1 className="text-3xl md:text-4xl text-left md:text-center mx-2 my-0 md:my-4 p-2 tracking-wide">Development Arena</h1>
            <div className="grid grid-cols-1 md:grid-cols-3">
            {
                devAreaData.map((item)=>{
                    return <DevAreaItem item={item} key={item.id} />
                })
            }
            </div>
        </div>
    );
}

export default DevArea;