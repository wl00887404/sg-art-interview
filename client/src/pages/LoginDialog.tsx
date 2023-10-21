import styled from 'styled-components';

import Dialog from '../components/shared/Dialog/Dialog';
import Input from '../components/shared/Dialog/Input';
import { PrimaryButton, GhostButton } from '../components/shared/Dialog/Button';

const EmailInputContainer = styled.div`
  margin: 1.5625rem 0 0.5625rem;
`;

const PasswordInputContainer = styled.div`
  margin-bottom: 1.0625rem;
`;

const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 2.1875rem;
  margin-bottom: 1.625rem;
`;

const LoginDialog = () => {
  return (
    <Dialog title="會員登入">
      <EmailInputContainer>
        <Input placeholder="請輸入 Email 帳號" error="請輸入有效的電子信箱" />
      </EmailInputContainer>
      <PasswordInputContainer>
        <Input placeholder="請輸入密碼" error="密碼錯誤" />
      </PasswordInputContainer>
      <ButtonContainer>
        <GhostButton>註冊會員</GhostButton>
        <PrimaryButton>登入</PrimaryButton>
      </ButtonContainer>
    </Dialog>
  );
};

export default LoginDialog;
