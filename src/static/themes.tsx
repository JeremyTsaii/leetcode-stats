export type ThemeType = {
  value: string
  background: string
  text: string
  circle: string
  easy: string
  med: string
  hard: string
}
export const defaultTheme = {
  value: 'Light',
  background: '',
  text: '',
  circle: '',
  easy: '',
  med: '',
  hard: '',
}
export const themes = [
  defaultTheme,
  {
    value: 'Dark',
    background: '',
    text: '',
    circle: '',
    easy: '',
    med: '',
    hard: '',
  },
]
