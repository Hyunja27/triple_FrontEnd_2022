import { styled, fadeIn } from '../theme/theme'

import Badge from './Badge'

const AwardContainer = styled('div', {
  marginLeft: 'auto',
  marginRight: 'auto',
  animation: `${fadeIn} 700ms`,
  animationDelay: '1600ms',
  animationFillMode: 'backwards',
})

export default function Awards() {
  return (
    <AwardContainer>
      <Badge />
    </AwardContainer>
  )
}
