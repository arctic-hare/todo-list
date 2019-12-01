import React,{useState} from 'react';
import cn from 'classnames';
import PopupContext from '../context/PopupContext';

export default function BtnPopup(props) {

  const [isShowPopup, setIsShowPopup] = useState(false);

  function showPopup() {
    setIsShowPopup(true)
  }
  function closePopup() {
    setIsShowPopup(false)
  }

  const popup = {closePopup};


  console.log();

  return ( <div className={cn('popup', props.modifier)}>
    <button type="button"
            className="btn ml-auto"
            onClick={showPopup}

    >{props.btnText}</button>
    {isShowPopup &&
    <div className="popup__body">
      <div className="popup__overlay"
        onClick={closePopup}
      ></div>
      <div className="popup__inner">
        <div className="popup__content">
          <PopupContext.Provider value={{ popup }}>
            {props.children}
          </PopupContext.Provider>
        </div>
        <button type="button" className="popup__close"
                onClick={closePopup}
        >
          <span className="i-close"></span>
        </button>
      </div>
    </div>
    }
  </div>)

}