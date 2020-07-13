import React from 'react'
import { connect } from 'react-redux'
import { decrementCounter, incrementCounter } from 'ducks/Counter'

import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'

function App(props) {
  return (

    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h1" component="h1" gutterBottom>
          {props.counter}
        </Typography>
        <Button onClick={() => props.inc(props.counter)}>Increment</Button>
        <Button onClick={() => props.dec(props.counter)}>Decrement</Button>
      </Box>
    </Container>

  )
}

function mapStateToProps(state, ownProps) {
  return {
    counter: state.Counter.counterVal,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    inc(val) {
      dispatch(incrementCounter(val))
    },
    dec(val) {
      dispatch(decrementCounter(val))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)
