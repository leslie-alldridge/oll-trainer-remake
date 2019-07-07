import React from 'react'
import { Link } from 'react-router-dom'
import { Layout } from 'antd';

class Home extends React.Component {
    render(){
    return (
        <Layout>
            <section className='b1'>
              <div className='in1'>
                <div className='content'>
                  <h1>Advanced OLL Trainer</h1>
                  <p>Learn all 57 OLL algorithms</p>
                  <Link to="/learning"
                    className='btn'
                  >
                    GET STARTED
                  </Link>
                </div>
              </div>
            </section>
        </Layout>
    )
}
}

export default Home