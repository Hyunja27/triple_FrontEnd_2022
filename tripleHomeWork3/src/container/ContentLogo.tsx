import triple2x from '../img/triple2x.png'
import { styled } from '../theme/theme'

const ImageContainer = styled('img', {
  height: '50%',
  position: 'absolute',
})

export default function Awards() {
  return (
    <ImageContainer src={triple2x} alt="the poor From Egypt with blue guitar" />
  )
}
