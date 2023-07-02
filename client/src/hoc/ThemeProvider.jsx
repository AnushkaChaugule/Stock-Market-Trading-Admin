import { ThemeProvider, createTheme } from "@mui/material";
import {
  FC,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { tokens } from "../utils/theme";

// declare module "@mui/material/styles" {
//   interface Palette {
//     indigo: Palette["primary"];
//     blue: Palette["primary"];
//     green: Palette["primary"];
//     red: Palette["primary"];
//     violet: Palette["primary"];
//     bgColor: Palette["primary"];
//     card: Palette["primary"];
//     sidebar: Palette["primary"];
//     textColor: Palette["primary"];
//   }

//   interface PaletteOptions {
//     indigo: PaletteOptions["primary"];
//     blue: PaletteOptions["primary"];
//     green: PaletteOptions["primary"];
//     red: PaletteOptions["primary"];
//     violet: PaletteOptions["primary"];
//     bgColor: PaletteOptions["primary"];
//     card: PaletteOptions["primary"];
//     sidebar: PaletteOptions["primary"];
//     textColor: PaletteOptions["primary"];
//   }
// }

// declare module "@mui/material/Button" {
//   interface ButtonPropsColorOverrides {
//     indigo: true;
//     blue: true;
//     green: true;
//     red: true;
//     violet: true;
//   }
// }
// declare module "@mui/material/IconButton" {
//   interface IconButtonPropsColorOverrides {
//     indigo: true;
//     blue: true;
//     green: true;
//     red: true;
//     violet: true;
//   }
// }

const UserThemeContext = createContext({
  toggleTheme: () => {},
});
export const useToggleTheme = () => useContext(UserThemeContext);

const UserTheme = (props) => {
  const { children } = props;

  const { palette } = createTheme();

  const colors = tokens();

  const { augmentColor } = palette;
  const createColor = (mainColor) =>
    augmentColor({ color: { main: mainColor } });
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: "light",
          violet: createColor(colors.violet[500]),
          indigo: createColor(colors.indigo[500]),
          blue: createColor(colors.blue[500]),
          green: createColor(colors.green[500]),
          red: createColor(colors.red[500]),
          bgColor: createColor(colors.bgColor),
          card: createColor(colors.card),
          sidebar: createColor(colors.sidebar),
          textColor: createColor(colors.textColor[500]),
          background: {
            default: colors.bgColor,
          },
        },
        typography: {},
      }),
    // createTheme(themeSettings(userTheme)),
    []
  );

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default UserTheme;
