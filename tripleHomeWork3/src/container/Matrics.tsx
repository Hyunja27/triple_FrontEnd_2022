import { styled, fadeIn } from '../theme/theme'

const counter = ($counter: Element | null, max: number) => {
  let now = max

  const handle = setInterval(() => {
    if ($counter !== null) {
      $counter.innerHTML = Math.ceil(max - now).toString()
    }

    if (now < 0) {
      clearInterval(handle)
    }

    const step = now / 10
    now -= step
  }, 50)
}

window.onload = () => {
  const $counter = document.querySelector('.Matrics1')
  const max = 700
  setTimeout(() => counter($counter, max), 2000)
}

const MatricsContainer = styled('div', {
  height: '200px',
  animation: `${fadeIn} 700ms`,
  animationDelay: '800ms',
  animationFillMode: 'backwards',
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
