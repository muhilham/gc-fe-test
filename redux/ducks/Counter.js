export const COUNTER_ME = 'COUNTER_ME'

const INITIAL_STATE = {
  counterVal: 0,
}

const Counter = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case COUNTER_ME:
    return {
      ...state,
      counterVal: payload,
    }

  default:
    return state
  }
}

export function CounterReset(payload) {
  return {
    type: COUNTER_ME,
    payload,
  }
}

export function incrementCounter(payload) {
  return {
    type: COUNTER_ME,
    payload: payload + 1,
  }
}

export function decrementCounter(payload) {
  return {
    type: COUNTER_ME,
    payload: payload - 1,
  }
}

export default Counter
