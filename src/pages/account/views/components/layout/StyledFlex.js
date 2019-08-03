import styled from 'styled-components'

const Flex = styled.div`
  display: flex;
`
const FlexMiddle = styled(Flex)`
  align-items: center;
`
const FlexCenter = styled(Flex)`
  justify-content: center;
`
const FlexMidCen = styled(Flex)`
  width: 100%;
  justify-content: center;
  align-items: center;
`
export {
  Flex,
  FlexMiddle,
  FlexCenter,
  FlexMidCen
}