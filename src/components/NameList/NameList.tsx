import React from 'react';
import './NameList.css';
import List from '../../containers/List/List';
import Jumbotron from '../../containers/Jumbotron/Jumbotron';
import Seperator from '../../containers/Seperator/Seperator';
import { connect,ConnectedProps } from 'react-redux';
import  Button from '../../containers/Button/Button';
import * as actions from '../../store/actions';
import {STATE} from '../../store/types';


function mapStateToProps(state:STATE){
    return {
        names:state.names,
        chooseName:state.choosenName,
        addedName:state.addedName
    }
}
const mapDispatchToProps =(dispatch:any, ownProps:any)=> {
    return{
        addName : (name:string)=>dispatch(actions.addName(name)),
        removeName :(name:string)=>dispatch(actions.removeName(name)),
        pickRandomName :()=>dispatch(actions.pickRandomName()),
        enterNewName:(event:any)=>dispatch(actions.enterNewName(event.target.value))
    }
}
const connector = connect(
    mapStateToProps,
    mapDispatchToProps
  )
type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux & {
    names:string[],
    choosenName:string,
    addedName:string
}
const NameList = (props:Props)=>{
        let names = props.names.map((name,index)=>{
            return (
                <List key={index} 
                      name={name}
                      removeName={()=>props.removeName(name)}/>
            )
        })
        return (
            <div className="App">
                <div className="container">
                    <div className="row">
                    <div className="input-group">
                        <span className="input-group-addon" 
                        id="basic-addon1">Name</span>
                        <input onChange={props.enterNewName} 
                                value={props.addedName} 
                                type="text" 
                                className="form-control" 
                                placeholder="Username" 
                                aria-describedby="basic-addon1" />
                    </div>
                    <Seperator />
                    <Button disabled={props.addedName==''} clicked={()=>props.addName(props.addedName)} className="btn btn-success">Add Name</Button>
                    <Seperator />
                    <div className="panel panel-default">
                        <div className="panel-heading">List of Names Entered by User</div>
                        <div className="panel-body">
                            <ul className="list-group">
                                {names}
                            </ul>
                        </div>
                    </div>
                    <Seperator />
                    <Button disabled={props.names.length==0}  className="btn btn-success" clicked={props.pickRandomName} >Pick a Random Name</Button>
                    <Seperator />
                    <div className="panel panel-default">
                        <div className="panel-heading">This is the randomly choosen name by you</div>
                        <div className="panel-body">
                            <Jumbotron name={props.chooseName}/>
                        </div>
                    </div>   
                    </div>
                </div>
            </div>
          );
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(NameList);
