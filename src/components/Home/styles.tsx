import styled from 'styled-components'

import { colors } from '../../styles/colors'
import { MaxWidth } from '../../styles'

export const HomeDiv = styled.div`
  background-color: ${colors['light_green']};
  display: flex;
  justify-content: space-around;
  align-items: top;
  padding-top: 10px;
  height: 50%;
  width: 100%;

  @media (max-width: ${MaxWidth}) {
    flex-direction: column;
    align-items: center;
    justify-content: normal;
  }
`

export const TextDiv = styled.div`
  width: 25vw;
  padding: 40px 10px 0px 10px;
  h2 { 
    text-align: center;
  }

  p {
    text-align: justify;
  }

  @media (max-width: ${MaxWidth}) {
    width: 80%;
  }
`

export const WindowDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 30vw;
  padding-bottom: 40px;
  padding-top: 40px;

  @media (max-width: ${MaxWidth}) {
    width: 80%;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`

export const CapivaraDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-size: xx-small;
`

export const Capivara = styled.div`
  background-image: url('../../assets/images/capivara.png');
  background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
  width: 250px;
  height: 250px;
`
