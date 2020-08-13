import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa'
export default class  extends Component {
    state={
        services:[
            {
                icon:<FaCocktail />,
                title:'Free cocktails',
                info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!'
            },
            {
                icon:<FaHiking />,
                title:'Fantastic hiking',
                info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!'
            },
            {
                icon:<FaShuttleVan />,
                title:'Free shuttle pickup',
                info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!'
            },
            {
                icon:<FaBeer />,
                title:'Wonderful beer',
                info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!'
            },
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="services"/>
                <div className="services-center">
                    {this.state.services.map((item,index)=>{
                        return (
                            <article key={index} className='services'>
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        );
                    })}
                </div>
            </section >
        )
    }
}
