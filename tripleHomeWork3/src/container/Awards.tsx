import { styled, fadeIn } from '../theme/theme'

import Badge from './Badge'

const AwardContainer = styled('div', {
  marginLeft: 'auto',
  marginRight: 'auto',
  animation: `${fadeIn} 1600ms`,
})

export default function Awards() {
  return (
    <AwardContainer>
      <Badge />
    </AwardContainer>
  )
}
