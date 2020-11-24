import React from 'react';
import Cars from "./Cars";

interface ILink{
    id:number;
    link:string;
    text:string;
}
interface IProps{
    menufooter:ILink[]
}
interface ILink{
    id:number;
    link:string;
    text:string;
}
interface IProps{
    menuheader:ILink[]
}

const menucars=[
    {
        id:1,
        link:'/mazda',
        text:'Mazda'
    },
    {
        id:2,
        link:'/toyota',
        text:'Toyota'
    },
    {
        id:3,
        link:'/nissan',
        text:'Nisssan'
    },
    {
        id:4,
        link:'/honda',
        text:'honda'
    }
]

export default function Footer(props:IProps){
    return <div>Footer {props.menufooter.map(el=><li key={el.id}><a href={el.link}>{el.text}</a></li>)}
        {props.menuheader.map(el=><li key={el.id}><a href={el.link}>{el.text}</a></li>)}
        <Cars menucars={menucars} menufooter={props.menufooter} menuheader={props.menuheader}/>

    </div>
}