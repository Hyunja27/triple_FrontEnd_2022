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
  const { destValue, unit, content } = props.data
  const [statNumber, setStatNumber] = useState(0)
  const endTime = Number(new Date()) + 700

  useEffect(() => {
    if (statNumber === destValue) {
      return
    }
    const increaseInteval =
      (endTime - Number(new Date())) / (destValue - statNumber)
    setTimeout(() => {
      setStatNumber(statNumber + 1)
    }, increaseInteval)
  }, [statNumber])

  return (
    <StatisticText>
      <WeightText>
        <span>{statNumber}</span> {unit}
      </WeightText>
      의 {content}
    </StatisticText>
  )
}