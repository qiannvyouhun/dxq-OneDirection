import { NavBar, Icon,Tabs,Carousel} from 'antd-mobile';
import React, { Component } from 'react'

export default class Method extends Component {
    render() { 
        return (
            <div>
                <NavBar style={{backgroundColor:'#343466',color:'#fff',height:'44px',position:'sticky ',top:'0',zIndex:11111111}}

                >校园新生通</NavBar>
 
                    <Carousel
                        autoplay={true}
                        infinite
                        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                        afterChange={index => console.log('slide to', index)}
                        dotStyle={{ height: 3, width: 20, borderRadius: 0 }}
                        dotActiveStyle={{ height: 3, width: 20, borderRadius: 0, backgroundColor: '#3fcccb' }}
                    >
                    {[1, 2,3,4].map(val => (
                        <a
                            key={val}
                            style={{ display: 'inline-block', width: '100%', height: '220px' }}
                        >
                            <img
                                src={`gonglve/gonglve${val}.jpg`}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                                }}
                            />
                        </a>
                    ))}
                    </Carousel>
                    
                    <div>
                        {/* <ul>
                            <li style={{height:'100',width:'100',backgroundColor:'red'}}>

                            </li>
                        </ul> */}
                    </div>
                   
            </div>
        )
    }
}
