import { styled, fadeIn } from '../../theme/theme'
import { StatisticType } from '../../customType'

import SingleStatistic from './SingleStatistic'

const StatisticContainer = styled('div', {
  height: '200px',
  animation: `${fadeIn} 700ms`,
  animationDelay: '900ms',
  animationFillMode: 'backwards',
})

const TextContainer = styled('div', {
  marginLeft: '55%',
  marginTop: '100px',
  textAlign: 'start',
})

export default function Statistic() {
  const infoMetrics: Array<StatisticType> = [
    {
      destValue: 700,
      unit: '만 명',
      content: '여행자',
    },
    {
      destValue: 100,
      unit: '만 개',
      content: '여행 리뷰',
    },
    {
      destValue: 470,
      unit: '만 개',
      content: '여행 일정',
    },
  ]

  return (
    <StatisticContainer>
      <TextContainer>
        {infoMetrics.map((MetricsData) => (
          <SingleStatistic key={MetricsData.content} data={MetricsData} />
        ))}
      </TextContainer>
    </StatisticContainer>
  )
}
