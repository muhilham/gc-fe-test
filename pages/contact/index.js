import { connect } from 'react-redux'
import { decrementCounter, incrementCounter } from 'ducks/Counter'
import Component from './component'

export async function getStaticProps() {
  const res = await fetch('https://randomuser.me/api/?results=50')
  const posts = await res.json()

  return {
    props: {
      posts,
    },
  }
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
)(Component)
