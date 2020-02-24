

import React from 'react';
import Button from '../Button/Button';

interface ButtonProps {
    removeName: React.MouseEventHandler<HTMLButtonElement>
    name:string
  }
function List(props:ButtonProps) {

  return (
    <li className="list-group-item">
        <div className="row">
            <div className="col-md-6">
            {props.name}
            </div>
            <div className="col-md-6">
            <Button clicked={(event)=>props.removeName(event)} className="btn btn-danger">Remove Name</Button>
            </div >
        </div>
    </li>
  );
}

export default List;