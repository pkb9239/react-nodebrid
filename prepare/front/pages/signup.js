import AppLayout from "../components/AppLayout";
import Head from 'next/head';
import {Checkbox, Form, Input, Button} from 'antd';
import useInput from "../components/hooks/useInput";
import {useState, useCallback} from "react";
import styled from "styled-components";

const ErrorMessage = styled.div`
    color: red
`;

const Signup = () => {
    const [id, onChangeId] = useInput('');
    const [nickname, onChangeNickname] = useInput('');
    const [password, onChangepassword] = useInput('');
  
    const [passwordCheck, setpasswordCheck] = useState('');
    const [passwordError, setpasswordError] = useState(false);
    const onChangepasswordCheck = useCallback((e) => {
        setpasswordCheck(e.target.value);
        setpasswordError(e.target.value !== password);
    }, [password]);

    const [term, setTerm] = useState('');
    const [termError, setTermError] = useState(false);
    const onChangeTerm = useCallback((e) => {
        setTerm(e.target.checked);
        setTermError(false);
    }, []);
    
   
    const onSubmit = useCallback(() => {
        if (password !== passwordCheck) {
            return setpasswordError(true);
        }
        if (!term) {
            return setTermError(true);
        }
        console.log(id, nickname, password);
    }, [password, passwordCheck, term]);
    return (
        <AppLayout>
            <Head>
                <meta charSet="utf-8" />
                <title>회원가입 | Nodebird</title>
            </Head>
            <Form onFinish={onSubmit}>
                <div>
                    <label htmlFor="user-id">아이디</label>
                    <br />
                    <Input name="user-id" value={id} required onChange={onChangeId} />
                </div>
                <div>
                    <label htmlFor="user-nickname">닉네임</label>
                    <br />
                    <Input name="user-nickname" value={nickname} required onChange={onChangeNickname} />
                </div>
                <div>
                    <label htmlFor="user-password">비밀번호</label>
                    <br />
                    <Input name="user-password" value={password} required onChange={onChangepassword} />
                </div>
                <div>
                    <label htmlFor="user-password-check">비밀번호체크</label>
                    <br />
                    <Input 
                    name="user-password" 
                    type="password"
                    value={passwordCheck} 
                    required 
                    onChange={onChangepasswordCheck} 
                    />
                    {passwordError && <ErrorMessage>비밀번호가 일치하지 않습니다..</ErrorMessage>}
                </div>
                <div>
                    <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>박경빈 말을 잘 들을것을 동의합니다.</Checkbox>
                    {termError && <ErrorMessage>약관에 동의하셔야 합니다.</ErrorMessage>}
                </div>
                <div style={{ marginTop: 10}}>
                    <Button type="primary" htmlType="submit">가입하기</Button>
                </div>
            </Form>
        </AppLayout>
    )
};

export default Signup;