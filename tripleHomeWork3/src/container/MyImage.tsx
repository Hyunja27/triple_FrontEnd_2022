import profile from '../img/profile.png'
import bg from '../img/img-01-bg.png'
import { styled, leftFadeIn } from '../theme/theme'
// import { styled } from '../theme/theme'

const ResumeZone = styled('section', {
  height: '88vh',
  background: 'rgb(65, 206, 211)',
  position: 'relative',
})

const BackgroundImage = styled('img', {
  height: '88vh',
  width: '100vw',
  objectFit: 'fill',
})

const ImageContainer = styled('img', {
  width: '550px',
  height: '520px',
  position: 'absolute',
  top: '35vh',
  left: '10vw',
  animation: `${leftFadeIn} 700ms`,
  animationDelay: '100ms',
})

const TextContainer = styled('section', {
  top: '35vh',
  left: '50vw',
  textAlign: 'start',
  position: 'absolute',
})

const MyImageText = styled('p', {
  fontSize: '36px',
  fontFamily: 'sans-serif',
  animation: `${leftFadeIn} 700ms`,
  animationDelay: '800ms',
  animationFillMode: 'backwards',
})

const WeightText = styled('span', {
  fontWeight: 'bold',
})

export default function Image() {
  return (
    <ResumeZone>
      <BackgroundImage src={bg} alt="triple Logo" />
      <ImageContainer src={profile} alt="triple Logo" />
      <TextContainer>
        <MyImageText>
          오해하지 마세요. <br />
          <WeightText>술은 적당히만 마신답니다.</WeightText>
        </MyImageText>
      </TextContainer>
    </ResumeZone>
    // <ResumeZone />
  )
}
