import styled from 'styled-components';
import {css} from 'styled-components';


export const Button = styled.button `
  background: #ff9f00;
  border-radius: 12px;
  font-family: Arial;
  font-size: 20px;
  font-weight: bold;
  border: 2px solid #ff9f00;
  color: white;
  margin: 30px 0 0 100px;
  padding: 16px 10px;
  
  &:hover {
  ${props => props.primary && css`
    background: transparent;
    color: #ff9f00;
  `}
  }
`;

export default Button;



