import { styled } from '../theme/theme'

import Awards from './Awards'
import ContentLogo from './ContentLogo'
import Matrics from './Matrics'

const AnimationContainer = styled('div', {
  height: '70vh',
  position: 'relative',
  display: 'flex',
})

const LogoContainer = styled('div', {
  width: '50%',
  border: 'solid 2px red',
})

const InfoContainer = styled('div', {
  width: '50%',
  border: 'solid 2px red',
})

export default function Animation() {
  return (
    <AnimationContainer>
      <LogoContainer>
        <ContentLogo />
      </LogoContainer>
      <InfoContainer>
        <Matrics />
        <Awards />
      </InfoContainer>
    </AnimationContainer>
  )
}
