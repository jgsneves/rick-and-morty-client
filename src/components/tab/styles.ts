import styled from 'styled-components';
import Colors from '../../styles/colors';

interface Props {
  isOpened: boolean;
}

const Button = styled.button<Props>`
  width: fit-content;
  padding: 0 20px;
  height: 50px;
  border-radius: 16px 16px 0px 0px;
  border: ${props =>
    props.isOpened ? `2px solid ${Colors.grayScale.gray2}` : 0};
  background: ${props =>
    props.isOpened ? Colors.grayScale.gray4 : Colors.grayScale.gray3};
  outline: 0;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 36px;

  position: relative;
  top: 2px;
  height: 52px;

  font-family: 'Inter', sans-serif;
`;

export default Button;