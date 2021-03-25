import { DefaultTheme as PaperDefaultTheme } from "react-native-paper";
import { DefaultTheme as NavigationDefaultTheme } from "@react-navigation/native";

export default theme = {
  ...PaperDefaultTheme,
  ...NavigationDefaultTheme,
  roundness: 8,
  spacing(multiple = 1) {
    return 8 * multiple;
  },
  colors: {
    ...PaperDefaultTheme.colors,
    ...NavigationDefaultTheme.colors,
    primary: "#0f6b38",
    accent: "#009f49",
  },
};
