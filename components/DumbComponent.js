import React from 'react'

export default class DumbComponent extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      mood: 'happy'
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(ev){
    
    const { mood } = this.state;
    if (mood === 'happy'){
      this.setState({ mood: 'sad' });
    }else{
      this.setState({ mood: 'happy' });
    }
  }

  render(){
    return (
      <div onClick={this.handleClick}>
        {this.state.mood}
      </div>
    );
  }
}
