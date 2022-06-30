import { styled } from '../theme/theme'

import Awards from './Awards'
import ContentLogo from './ContentLogo'
import Statistics from './Statistic'

const AnimationContainer = styled('article', {
  width: '80%',
  height: '35vh',
  margin: 'auto',
  marginTop: '10%',
  marginBottom: '10%',
  position: 'relative',
  textAlign: 'center',
})

export default function Animation() {
  return (
    <AnimationContainer id="animationInfoZone">
      <ContentLogo />
      <Statistics />
      <Awards />
    </AnimationContainer>
  )
}
