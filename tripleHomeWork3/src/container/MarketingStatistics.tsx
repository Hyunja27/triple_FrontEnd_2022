// import { useRef } from 'react'

import { styled, fadeIn } from '../theme/theme'

import SingleStatistic from './SingleStatistic'

interface StatisticType {
  value: number
  unit: string
  content: string
}

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

// const StatisticText = styled('p', {
//   marginBottom: '20px',
//   fontFamily: 'sans-serif',
//   fontSize: '36px',
// })

// const WeightText = styled('span', {
//   fontWeight: 'bold',
// })

export default function Statistic() {
  const infoMetrics: StatisticType = {
    value: 700,
    unit: '만 명',
    content: '여행자',
  }
  // const travelerNum = 700
  // const reviewNum = 100
  // const planNum = 470

  // const travelerCount = useRef<HTMLSpanElement>(null)
  // const reviewCount = useRef<HTMLSpanElement>(null)
  // const planCount = useRef<HTMLSpanElement>(null)

  // const counter = ($num: Element | null, max: number) => {
  //   let now = max

  //   const handle = setInterval(() => {
  //     if ($num !== null) {
  //       $num.innerHTML = Math.ceil(max - now).toString()
  //     }
  //     if (now < 0) {
  //       clearInterval(handle)
  //     }
  //     const step = now / 8
  //     now -= step
  //   }, 20)
  //   return handle
  // }

  // window.onload = () => {
  //   counter(travelerCount.current, travelerNum)
  //   counter(reviewCount.current, reviewNum)
  //   counter(planCount.current, planNum)
  // }

  return (
    <StatisticContainer>
      <TextContainer>
        <SingleStatistic data={infoMetrics} />
        {/* <StatisticText>
          <WeightText>
            <span ref={travelerCount}>{travelerNum}</span>만 명
          </WeightText>
          의 여행자
        </StatisticText>
        <StatisticText>
          <WeightText>
            <span ref={reviewCount}>{reviewNum}</span>만 개
          </WeightText>
          의 여행리뷰
        </StatisticText>
        <StatisticText>
          <WeightText>
            <span ref={planCount}>{planNum}</span>만 개
          </WeightText>
          의 여행일정
        </StatisticText> */}
      </TextContainer>
    </StatisticContainer>
  )
}
