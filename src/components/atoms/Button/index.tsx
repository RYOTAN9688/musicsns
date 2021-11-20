import { VFC } from 'react';
import styled, { css } from 'styled-components';

const Root = styled.button<Props>`
  border-radius: 50px;
  background: white;
  font-size: 16px;
  font-weight: bold;
  :hover {
    text-decoration: none;
    box-shadow: 0 0 10px rgba(0 0 0 / 0);
    border-radius: 50px;
  }
  ::after {
    transform: rotate(45deg);
    border-radius: 50px;
  }
  ${(props) => {
    if (props.size === 'small') {
      return css`
        font-size: 12px;
        padding: 6px 12px;
      `;
    } else if (props.size === 'default') {
      return css`
        font-size: 16px;
        padding: 6px 16px;
      `;
    } else {
      return css`
        font-size: 18px;
        padding: 10px 18px;
      `;
    }
  }}
`;

type Props = {
  onClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  size?: 'small' | 'default' | 'large';
  type?: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
};

const Button: VFC<Props> = ({ onClick, type, children, size }: Props) => {
  return (
    <Root type={type} onClick={onClick} size={size}>
      {children}
    </Root>
  );
};

export default Button;
