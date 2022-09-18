
interface Colors {
  bg: string
  bgAccent: string
  bgLAccent: string
  text: string
  pop: string
  warn: string
  sux: string
  alfa: string
  betta: string
  hoverBorder: string
  delta?: string
}

export interface DefaultThemeType {
  theme: {
    mobileMax: string
    tabletMin: string
    desktopMin: string
    colors: Colors
  }
}

const defaultTheme = {
  mobileMax: '767.9px',
  tabletMin: '768px',
  desktopMin: '1280px',

  colors: {
    bg: '#e4e5e9',
    bgAccent: '#c1c6ca',
    bgLAccent: '#dadbdf',
    text: '#333333',
    pop: '#c1c6ca',
    warn: '#aa1d06',
    sux: '#3b511f',
    alfa: '#6b7d71',
    betta: '#84958d',
    hoverBorder: '#8399A4'
  }
}

export default defaultTheme
