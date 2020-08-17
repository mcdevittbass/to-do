import React from 'react';
import { Checkbox, Layout } from 'antd';

const Main = (props) => {
    const { Header, Content } = Layout;
    const todos = ['item', 'another item', 'a third item'];
    return (
        <Layout className='layout'>
            <Header>
                <div className='head'>Header</div>
            </Header>
            <Content>
                <div className='content'>
                    {todos.map(item => {
                        return (
                        <>
                            <Checkbox defaultChecked={false}>{item}</Checkbox>
                            <br />
                        </>
                        )}
                    )}
                </div>
            </Content>
        </Layout>
    )
}

export default Main;