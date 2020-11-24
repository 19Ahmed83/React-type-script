import React from 'react';

interface ILink{
    id:number;
    link:string;
    text:string;
}
interface IProps{
    menucars:ILink[]
}
interface ILink{
    id:number;
    link:string;
    text:string;
}
interface IProps{
    menusale:ILink[]
}

export default function Sale(props:IProps){
    return (
        <div>Sale{props.menucars.map(el=><li key={el.id}><a href={el.link}>{el.text}</a></li>)}
            {props.menusale.map(el=><li key={el.id}><a href={el.link}>{el.text}</a></li>)}

        </div>
    );
}