import React from 'react'
import { Layout, Breadcrumb, PageHeader } from 'antd';
import { Typography, Divider } from 'antd';
const { Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

const Timer = () => {
    return <Layout>
      <PageHeader
        title='Timing your solves'
        subTitle='Things you should know beforehand'
      />
      <Content style={{ margin: '0 16px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Timer</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
          <Divider />
          <Typography>
            <Title level={2}>How the timer works</Title>
            <Paragraph>
              You can select an OLL algorithm to practice from the OLL algs section in the sidebar. The keyboard keys are spacebar to start/stop the timer and escape to reset 
              it back to 0:00. Your last five solve times will remain on screen and the best solve of the session will appear in green. There's currently no data persistence so you may 
              want to write it down somewhere if it matters to you. Possible algorithms will be listed in the center and if any are missing please let me know.
            </Paragraph>
            <Paragraph>
              You'll find the next button in the bottom right corner which will take you to the next algorithm in the sequence. Noticing the links are /timer/number means 
              that you can input a particular algorithm number as well (e.g. /timer/23).
            </Paragraph>

            <Paragraph>
              The timer is not currently mobile friendly as this was designed with desktop solving in mind. A future version may include mobile support for mainstream devices if people wish for this to happen.
            </Paragraph>
            <Divider />
          </Typography>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        OLL Trainer 2019 | Powered by Ant Design | Created by Leslie Alldridge
      </Footer>
    </Layout>
}

export default Timer