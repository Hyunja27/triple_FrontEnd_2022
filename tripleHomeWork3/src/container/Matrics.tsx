import { styled } from '../theme/theme'

const MatricsContainer = styled('div', {
  height: '53%',
  border: 'solid 1px red',
  position: 'relative',
  margin: 'auto',
})

const TextContainer = styled('div', {
  textAlign: 'start',
  marginLeft: '55%',
  marginTop: '6.5%',
})

const MatricsText = styled('p', {
  fontSize: '36px',
  marginBottom: '3%',
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
