const colors = {
  primary: '#333',
  secondary: '#333c45',
  tertiary: '#4a4a4a',
  bold: '#181d1f',
  border: '#aaafb9',
  gray: '#898f94',
  pink: '#ff659e',
  orange: '#f56b30',
};

const fonts = {
  base: '14px',
};

const gap = {
  box: 6,
  Tooltip: 8,
  image: 11,
  swiper: 10,
};

const zIndex = {
  tooltip: 1000,
  tooltipArrow: 1100,
};

const size = {
  imageViewWidth: 800,
  imageViewHeight: 998,
  boxWidth: 106,
};

const theme = {
  colors,
  fonts,
  gap,
  zIndex,
  size,
};

export type Theme = typeof theme;
export default theme;
