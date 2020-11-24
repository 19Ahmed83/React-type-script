import React from 'react';
import Sale from "./Sale";

interface ILink{
    id:number;
    link:string;
    text:string;
}
interface IProps{
    menucars:ILink[];
}
interface ILink{
    id:number;
    link:string;
    text:string;
}
interface IProps{
    menufooter:ILink[];
}
interface ILink{
    id:number;
    link:string;
    text:string;
}
interface IProps{
    menuheader:ILink[]
}

export default function Cars(props:IProps){

    const menusale=[
        {
            id:1,
            link:'/mazda-25%',
            text:'Mazda-25%'
        },
        {
            id:2,
            link:'/toyota-15%',
            text:'Toyota-15%'
        },
        {
            id:3,
            link:'nissan-30%',
            text:'Nissan-30%'
        },
        {
            id:4,
            link:'/honda-10%',
            text:'Honda-10%'
        }
    ]

    return(
        <div>Cars {props.menucars.map(el=><li key={el.id}><a href={el.link}>{el.text}</a></li>)}
            {props.menufooter.map(el=><li key={el.id}><a href={el.link}>{el.text}</a></li>)}
            {props.menuheader.map(el=><li key={el.id}><a href={el.link}>{el.text}</a></li>)}
            <Sale menucars={props.menucars} menusale={menusale}/>

        </div>
    );
}