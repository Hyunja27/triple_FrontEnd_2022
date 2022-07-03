import { useState, useEffect } from 'react'

import { StatisticType } from '../customType'
import { styled } from '../theme/theme'

// const infoMetrics = { value: 700, unit: '만 명', content: '여행자' }

const StatisticText = styled('p', {
  marginBottom: '20px',
  fontFamily: 'sans-serif',
  fontSize: '36px',
})

const WeightText = styled('span', {
  fontWeight: 'bold',
})

export default function SingleStatistic(props: { data: StatisticType }) {
  const { value, unit, content } = props.data
  const [statNumber, setStatNumber] = useState(0)

  useEffect(()=> {

  })

  // const counter = ($num: Element | null, max: number) => {
  //   let now = max

  //   const handle = setInterval(() => {
  //     if ($num !== null) {
  //       $num.innerHTML = Math.ceil(max - now).toString()
  //     }
  //     if (now < 0) {
  //       clearInterval(handle)
  //     }
  //     const step = now / 20
  //     now -= step
  //   }, 20)
  //   return handle
  // }

  // window.onload = () => {
  //   counter(numCounter.current, value)
  // }

  return (
    <StatisticText>
      <WeightText>
        <span>{value}</span> {unit}
      </WeightText>
      의 {content}
    </StatisticText>
  )
}
