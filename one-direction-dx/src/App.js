import React,{Component} from 'react';
import AppTab from './container/AppTab'
import {HashRouter as Router,Route,Link} from 'react-router-dom';
import MaterialSharing from "./share/MaterialSharing";
import StudyCommunicate from "./share/StudyCommunicate";
import Word from "./share/Word";
import PDF from "./share/PDF";
import PPT from "./share/PPT";
import AddFile from "./share/AddFile";
import Communicate from "./share/Communicate";
import AppTab3 from "./container/AppTab3";
import CommunicataDetails from "./share/CommunicataDetails"
import Comment from "./share/Comment"
import My from "./my/My"
import Success from "./my/Success"
import ChangeTel from "./my/ChangeTel"
import ChangePsd from "./my/ChangePsd"

/**
 * synyan
 */
import Shoucang from './my/Shoucang';
import Tongxun from './my/Tongxun';
import Women from './my/Women';
import Yonghu from './my/Yonghu';
import Shezhi from './my/Shezhi';
import Zhanghao from './my/Zhanghao';
import Xiaoxi from './my/Xiaoxi';
import Yinsi from './my/Yinsi';
import Huancun from './my/Huancun';
import Fuwu from './my/Fuwu';




export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={AppTab}/>
                    <Route path="/MaterialSharing" component={MaterialSharing}/>
                    <Route path="/StudyCommunicate" component={StudyCommunicate}/>
                    <Route path="/Word" component={Word}/>
                    <Route path="/PDF" component={PDF}/>
                    <Route path="/PPT" component={PPT}/>
                    <Route path="/AddFile" component={AddFile}/>
                    <Route path="/Communicate" component={Communicate}/>
                    <Route path="/Share" component={AppTab3}/>
                    <Route path="/CommunicataDetails" component={CommunicataDetails}/>
                    <Route path="/Comment" component={Comment}/>
                    <Route path="/My" component={My}/>
                    <Route path="/Success" component={Success}/>
                    <Route path="/Yonghu" component={Yonghu}/>
                    <Route path="/ChangeTel" component={ChangeTel}/>
                    <Route path="/ChangePsd" component={ChangePsd}/>




                    
                    {/* {孙妍} */}
                    <Route path="/shoucangone" component={Shoucang}/>
                    <Route path="/tongxunlvone" component={Tongxun}/>
                    <Route path="/wm" component={Women}/>
                    <Route path="/yonghufankui" component={Yonghu}/>
                    <Route path="/shezhi" component={Shezhi}/>
                    <Route path="/zhanghao" component={Zhanghao}/>
                    <Route path="/xiaoxixi" component={Xiaoxi}/>
                    <Route path="/yinsione" component={Yinsi}/>
                    <Route path="/huancun" component={Huancun}/>
                    <Route path="/fuwu" component={Fuwu}/>


                </div>
            </Router>
        ) 
    }
}
