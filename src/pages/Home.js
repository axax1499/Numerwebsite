import React, {Component} from 'react'
import profilepic1 from '../img/page1.jpg'
class Home extends Component {
    render() {
        return(
            <div className="condiv about">
                <h1 className="subtopic"> Page </h1>
                <img src={profilepic1} alt="profile" className="profilepic1"/>
                <h3>Hi this is newton</h3>
                <p>adadadadadadlfkalk</p>
            </div>

        )
    }

}

export default Home;