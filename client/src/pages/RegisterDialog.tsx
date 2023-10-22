import styled from 'styled-components';

import Form, { Field, FormInstance } from 'rc-field-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import {
  alphabetRegex,
  emailRegex,
  notNumberOrAlphabetRegex,
  numberRegex,
} from '../libs/regex';

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

type Validator = (rule: any, value: string) => void;

const RegisterDialog = () => {
  const navigate = useNavigate();

  const register = async (values: any) => {
    const { email, password, confirmPolicies } = values;

    if (!confirmPolicies) return alert('你必須同意使用者條款及隱私權政策');

    const { data } = await axios.post('/api/register', { email, password });

    if (data.status !== 'success') {
      return alert(data.message);
    }

    alert('註冊成功，請在登入頁面重新登入');
    navigate('/login');
  };

  const passwordValidator: Validator = (_rule, value) => {
    return new Promise((resolve, reject) => {
      if (value.length > 20) return reject('密碼至多 20 位');
      if (value.length < 8) return reject('密碼至少 8 位');

      const hasNumber = numberRegex.test(value);
      const hasAlphabet = alphabetRegex.test(value);
      const hasInvalidChar = notNumberOrAlphabetRegex.test(value);

      if (!hasNumber || !hasAlphabet || hasInvalidChar) {
        return reject('最少須 8 個字元且英數混合');
      }

      return resolve(undefined);
    });
  };

  const renderForm = (values: any, form: FormInstance<any>) => {
    const confirmPasswordValidator: Validator = (_rule, value) => {
      return new Promise((resolve, reject) => {
        const { password } = values;
        if (password !== value) return reject('密碼錯誤');

        return resolve(undefined);
      });
    };

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
            <StyledInput
              placeholder="請輸入可進行信件認證的 Email 信箱"
              error={form.getFieldError('email')[0]}
            />
          </Field>
        </EmailInputContainer>
        <PasswordInputContainer>
          <Field
            name="password"
            initialValue=""
            rules={[
              { required: true, message: '密碼為必填項目' },
              { validator: passwordValidator },
            ]}
          >
            <StyledInput
              type="password"
              placeholder="請輸入密碼，需 8~20 個字元英數混合"
              error={form.getFieldError('password')[0]}
            />
          </Field>
        </PasswordInputContainer>
        <Field
          name="confirmPassword"
          initialValue=""
          rules={[{ validator: confirmPasswordValidator }]}
        >
          <StyledInput
            type="password"
            placeholder="請再次確認密碼"
            error={form.getFieldError('confirmPassword')[0]}
          />
        </Field>
        <ConsentCheckboxContainer>
          <Field
            name="confirmPolicies"
            valuePropName="checked"
            initialValue={false}
          >
            <StyledCheckbox>
              我已閱讀並同意&nbsp;<Link>使用條款</Link>&nbsp;及&nbsp;
              <Link>隱私權政策</Link>
            </StyledCheckbox>
          </Field>
        </ConsentCheckboxContainer>
        <ButtonContainer>
          <PrimaryButton type="submit">註冊</PrimaryButton>
        </ButtonContainer>
      </>
    );
  };

  return (
    <Dialog title="註冊會員">
      <Form onFinish={register}>{renderForm}</Form>
    </Dialog>
  );
};

export default RegisterDialog;
