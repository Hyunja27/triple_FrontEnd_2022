import { styled } from '../theme/theme'

import Awards from './Awards'
import ContentLogo from './ContentLogo'
import Matrics from './Matrics'

const AnimationContainer = styled('div', {
  height: '50vh',
  width: '80%',
  margin: 'auto',
  textAlign: 'center',
  position: 'relative',
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
