import React from 'react';
import { buyCandy } from '../redux'
// ...or
// import { buyIceCream } from '../redux/cake/cakeActions.js'
import { connect } from 'react-redux'


function CandyContainer(props){
  return(
    <div>
      <h2>Number of candies - {props.numOfCandies}</h2>
      <button onClick={props.buyCandy}>Buy Candy</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    numOfCandies: state.candy.numOfCandies
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyCandy: () => dispatch(buyCandy())
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CandyContainer)
