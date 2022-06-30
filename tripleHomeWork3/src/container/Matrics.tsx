import { styled, fadeIn } from '../theme/theme'

const counter = ($num: Element | null, max: number, speed: number) => {
  let now = max

  const handle = setInterval(() => {
    if ($num !== null) {
      $num.innerHTML = Math.ceil(max - now).toString()
    }
    if (now < 0) {
      clearInterval(handle)
    }
    const step = now / 10
    now -= step
  }, speed)
  return handle
}

window.onload = () => {
  const tmp1 = counter(document.querySelector('.Matrics1'), 700, 31)
  const tmp2 = counter(document.querySelector('.Matrics2'), 100, 38)
  const tmp3 = counter(document.querySelector('.Matrics3'), 470, 31)

  setTimeout(() => clearInterval(tmp1), 2000)
  setTimeout(() => clearInterval(tmp2), 2000)
  setTimeout(() => clearInterval(tmp3), 2000)
}

const MatricsContainer = styled('article', {
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
          <WeightText>
            <span className="Matrics1">0</span>만 명
          </WeightText>
          의 여행자
        </MatricsText>
        <MatricsText>
          <WeightText>
            <span className="Matrics2">100</span>만 개
          </WeightText>
          의 여행리뷰
        </MatricsText>
        <MatricsText>
          <WeightText>
            <span className="Matrics3">470</span>만 개
          </WeightText>
          의 여행일정
        </MatricsText>
      </TextContainer>
    </MatricsContainer>
  )
}
