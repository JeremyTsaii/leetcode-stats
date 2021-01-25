import { NowRequest, NowResponse } from '@vercel/node'
import { getStats } from '../src/utils/getStats'
import { getSuccessSvg, getErrorSvg } from '../src/utils/getSvg'
import { getTheme } from '../src/utils/getTheme'

export default async (req: NowRequest, res: NowResponse) => {
  const {
    username,
    theme,
  } = req.query

  res.setHeader('Content-Type', 'image/svg+xml')
  res.setHeader('Cache-Control', 'public, max-age=1800')

  try {
    if (!username) { // user did not enter username
      return res.send(getErrorSvg('please enter a username (ex: username=leetcodeuser)'))
    }

    const user = username as string
    const userTheme = theme ? getTheme((theme as string).toLowerCase()) : getTheme('light')

    if (userTheme.value === 'unknown') { // user entered invalid theme
      return res.send(getErrorSvg('please enter a valid theme'))
    }

    const stats = await getStats(user)
  
    if (stats.status === 'success') {
      return res.send(getSuccessSvg({stats, username: user, theme: userTheme}))
    } else { // user does not exist
      return res.send(getErrorSvg(stats.message))
    }
  } catch { // unknown backend error
    return res.send(getErrorSvg('backend error occurred'))
  }
}