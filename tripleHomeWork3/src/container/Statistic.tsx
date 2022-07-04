import { styled, fadeIn } from '../theme/theme'

const StatisticContainer = styled('section', {
  height: '200px',
  animation: `${fadeIn} 700ms`,
  animationDelay: '900ms',
  animationFillMode: 'backwards',
})

const TextContainer = styled('section', {
  marginLeft: '55%',
  marginTop: '100px',
  textAlign: 'start',
})

const StatisticText = styled('p', {
  marginBottom: '20px',
  fontFamily: 'sans-serif',
  fontSize: '36px',
})

const WeightText = styled('span', {
  fontWeight: 'bold',
})

export default function Statistic() {
  const counter = ($num: Element | null, max: number, speed: number) => {
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
    }, speed)
    return handle
  }

  window.onload = () => {
    const tmp1 = counter(document.querySelector('.Statistic1'), 700, 15)
    const tmp2 = counter(document.querySelector('.Statistic2'), 100, 20)
    const tmp3 = counter(document.querySelector('.Statistic3'), 470, 15)

    setTimeout(() => clearInterval(tmp1), 2000)
    setTimeout(() => clearInterval(tmp2), 2000)
    setTimeout(() => clearInterval(tmp3), 2000)
  }

  return (
    <StatisticContainer id="animationInfoZone">
      <TextContainer>
        <StatisticText>
          <WeightText>
            <span className="Statistic1">700</span>만 명
          </WeightText>
          의 여행자
        </StatisticText>
        <StatisticText>
          <WeightText>
            <span className="Statistic2">100</span>만 개
          </WeightText>
          의 여행리뷰
        </StatisticText>
        <StatisticText>
          <WeightText>
            <span className="Statistic3">470</span>만 개
          </WeightText>
          의 여행일정
        </StatisticText>
      </TextContainer>
    </StatisticContainer>
  )
}
