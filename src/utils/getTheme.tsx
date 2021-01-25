import { ThemeType, themes, unknownTheme } from '../static/themes'

export const getTheme = (theme: string): ThemeType => {
  if (Object.prototype.hasOwnProperty.call(themes, theme)) {
    return themes[theme as keyof typeof themes]
  }
  return unknownTheme
}
