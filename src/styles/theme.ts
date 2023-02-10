import { wp } from '@utils/_dimensions'

const fontFamily = 'Avenir',
  fontsSizes = {
    big: {
      fontSize: wp(5),
    },
    bigger: {
      fontSize: wp(6),
    },
    biggest: {
      fontSize: wp(7),
    },
    huge: {
      fontSize: wp(8),
    },
    huggest: {
      fontSize: wp(9),
    },
    normal: {
      fontSize: wp(4),
    },
    small: {
      fontSize: wp(3),
    },
    smallest: {
      fontSize: wp(2),
    },
  },
  fonts = {
    big: {
      bold: {
        ...fontsSizes.big,
        fontFamily,
        fontWeight: 'bold',
      },
      normal: {
        ...fontsSizes.big,
        fontFamily,
        fontWeight: 'normal',
      },
      regular: {
        ...fontsSizes.big,
        fontFamily,
        fontWeight: 'regular',
      },
      semiBold: {
        ...fontsSizes.big,
        fontFamily,
        fontWeight: 'semi-bold',
      },
    },
    bigger: {
      bold: {
        ...fontsSizes.bigger,
        fontFamily,
        fontWeight: 'bold',
      },
      normal: {
        ...fontsSizes.bigger,
        fontFamily,
        fontWeight: 'normal',
      },
      regular: {
        ...fontsSizes.bigger,
        fontFamily,
        fontWeight: 'regular',
      },
      semiBold: {
        ...fontsSizes.bigger,
        fontFamily,
        fontWeight: 'semi-bold',
      },
    },
    biggest: {
      bold: {
        ...fontsSizes.biggest,
        fontFamily,
        fontWeight: 'bold',
      },
      normal: {
        ...fontsSizes.biggest,
        fontFamily,
        fontWeight: 'normal',
      },
      regular: {
        ...fontsSizes.biggest,
        fontFamily,
        fontWeight: 'regular',
      },
      semiBold: {
        ...fontsSizes.biggest,
        fontFamily,
        fontWeight: 'semi-bold',
      },
    },
    huge: {
      bold: {
        ...fontsSizes.huge,
        fontFamily,
        fontWeight: 'bold',
      },
      normal: {
        ...fontsSizes.huge,
        fontFamily,
        fontWeight: 'normal',
      },
      regular: {
        ...fontsSizes.huge,
        fontFamily,
        fontWeight: 'regular',
      },
      semiBold: {
        ...fontsSizes.huge,
        fontFamily,
        fontWeight: 'semi-bold',
      },
    },
    huggest: {
      bold: {
        ...fontsSizes.huggest,
        fontFamily,
        fontWeight: 'bold',
      },
      normal: {
        ...fontsSizes.huggest,
        fontFamily,
        fontWeight: 'normal',
      },
      regular: {
        ...fontsSizes.huggest,
        fontFamily,
        fontWeight: 'regular',
      },
      semiBold: {
        ...fontsSizes.huggest,
        fontFamily,
        fontWeight: 'semi-bold',
      },
    },
    normal: {
      bold: {
        ...fontsSizes.normal,
        fontFamily,
        fontWeight: 'bold',
      },
      normal: {
        ...fontsSizes.normal,
        fontFamily,
        fontWeight: 'normal',
      },
      regular: {
        ...fontsSizes.normal,
        fontFamily,
        fontWeight: 'regular',
      },
      semiBold: {
        ...fontsSizes.normal,
        fontFamily,
        fontWeight: 'semi-bold',
      },
    },
    small: {
      bold: {
        ...fontsSizes.small,
        fontFamily,
        fontWeight: 'bold',
      },
      normal: {
        ...fontsSizes.small,
        fontFamily,
        fontWeight: 'normal',
      },
      regular: {
        ...fontsSizes.small,
        fontFamily,
        fontWeight: 'regular',
      },
      semiBold: {
        ...fontsSizes.small,
        fontFamily,
        fontWeight: 'semi-bold',
      },
    },
    smallest: {
      bold: {
        ...fontsSizes.smallest,
        fontFamily,
        fontWeight: 'bold',
      },
      normal: {
        ...fontsSizes.smallest,
        fontFamily,
        fontWeight: 'normal',
      },
      regular: {
        ...fontsSizes.smallest,
        fontFamily,
        fontWeight: 'regular',
      },
      semiBold: {
        ...fontsSizes.smallest,
        fontFamily,
        fontWeight: 'semi-bold',
      },
    },
  },
  colors = {
    background: '#fff',
    primary: '#000',
    secondary: '##334FFA',
  };

export type ThemeProps = {
  color?: 'primary' | 'secondary' | 'background';
  size?:
    | 'huggest'
    | 'huge'
    | 'biggest'
    | 'bigger'
    | 'big'
    | 'normal'
    | 'small'
    | 'smallest';
  variant?: 'normal' | 'regular' | 'bold' | 'semiBold';
};
export declare type Theme = {
  fontsSizes?: ThemeProps['size'];
  fonts: ThemeProps['size'];
  colors: ThemeProps['color'];
};

export { fonts, fontsSizes, colors }

