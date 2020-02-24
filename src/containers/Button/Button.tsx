import React from 'react';

function Button(props:{disabled?:boolean,className:string,children:string,clicked:React.MouseEventHandler<HTMLButtonElement>}) {
  return (
    <button disabled={props.disabled} onClick={props.clicked} className={props.className}>{props.children}</button>
  );
}

export default Button;