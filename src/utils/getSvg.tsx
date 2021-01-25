/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { StatsResponse } from './getStats'
import { ThemeType } from '../static/themes'

export interface SvgInfo {
  stats: StatsResponse
  username: string
  theme: ThemeType
}

export const getSuccessSvg = (info: SvgInfo): string => {
  const { stats, username, theme } = info
  const {
    totalSolved,
    totalQuestions,
    easySolved,
    totalEasy,
    mediumSolved,
    totalMedium,
    hardSolved,
    totalHard,
    acceptanceRate,
    ranking,
  } = stats
  const { background, title, text, circle, easy, med, hard } = theme

  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="495" height="195" viewBox="0 0 495 195" fill="none">
      <style>
      .header {
        font: 600 18px 'Segoe UI', Ubuntu, Sans-Serif;
        fill: ${title};
        animation: fadeInAnimation 0.8s ease-in-out forwards;
      }
      
      .stat {
        font: 600 14px 'Segoe UI', Ubuntu, "Helvetica Neue", Sans-Serif;
        fill: ${text};
      }

      .easy {
        fill: ${easy};
      }

      .medium {
        fill: ${med}
      }

      .hard {
        fill: ${hard}
      }
      
      .stagger {
        opacity: 0;
        animation: fadeInAnimation 0.3s ease-in-out forwards;
      }
      
      .acceptance-text {
        font: 800 24px 'Segoe UI', Ubuntu, Sans-Serif;
        fill: ${text};
        animation: scaleInAnimation 0.3s ease-in-out forwards;
      }
      
      .acceptance-title {
        font: 600 14px 'Segoe UI', Ubuntu, "Helvetica Neue", Sans-Serif;
        fill: ${text};
        animation: scaleInAnimation 0.3s ease-in-out forwards;
      }

      .bold {
        font-weight: 700
      }
      
      .acceptance-circle-rim {
        stroke: ${circle};
        fill: none;
        stroke-width: 6;
        opacity: 0.2;
      }
      
      .acceptance-circle {
        stroke: ${circle};
        stroke-dasharray: 377;
        fill: none;
        stroke-width: 6;
        stroke-linecap: round;
        opacity: 0.8;
        transform-origin: -10px 8px;
        transform: rotate(-90deg);
        animation: acceptanceAnimation 1s forwards ease-in-out;
      }
      
      @keyframes acceptanceAnimation {
        from {
          stroke-dashoffset: 377;
        }
        to {
          stroke-dashoffset: ${(377 * (100 - acceptanceRate!)) / 100.0};
        }
      }
      /* Animations */
      
      @keyframes scaleInAnimation {
        from {
          transform: translate(-5px, 5px) scale(0);
        }
        to {
          transform: translate(-5px, 5px) scale(1);
        }
      }
      
      @keyframes fadeInAnimation {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
      </style>
      <rect x="0.5" y="0.5" rx="4.5" height="99%" stroke="${background}" width="494" fill="${background}" stroke-opacity="1" />
      <g transform="translate(25, 35)">
        <g transform="translate(0, 0)">
          <text x="0" y="0" class="header">${username}'s LeetCode Stats</text>
        </g>
      </g>
      <g transform="translate(0, 55)">
        <g transform="translate(400, 47.5)">
          <circle class="acceptance-circle-rim" cx="-10" cy="8" r="60" />
          <circle class="acceptance-circle" cx="-10" cy="8" r="60" />
          <text class="acceptance-text" x="0" y="0" alignment-baseline="central" dominant-baseline="central" text-anchor="middle"> ${acceptanceRate}% </text>
          <text class="acceptance-title" x="0" y="20" alignment-baseline="central" dominant-baseline="central" text-anchor="middle"> acceptance </text>
          </g>
        <svg x="0" y="0">
          <g transform="translate(0, 0)">
            <g class="stagger" style="animation-delay: 450ms" transform="translate(25, 0)">
              <text class="stat bold" y="12.5">Ranking:</text>
              <text class="stat" x="200" y="12.5">${ranking}</text>
            </g>
          </g>
          <g transform="translate(0, 25)">
            <g class="stagger" style="animation-delay: 600ms" transform="translate(25, 0)">
              <text class="stat bold" y="12.5">Total Questions Solved:</text>
              <text class="stat" x="200" y="12.5">${totalSolved}/${totalQuestions}</text>
            </g>
          </g>
          <g transform="translate(0, 50)">
            <g class="stagger" style="animation-delay: 750ms" transform="translate(25, 0)">
              <text class="stat bold easy" y="12.5">Easy Questions Solved:</text>
              <text class="stat easy" x="200" y="12.5">${easySolved}/${totalEasy}</text>
            </g>
          </g>
          <g transform="translate(0, 75)">
            <g class="stagger" style="animation-delay: 900ms" transform="translate(25, 0)">
              <text class="stat bold medium" y="12.5">Medium Questions Solved:</text>
              <text class="stat medium" x="200" y="12.5">${mediumSolved}/${totalMedium}</text>
            </g>
          </g>
          <g transform="translate(0, 100)">
            <g class="stagger" style="animation-delay: 1050ms" transform="translate(25, 0)">
              <text class="stat bold hard" y="12.5">Hard Questions Solved:</text>
              <text class="stat hard" x="200" y="12.5">${hardSolved}/${totalHard}</text>
            </g>
          </g>
        </svg>
      </g>
    </svg>
  `
}

export const getErrorSvg = (errMsg: string): string => {
  return `
    <svg width="495" height="120" viewBox="0 0 495 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <style>
        .text { font: 600 16px 'Segoe UI', Ubuntu, Sans-Serif; fill: #d500f9 }
        .small { font: 600 12px 'Segoe UI', Ubuntu, Sans-Serif; fill: #252525 }
        .gray { fill: #858585 }
      </style>
      <rect x="0.5" y="0.5" width="494" height="99%" rx="4.5" fill="#FFFEFE" stroke="#E4E2E2"/>
      <text x="25" y="45" class="text">Something went wrong!</text>
      <text x="25" y="55" class="text small">
        <tspan x="25" dy="18">${errMsg}</tspan>
      </text>
    </svg>
  `
}
