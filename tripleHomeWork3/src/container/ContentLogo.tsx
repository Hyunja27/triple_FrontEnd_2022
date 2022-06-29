import triple2x from '../img/triple2x.png'
import { styled, fadeIn } from '../theme/theme'

const LogoContainer = styled('section', {
  position: 'absolute',
  right: '60%',
  animation: `${fadeIn} 700ms`,
  animationDelay: '100ms',
})

const ImageContainer = styled('img', {
  width: '400px',
  height: '338px',
})

const ImageText = styled('p', {
  bottom: '14%',
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
  color: 'rgba(58, 58, 58, 0.7);',
  fontFamily: 'sans-serif',
  font: '10px',
})

export default function Awards() {
  return (
    <LogoContainer>
      <ImageContainer src={triple2x} alt="triple Logo" />
      <ImageText>2021년 12월 기준</ImageText>
    </LogoContainer>
  )
}
