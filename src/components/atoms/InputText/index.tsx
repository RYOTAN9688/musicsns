import React from 'react';
import styled from 'styled-components';

const Root = styled.input`
  width: 100%;
  padding: 10px 15px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid #ddd;
  box-sizing: border-box;
  :focus {
    border-color: rgba(100, 100, 255, 0.5);
  }
  ::placeholder {
    color: #ddd;
  }
`;

type Props = {
  onClick?: (event: React.MouseEvent<HTMLInputElement>) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
};

const InputText: React.FC<Props> = ({ ...props }) => {
  return <Root type='text' {...props} />;
};

export default InputText;
