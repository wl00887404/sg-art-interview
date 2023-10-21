import styled from 'styled-components';
import Dialog from '../components/shared/Dialog/Dialog';
import Input from '../components/shared/Dialog/Input';
import Checkbox from '../components/shared/Checkbox';
import typography from '../components/shared/Dialog/typography';
import { PrimaryButton } from '../components/shared/Dialog/Button';

const StyledInput = styled(Input)`
  --error-margin-top: 0.25rem;
`;

const StyledCheckbox = styled(Checkbox)`
  --checkbox-margin-top: 0;
  ${typography.small}
`;

const EmailInputContainer = styled.div`
  margin: 0.9375rem 0 0.3125rem;
`;

const PasswordInputContainer = styled.div`
  margin-bottom: 0.3125rem;
`;

const ConsentCheckboxContainer = styled.div`
  margin: 0.5625rem 0 1.5rem 1.375rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2.5625rem;
`;

const Link = styled.a`
  color: var(--primary-color);
  cursor: pointer;
  text-decoration: underline;
`;

const RegisterDialog = () => {
  return (
    <Dialog title="註冊會員">
      <EmailInputContainer>
        <StyledInput
          placeholder="請輸入可進行信件認證的 Email 信箱"
          error="請輸入有效的電子信箱"
        />
      </EmailInputContainer>
      <PasswordInputContainer>
        <StyledInput
          placeholder="請輸入密碼，需 8~20 個字元英數混合"
          error="最少須 8 個字元且英數混合"
        />
      </PasswordInputContainer>

      <StyledInput placeholder="請再次確認密碼" error="密碼錯誤" />
      <ConsentCheckboxContainer>
        <StyledCheckbox checked={true}>
          我已閱讀並同意 <Link>使用條款</Link> 及 <Link>隱私權政策</Link>
        </StyledCheckbox>
      </ConsentCheckboxContainer>
      <ButtonContainer>
        <PrimaryButton>註冊</PrimaryButton>
      </ButtonContainer>
    </Dialog>
  );
};

export default RegisterDialog;
