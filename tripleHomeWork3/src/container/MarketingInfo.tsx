import { styled } from '../theme/theme'

import CompanyLogo from './CompanyLogo'
import MarketingAwards from './awards/MarketingAwards'
import MarketingStatistics from './statistics/MarketingStatistics'

const InfoContainer = styled('div', {
  width: '80%',
  height: '35vh',
  margin: 'auto',
  marginTop: '10%',
  marginBottom: '10%',
  position: 'relative',
  textAlign: 'center',
})

export default function MarketingInfo() {
  return (
    <InfoContainer>
      <CompanyLogo />
      <MarketingStatistics />
      <MarketingAwards />
    </InfoContainer>
  )
}
