import React, {useEffect, useState, createRef} from 'react';
import { DropdownPropsType } from 'types/Dropdown';
import { DropdownOptionType } from 'types/Dropdown';
import { createStyles } from './style';

const Dropdown = (props:DropdownPropsType) => {
  const {dropdownTitle, dropdownOptions} = props;
  
  const [openDropdown, setOpenDropdown] = useState<Boolean>(false);
  const [buttonTitle, setbuttonTitle] = useState<string>(dropdownTitle);

  const ref = createRef<HTMLDivElement>()
  const classes = createStyles();

  const onDropdownClick = (e: React.SyntheticEvent):void => {
    setOpenDropdown(!openDropdown);
  };

  const onOptionCLick = (e:React.SyntheticEvent, value:string):void=> {
    setbuttonTitle(value)
    onDropdownClick(e)
  }
  useEffect(() => {
    const checkIfClickedOutside = (e: MouseEvent):void => {
      if (openDropdown && ref.current) {
        setOpenDropdown(false)
      }
    }
    document.addEventListener("click", checkIfClickedOutside)
    return () => {
      document.removeEventListener("click", checkIfClickedOutside)
    }
  }, [openDropdown])


  return (
    <>
    <div className={classes.Dropdown} ref={ref}>
      <button type="button" onClick={(e)=>onDropdownClick(e)} className={classes.DropdownButton}>
        {buttonTitle}
      </button>
       {openDropdown &&
        <ul className={classes.List}>
          {dropdownOptions.map( (country:DropdownOptionType)=> {
            return(<li onClick={(e)=>onOptionCLick(e, country.value)} key={country.value}>{country.value}</li>)
          })}
        </ul>
       }
    </div>
    </>
  );
};

export default Dropdown;