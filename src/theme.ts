import { extendTheme,ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
    initialColorMode: 'dark' //setting the initial color mode to dark
};

const theme = extendTheme({ config}); //creating a theme object that extends it with current configuration

export default theme;