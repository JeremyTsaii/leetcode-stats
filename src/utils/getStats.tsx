import axios from 'axios'

const ENDPOINT = ''

interface StatsResponse {
  status: string
  totalSolved?: number
  easySolved?: number
  totalEasy?: number
  mediumSolved?: number
  totalMedium?: number
  hardSolved?: number
  totalHard?: number
  acceptanceRate?: number
  ranking?: number
  contributionPoints?: number
  reputation?: number
}

const getStatsReq = (): StatsResponse => {
  axios
    .get(ENDPOINT)
    .then((response) => {
      return response
    })
    .catch(() => {
      return { status: 'error' }
    })
  return { status: 'error' }
}

export default getStatsReq
