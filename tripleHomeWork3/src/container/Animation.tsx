import { styled } from '../theme/theme'

import Awards from './Awards'
import ContentLogo from './ContentLogo'
import Matrics from './Matrics'

const AnimationContainer = styled('div', {
  height: '60vh',
  position: 'relative',
  textAlign: 'center',
})

export default function Animation() {
  return (
    <AnimationContainer>
      <ContentLogo />
      <Matrics />
      <Awards />
    </AnimationContainer>
  )
}
