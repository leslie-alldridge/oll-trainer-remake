import React from 'react'
import { Link } from 'react-router-dom'
import { Layout, Breadcrumb, PageHeader } from 'antd';
import { Typography, Divider } from 'antd';
const { Content, Footer } = Layout;
const { Title, Paragraph, Text } = Typography;
const Learning = () => {
    return (
        <Layout>
            <PageHeader title="Learning OLL Algorithms" subTitle="Things you should know beforehand" />
            <Content style={{ margin: '0 16px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>Learning</Breadcrumb.Item>
              </Breadcrumb>
              <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              <Divider />
              <Typography>
                <Title level={2}>Introduction to OLL</Title>
                <Paragraph>
                OLL stands for <Text strong>"Orient Last Layer"</Text> and is part of the advanced Fridrich method used to speed solve Rubik's cubes.
                To master OLL, one must learn all 57 algorithms. Other basic methods such as two-look OLL only require nine algorithms. 
                Here, we want to help prepare you to learn all 57 so you can reduce your solve times and quickly overcome any yellow shapes in your way.
                </Paragraph>
                <Title level={3}>How can we help you?</Title>
                <Paragraph>
                My goal is to offer solvers some effective ways to memorize algorithms. Currently you can do drills and reduce times on a particular algorithm, or 
                learn new algorithms. Algorithms you have mastered, will be ticked green but you can still go back and perfect them further.
                </Paragraph>

                <Paragraph>
                <ul>
                    <li>
                    <Link to="/timer">Improve times</Link>
                    </li>
                    <li>
                    <Link to="/algs">I want to learn new algs</Link>
                    </li>
                    <li>
                    <a href="https://github.com/leslie-alldridge/oll-trainer-remake/issues">Provide feedback</a>
                    </li>
                </ul>
                </Paragraph>
                <Title level={3}>Types of learners</Title>
                <Paragraph>
                If you are struggling to learn new algorithms it could be that you're using a method that doesn't suit your natural learning preferences. 
                Some people are visual learners and prefer writing them down on paper or learning from a printed PDF document. Some people prefer interactive YouTube 
                videos or a website to tell them what to learn next. Please be aware of this and I hope you can find your preferred learning style.
                </Paragraph>
                <Title level={3}>External Resources</Title>
                <Paragraph>
                <ul>
                    <li>
                    <a href="https://www.cubeskills.com/uploads/pdf/tutorials/oll-algorithms.pdf">PDF Document for all OLL algs</a>
                    </li>
                    <li>
                    <a href="https://www.youtube.com/watch?v=GhmYBgLoQQg">Two-look OLL video (beginner)</a>
                    </li>
                    <li>
                    <a href="https://www.youtube.com/watch?v=IasVqtCHoj0">OLL Cubeskills video and Fingertricks</a>
                    </li>
                </ul>
                </Paragraph>
                <Divider />
                </Typography>
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              OLL Trainer 2019 | Powered by Ant Design | Created by Leslie
              Alldridge
            </Footer>
        </Layout>
    )
}

export default Learning