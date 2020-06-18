import React, { Component } from 'react';
import "antd/dist/antd.css";
import { Layout,Button } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

export default class Admin extends Component {
    render() {
        return (
            <div>
                <Layout style={{width:"100vw",height:"100vh",color:"#fff"}}>
                    <Sider>Sider</Sider>
                    <Layout>
                        <Header>Header</Header>
                        <Content>Content</Content>
                        <Footer>Footer</Footer>
                    </Layout>
                </Layout>
            </div>
        )
    }
}
