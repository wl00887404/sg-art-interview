import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Form, { Field, FormInstance } from 'rc-field-form';
import axios from 'axios';

import { emailRegex } from '../libs/regex';
import Dialog from '../components/shared/Dialog/Dialog';
import Input from '../components/shared/Dialog/Input';
import { PrimaryButton, GhostButton } from '../components/shared/Dialog/Button';
import { useState } from 'react';

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

const StyledGhostButton = styled(GhostButton)`
  width: 100%;
`;

const LoginDialog = () => {
  const [isLoginFailed, setIsLoginFailed] = useState(false);

  const login = async (values: any) => {
    const { email, password } = values;

    const { data } = await axios.post('/api/login', { email, password });

    if (data.status !== 'success') {
      return setIsLoginFailed(true);
    }

    window.location.href = '/';
  };

  const renderForm = (_values: any, form: FormInstance<any>) => {
    return (
      <>
        <EmailInputContainer>
          <Field
            name="email"
            initialValue=""
            rules={[
              { required: true, message: '電子信箱為必填項目' },
              { pattern: emailRegex, message: '請輸入有效的電子信箱' },
            ]}
          >
            <Input
              type="text"
              placeholder="請輸入 Email 帳號"
              error={form.getFieldError('email')[0]}
            />
          </Field>
        </EmailInputContainer>
        <PasswordInputContainer>
          <Field name="password" initialValue="">
            <Input
              type="password"
              placeholder="請輸入密碼"
              error={isLoginFailed ? '密碼錯誤' : ''}
            />
          </Field>
        </PasswordInputContainer>
        <ButtonContainer>
          <Link to="/register">
            <StyledGhostButton type="button">註冊會員</StyledGhostButton>
          </Link>
          <PrimaryButton type="submit">登入</PrimaryButton>
        </ButtonContainer>
      </>
    );
  };

  return (
    <Dialog title="會員登入">
      <Form onFinish={login}>{renderForm}</Form>
    </Dialog>
  );
};

export default LoginDialog;
