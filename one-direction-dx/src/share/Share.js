import { NavBar} from 'antd-mobile';
import React, { Component } from 'react';
import {HashRouter as Router,Route,Link} from 'react-router-dom';
import '../share.css'

export default class Share extends Component {
    render(){
        return (      
        <div className='communicateImg'>
              <NavBar style={{backgroundColor:"#37376F",color:"#fff",position:"sticky",top:0,zIndex:10,textAlign:"center"}}>
                学习交流</NavBar> 
                <div>
                    <Link to="/Word">
                        <div className="resourceShare">
                            <span className="iconfont icon-shuji"></span>
                            <p className="font-zy">资源共享</p>
                        </div>  
                    </Link>
                    <Link to="/StudyCommunicate">
                        <div className="StudyCommunicate">
                            <span className="iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu-"></span>
                            <p style={{fontSize:"22px",margin:"27% auto",textAlign:"center"}}>学习交流</p>
                        </div>  
                    </Link>
                </div>                
            </div>

        )
    }
}
