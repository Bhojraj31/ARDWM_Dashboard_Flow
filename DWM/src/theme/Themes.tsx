
/*
* @Copyright notice:- AnandRathi IT Pvt. Ltd. This code is intellectual property of AnandRathi Group, and is protected by the relevant laws.
* */

// themes.ts

export interface Theme {
  colors: {
    background:string,
    drawerBackground:string;
    cardBackground:string;
    button: string;
    buttonBorder: string;
    text: string;
    label: string;
    errorLabel: string;
    primary: string;
    secondary: string;
    activeTabTintColor: string;
    InactiveTintColor: string;
    toggleActiveColor: string;
    buttonBackgroundColor: string;

    // ...add more colors as needed
  };
  fonts: {
    regular: string;
    bold: string;
    // ...add more fonts as needed
  };
}

const defaultTheme = {
  fonts: {
    regular: "Roboto-Regular",
    bold: "Roboto-Bold",
  }
}

// Light theme properties here
export const lightTheme: Theme = {
  ...defaultTheme,
  colors: {
    background: '#ffffff',
    drawerBackground: '#F0F0F0',
    cardBackground: '#e6f7ff',
    button: '#37B4E5',
    buttonBorder: '#37B4E5',
    text: '#212121',
    label: '#000000',
    errorLabel: '#F53B30',
    primary: "#3498db",
    secondary: "#2ecc71",
    activeTabTintColor: '#000',
    InactiveTintColor: '#D3D3D3',
    toggleActiveColor: '#ebf9f5',
    buttonBackgroundColor: '#00b389'
  },
};

// Dark theme properties here
export const darkTheme: Theme = {
  ...defaultTheme,
  colors: {
    background: '#040D14',
    drawerBackground: '#17202A',
    cardBackground: '#101b25',
    button: '#37B4E5',
    buttonBorder: '#37B4E5',
    text: '#82868A',
    label: '#ffffff',
    errorLabel: '#F53B30',
    primary: "#2980b9",
    secondary: "#27ae60",
    activeTabTintColor: '#ffffff',
    InactiveTintColor: '#82868A',
    toggleActiveColor: '#10362d',
    buttonBackgroundColor: '#FFC0CB'
  },
};
