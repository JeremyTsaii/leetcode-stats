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
  raspberry: {
    value: 'Raspberry',
    background: '#121212',
    title: '#ad1457',
    text: '#8e24aa',
    circle: '#ad1457',
    easy: '#00e676',
    med: '#ff9100',
    hard: '#f73378',
  },
  mist: {
    value: 'Mist',
    background: '#004d40',
    title: '#4dd0e1',
    text: '#00bcd4',
    circle: '#4dd0e1',
    easy: '#00e676',
    med: '#ff9100',
    hard: '#f73378',
  },
}
