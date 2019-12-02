import React from 'react';
import cn from 'classnames';
import {useSelector} from "react-redux";

const loading = (<div className="loader-waiting">
  <div className="loader" role="progressbar">
    <svg viewBox='22 22 44 44'>
      <circle className="circle" cx='44' cy='44' r='20.2' fill='none'
              strokeWidth='3.6'/>
    </svg>
  </div>
</div>);

export default function Loader(props) {

  const isLoading = useSelector(state => state.isLoading);

  return <div className={cn({
    'loader-wrapper': isLoading
  })}>{props.children}
    {isLoading && loading}
  </div>

}
