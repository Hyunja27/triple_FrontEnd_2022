import { useRef } from 'react'

import { styled } from '../theme/theme'

interface StatisticType {
  value: number
  unit: string
  content: string
}

// const infoMetrics = { value: 700, unit: '만 명', content: '여행자' }

const StatisticText = styled('p', {
  marginBottom: '20px',
  fontFamily: 'sans-serif',
  fontSize: '36px',
})

const WeightText = styled('span', {
  fontWeight: 'bold',
})

export default function Statistic(data: StatisticType) {
  const { value, unit, content } = data
  const numCounter = useRef<HTMLSpanElement>(null)

  const counter = ($num: Element | null, max: number) => {
    let now = max

    const handle = setInterval(() => {
      if ($num !== null) {
        $num.innerHTML = Math.ceil(max - now).toString()
      }
      if (now < 0) {
        clearInterval(handle)
      }
      const step = now / 20
      now -= step
    }, 20)
    return handle
  }

  window.onload = () => {
    counter(numCounter.current, value)
  }

  return (
    <StatisticText>
      <WeightText>
        <span ref={numCounter}>{value}</span> {unit}
      </WeightText>
      의 {content}
    </StatisticText>
  )
}
