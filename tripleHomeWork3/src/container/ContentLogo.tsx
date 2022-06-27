import triple2x from '../img/triple2x.png'
import { styled } from '../theme/theme'

const LogoContainer = styled('div', {
  left: '20%',
  top: '20px',
  position: 'absolute',
})

const ImageContainer = styled('img', {
  width: '400px',
  height: '338px',
})

const ImageText = styled('p', {
  bottom: '15%',
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
})

export default function Awards() {
  return (
    <LogoContainer>
      <ImageContainer src={triple2x} alt="triple Logo" />
      <ImageText>2021년 12월 기준</ImageText>
    </LogoContainer>
  )
}
