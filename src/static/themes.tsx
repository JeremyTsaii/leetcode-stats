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
  title: '#2f80ed',
  text: '#333',
  circle: '#2f80ed',
  easy: '#00e676',
  med: '#ff9100',
  hard: '#f73378',
}
export const themes = [
  defaultTheme,
  {
    value: 'Dark',
    background: '#121212',
    title: '#fe428e',
    text: '#a9fef7',
    circle: '#fe428e',
    easy: '#00e676',
    med: '#ff9100',
    hard: '#f73378',
  },
]
