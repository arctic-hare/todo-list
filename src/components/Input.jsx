import React, {useState} from 'react';
import cn from 'classnames';

/**
 *
 * @param props
 * @returns {*}
 * @constructor
 */
export default function Input(props) {
  const [value, setValue] = useState(props.initValue || '');
  const [isInvalid, setIsInvalid] = useState(false);

  function handleInvalid(e) {
    e.preventDefault(); setIsInvalid(true)
  }

  function handleOnChange(e) {
    props.onChange(e.target.value);
    setValue(e.target.value)
  }

  return (
      <div className={cn('form-group', props.className,
          {
            'required': props.required,
            'disabled': props.disabled,
          })}
      >
        <label htmlFor={props.id}
               className="control-label">{props.label}</label>
        <input type="text"
               className="form-control"
               onInvalid={handleInvalid}
               onChange={handleOnChange}
               value={value}
               required={props.required}
               style={props.style}
        />
        {(isInvalid && String(value).length === 0) &&
        <span className="invalid-feedback">Поле «{props.label}» не может быть пустым</span>
        }
      </div>
  );

}