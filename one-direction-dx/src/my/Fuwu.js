import React, { Component } from 'react';
import { BrowserRouter as Router,Route,Link} from 'react-router-dom';
import { NavBar, Icon, Tabs ,Carousel} from 'antd-mobile';
export default class Fuwu extends Component {
  render() {
    return (
      <div>
         <NavBar
            style={{ width:'100%',backgroundColor:'#37376f',color:'#fff',position:'fixed ',top:'0',zIndex:1}}
            leftContent={[
                <Link to="/shezhi"><span style={{fontSize:'17px',color:'white'}} className="iconfont icon-icon-copy-sy"></span></Link>
            ]}
            >
            <span>服务协议和隐私政策</span>
        </NavBar>
      </div>
    );
  }
}
