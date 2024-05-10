import React, { useContext } from 'react'
import { FaMoon, FaSun } from "react-icons/fa";
import ThemeContext from '../Context/theme/ThemeContext';

const ThemeButton = () => {

  const {dispatch , darkMode} = useContext(ThemeContext)


  const customStyle = {
    height : "75px" ,
    width : "75px" ,
    borderRadius : "50%" ,
    textAlign : "center" ,
    position : "fixed" ,
    right : "20px" ,
    bottom : "20px" ,
    display : "flex" ,
    alignItems : "center",
    justifyContent : "center" ,
    fontSize : "25px" 
  }

  // const changeTheme = () => {
  //   if (darkMode) {
  //     dispatch({
  //       type: "LIGHT_MODE",
  //       payload: false,
  //     });
  //   } else {
  //     dispatch({
  //       type: "DARK_MODE",
  //       payload: true,
  //     });
  //   }
  // }


  const changeTheme = () => {

    dispatch({
      type : 'CHANGE_THEME' ,
    })

  }

  return (
    <span style={customStyle} className={darkMode ? "bg-dark text-light" : "bg-warning text-light"} onClick={changeTheme}>
      {
        darkMode ? <FaMoon /> : <FaSun/>
      }
    </span>
  )
}

export default ThemeButton