import profile from '../../img/profile.png'
import bg from '../../img/img-01-bg.png'
import { styled, leftFadeIn } from '../../theme/theme'

const ResumeZone = styled('article', {
  height: '88vh',
  position: 'relative',
  background: 'rgb(65, 206, 211)',
})

const BackgroundImage = styled('img', {
  width: '100vw',
  height: '88vh',
  objectFit: 'fill',
})

const ImageContainer = styled('img', {
  width: '550px',
  height: '520px',
  top: '35vh',
  left: '10vw',
  position: 'absolute',
  animation: `${leftFadeIn} 700ms`,
  animationDelay: '100ms',
})

const TextContainer = styled('section', {
  position: 'absolute',
  textAlign: 'start',
})

const MyImageText = styled('span', {
  color: 'white',
  fontSize: '36px',
  fontFamily: 'sans-serif',
  animation: `${leftFadeIn} 700ms`,
  animationDelay: '800ms',
  animationFillMode: 'backwards',
})

const WeightText = styled('span', {
  fontWeight: 'bold',
})

export default function BonusImage() {
  return (
    <ResumeZone id="mainImageZone">
      <BackgroundImage id="backGroundImage" src={bg} alt="triple Logo" />
      <ImageContainer id="profilePhoto" src={profile} alt="triple Logo" />
      <TextContainer id="introduceText" css={{ top: '35vh', left: '50vw' }}>
        <MyImageText>
          <br />
          <WeightText>안녕하세요! 박성현입니다.</WeightText>
        </MyImageText>
      </TextContainer>
      <TextContainer id="introduceText" css={{ top: '50vh', left: '50vw' }}>
        <MyImageText>
          <br />
          <WeightText>열심히 성장하는 주니어입니다 :)</WeightText>
        </MyImageText>
      </TextContainer>
    </ResumeZone>
  )
}
