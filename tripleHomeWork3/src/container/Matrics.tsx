import { keyframes } from '@stitches/react'

import { styled } from '../theme/theme'

const fadeIn = keyframes({
  '0%': {
    opacity: '0',
    transform: 'translate3d(0, 5%, 0)',
  },
  '100%': {
    opacity: '1',
  },
})

const MatricsContainer = styled('div', {
  height: '200px',
  animation: `${fadeIn} 1100ms`,
})

const TextContainer = styled('div', {
  marginLeft: '55%',
  marginTop: '100px',
  textAlign: 'start',
})

const MatricsText = styled('p', {
  marginBottom: '20px',
  fontSize: '36px',
  fontFamily: 'sans-serif',
})

const WeightText = styled('span', {
  fontWeight: 'bold',
})

export default function Matrics() {
  return (
    <MatricsContainer>
      <TextContainer>
        <MatricsText>
          <WeightText>700만 명</WeightText>의 여행자
        </MatricsText>
        <MatricsText>
          <WeightText>100만 개</WeightText>의 여행리뷰
        </MatricsText>
        <MatricsText>
          <WeightText>470만 개</WeightText>의 여행일정
        </MatricsText>
      </TextContainer>
    </MatricsContainer>
  )
}
