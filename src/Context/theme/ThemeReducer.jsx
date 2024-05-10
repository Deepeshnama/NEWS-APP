// reducer function for theme

export const ThemeReducer = (state, action) => {
    switch (action.type) {
      // case "LIGHT_MODE":
      //   return {
      //     ...state,
      //     darkMode: false,
      //   };

      // case "DARK_MODE":
      //   return {
      //     ...state,
      //     darkMode: true,
      //   };


      case 'CHANGE_THEME' :
        return {
          ...state ,
          darkMode : state.darkMode ? false : true ,
        }
    }
  };