const primaryColor = '#2f95dc',
  primaryColorContrast = '#fff',
  bodyColor = '#fff',
  defaultColor = 'gray',
  defaultColorContrast = '#fff',
  successColor = 'green',
  successColorContrast = '#fff',
  warningColor = 'yellow',
  warningColorContrast = '#fff',
  dangerColor = 'red',
  dangerColorContrast = '#fff',
  oddColor = bodyColor,
  oddColorContrast = '#333',
  evenColor = '#eee',
  evenColorContrast = '#333';

export const Colors = {
  primaryColor,
  tabIconDefault: '#ccc',
  tabIconSelected: primaryColor,
  tabBar: '#fefefe',
  errorBackground: 'red',
  errorText: '#fff',
  warningBackground: '#EAEB5E',
  warningText: '#666804',
  noticeBackground: primaryColor,
  noticeText: '#fff',
  // custom colors
  status: {
    primary: primaryColor,
    success: successColor,
    warning: warningColor,
    danger: dangerColor,
  },
  odd: oddColor,
  even: evenColor,
  button: {
    primary: {
      background: primaryColor,
      text: primaryColorContrast,
    },
    success: {
      background: successColor,
      text: successColorContrast,
    },
    warning: {
      background: warningColor,
      text: warningColorContrast,
    },
    danger: {
      background: dangerColor,
      text: dangerColorContrast,
    }
  },
};

export const Sizes = {
  gap: {
    default: 10,
    small: 5,
    big: 15,
  },
  font: {
    default: 14,
    small: 11,
    big: 18,
  },
  button: {
    minWidth: 35
  }
};
