import { styled } from '../theme/theme'

import Badge from './Badge'

const AwardContainer = styled('div', {
  height: '65%',
  border: 'solid 1px red',
  position: 'relative',
  margin: 'auto',
})

// const BadgeContainer = styled('div', {
//   background: 'white',
//   border: 'solid 1px red',
//   textAlign: 'start',
//   marginLeft: '50%',
// })

export default function Awards() {
  return (
    <AwardContainer>
      <Badge />
    </AwardContainer>
  )
}
