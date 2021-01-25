export type ThemeType = {
  value: string
  background: string
  title: string
  text: string
  circle: string
  easy: string
  med: string
  hard: string
}
export const defaultTheme = {
  value: 'Light',
  background: '#fffefe',
  title: '#d500f9',
  text: '#333',
  circle: '#d500f9',
  easy: '#00a152',
  med: '#ff9100',
  hard: '#f50057',
}
export const unknownTheme = {
  value: 'unknown',
  background: '',
  title: '',
  text: '',
  circle: '',
  easy: '',
  med: '',
  hard: '',
}
export const themes = {
  light: defaultTheme,
  dark: {
    value: 'Dark',
    background: '#121212',
    title: '#757de8',
    text: '#a9fef7',
    circle: '#757de8',
    easy: '#00e676',
    med: '#ff9100',
    hard: '#f73378',
  },
}
