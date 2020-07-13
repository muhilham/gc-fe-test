export const AUTH_ME = 'AUTH_ME'
export const AUTH_ME_CLEAN = 'AUTH_ME_CLEAN'
export const AUTH_ME_SUCCESS = 'AUTH_ME_SUCCESS'
export const AUTH_ME_FAILURE = 'AUTH_ME_FAILURE'

const INITIAL_STATE = {
  refresh: {
    accessToken: '',
    expiresIn: 0,
  },
  error: {
    message: '',
  },
  isAuthenticated: false,
  isError: false,
  isLoading: false,
  me: {
    auth: {},
    detail: {},
    provider: [],
    user: {},
  },
}

const Auth = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case AUTH_ME:
    return {
      ...state,
      isLoading: true,
    }

  default:
    return state
  }
}

export function authMe() {
  return {
    type: AUTH_ME,
  }
}

export default Auth
