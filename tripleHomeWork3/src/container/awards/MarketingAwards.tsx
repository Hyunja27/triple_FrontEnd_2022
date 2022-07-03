import { styled, fadeIn } from '../../theme/theme'

import Badge from './AwardBadge'

const AwardContainer = styled('section', {
  marginLeft: 'auto',
  marginRight: 'auto',
  animation: `${fadeIn} 700ms`,
  animationDelay: '1700ms',
  animationFillMode: 'backwards',
})

export default function Awards() {
  return (
    <AwardContainer id="awardInfoZone">
      <Badge />
    </AwardContainer>
  )
}
