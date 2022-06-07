import React, { useMemo } from 'react';
import { Form, Input } from 'antd';

const style = useMemo(() => ({ marginBottom: '28px', border: '1px solid #d9d9d9',  padding: '20px' }), []);

const NicknameEditForm = () => {
    return (
        <Form>
            <Input.Search addonBefore="닉네임" enterButton="수정" />
        </Form>
    )
}

export default NicknameEditForm;