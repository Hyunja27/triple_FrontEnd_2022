import { styled } from '../theme/theme'

import Badge from './Badge'

const AwardContainer = styled('div', {
  height: '65%',
  position: 'relative',
  marginLeft: 'auto',
  marginRight: 'auto',
})

export default function Awards() {
  return (
    <AwardContainer>
      <Badge />
    </AwardContainer>
  )
}
