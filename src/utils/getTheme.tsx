import { ThemeType, themes } from '../static/themes'

export const getTheme = (theme: string): ThemeType => {
  return themes[theme as keyof typeof themes]
}
