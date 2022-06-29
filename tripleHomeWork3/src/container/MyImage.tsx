// import profile from '../img/profile.png'
// import bg from '../img/img-01-bg.png'
// import { styled, leftFadeIn } from '../theme/theme'
import { styled } from '../theme/theme'

const ResumeZone = styled('section', {
  height: '88vh',
  background: 'rgb(65, 206, 211)',
  position: 'relative',
})

// const BackgroundImage = styled('img', {
//   height: '88vh',
//   width: '100vw',
//   objectFit: 'fill',
// })

// const ImageContainer = styled('img', {
//   width: '550px',
//   height: '520px',
//   position: 'absolute',
//   top: '35vh',
//   left: '10vw',
//   animation: `${leftFadeIn} 700ms`,
//   animationDelay: '100ms',
// })

export default function Image() {
  return (
    // <ResumeZone>
    //   <BackgroundImage src={bg} alt="triple Logo" />
    //   <ImageContainer src={profile} alt="triple Logo" />
    // </ResumeZone>
    <ResumeZone />
  )
}
