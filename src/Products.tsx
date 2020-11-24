import React from 'react';

interface ILink{
    id:number;
    link:string;
    text:string;
}
interface IProps{
    menuproducts:ILink[]
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

export default function Products(props:IProps){
    return (
        <div>Products{props.menuproducts.map(el=><li key={el.id}><a href={el.link}>{el.text}</a></li>)}
            {props.menufooter.map(el=><li key={el.id}><a href={el.link}>{el.text}</a></li>)}
            {props.menuheader.map(el=><li key={el.id}><a href={el.link}>{el.text}</a></li>)}

        </div>
    );
}