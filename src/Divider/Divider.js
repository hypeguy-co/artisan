import { Divider as ChakraDivider } from '@chakra-ui/core';
import styled from '@emotion/styled';
import { isHex } from '~/utils/colors'
import { useTheme } from '@chakra-ui/core';

const StyledDivider = styled(ChakraDivider)`
  position: relative;

  ${(props) => props.borderColorized && (`
    border: 0px;
    
    &:after{
      content: ' ';
      display: block;
      height: 1px;
      margin-top: 2px;
      width: 100%;
      background: #000;
      background: ${props.borderColorized};
      }
    }
  `)}

  background: ${(props => props.borderColorized)};

  ${(props) => props.align === 'center' && (`
    &:after{
      background: -webkit-gradient(linear,0 0,100% 0,from(rgba(0,0,0,0)),to(rgba(0,0,0,0)),color-stop(50%,${props.borderColorized}));
    }
  `)}


  ${(props) => props.align === 'left' && (`
    &:after{
      background: linear-gradient(90deg, ${props.borderColorized} 0%, rgba(0,0,0,0) ${props.fadePercentage});
    }
  `)}
`;

const Divider = ({borderColorized, ...props}) => {
  const theme = useTheme()
  const componentColor = (borderColorized && isHex(borderColorized)) ? borderColorized : theme.border.colorGradientFade;
  return <StyledDivider borderColorized={componentColor} {...props}/>
};

Divider.defaultProps = {
  fadePercentage: '80%'
}

export default Divider;
