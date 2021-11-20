import { VFC } from 'react';
import styled from 'styled-components';
import InputText from '../../atoms/InputText';

const Root = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const Title = styled.h1`
  font-size: 30px;
`;

const Header: VFC = () => {
  return (
    <Root>
      <Title>FavoriteMusic</Title>
      <InputText placeholder='アルバム・アーティスト名・曲名を入力してください' />
    </Root>
  );
};

export default Header;
