import React from 'react';
import axios from 'axios';
import MainCarousel from './MainCarousel.jsx'


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      mainDisplay: []
    }
  }

  getDefaultData(){
    axios.get('/api/shoes')
      .then(result => (
        this.setState({
          mainDisplay: result.data
        })
      ))
      .catch(err => {console.log(err)})
  }

  componentDidMount(){
    this.getDefaultData()
  }

  render(){
    const { mainDisplay } = this.state;
    console.log(mainDisplay)
    return (
      <div>
        <MainCarousel mainDisplay={mainDisplay}/>
      </div>
    )
  }
}

export default App