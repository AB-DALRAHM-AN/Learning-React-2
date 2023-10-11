import React from 'react';

class StateComp extends React.Component {
  state = { firstName: 'john', lastName: 'doe' }
  
  render() {
    return (
      <>
        <h5>{this.state.firstName} {this.state.lastName}</h5>
        <button onClick={() => this.setState({ firstName: 'Abdo'})}>Change Name</button>
      </>
    )
  }
}

export default StateComp;