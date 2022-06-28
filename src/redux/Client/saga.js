import { all, fork, put, takeEvery, call } from 'redux-saga/effects'
import Axios from '../../utils/Axios.js'

import {
  CREATE_CLIENT,
  INVITE_CLIENT,
  CREATE_TAG,
  GET_TAG,
  createTagSuccess,
  inviteClientSuccess,
  inviteClientError,
  createTagError,
  getTagSuccess,
  getTagError,
  createClientSuccess,
  createClientError
} from '../actions'

function * createClient ({ payload }) {
  const { clientDetails } = payload
  console.log(clientDetails)
  try {
    const response = yield Axios.post(
      `/business/api/v1/client/no-invite/`,
      clientDetails
    )
    console.log(response)
    console.log(response.status)
    console.log(response.statusText)
    console.log(response.headers)
    console.log(response.config)
    if (response.status === 201) {
      yield put(createClientSuccess(response.data.detail))
      // window.location.reload()
    } else {
      yield put(createClientError(response.data.message))
    }
  } catch (error) {
    console.log(error)
    console.log(error.response)
    console.log(error.response.status)
    console.log(error.response.statusText)
    console.log(error.response.headers)
    console.log(error.response.config)

    let message
    if (error.response) {
      const errorMessage = error.response.data?.detail
      ? error.response.data.detail
      : error.response.data?.fullname
      ? error.response.data?.fullname[0]
      : error.response.data?.country
      ? error.response.data?.country[0]
      : error.response.data?.password
      ? error.response.data?.password[0]
      : error.response.data?.email
      ? error.response.data?.email[0]
      : error.response.data.detail

      switch (error.response.status) {
        case 500:
          message = 'Internal Server Error'
          break
        case 404:
          message = 'Not found'
          break
        case 401:
          message = 'Invalid credentials'
          break
        case 400:
          message = errorMessage
          break
        default:
          message = error.response.statusText
      }
    } else if (error.message) {
      message = error.message
    }
    console.log(message)
    yield put(createClientError(message))
  }
}

function * inviteClient ({ payload }) {
  const { clientDetails } = payload
  console.log(clientDetails)
  try {
    const response = yield Axios.post(`/business/api/v1/invite/`, clientDetails)
    console.log(response)
    console.log(response.status)
    console.log(response.statusText)
    console.log(response.headers)
    console.log(response.config)
    if (response.status === 201) {
      yield put(inviteClientSuccess(response.data.detail))
      window.location.reload()
    } else {
      yield put(inviteClientError(response.data.message))
    }
  } catch (error) {
    console.log(error)
    console.log(error.response)
    // console.log(error.response.data.proj[0].tags)
    console.log(error.response.status)
    console.log(error.response.statusText)
    console.log(error.response.headers)
    console.log(error.response.config)

    let message
    if (error.response) {
      const errorMessage = error.response.data?.detail
        ? error.response.data.detail
        : error.response.data?.fullname
        ? error.response.data?.fullname[0]
        : error.response.data?.country
        ? error.response.data?.country[0]
        : error.response.data?.password
        ? error.response.data?.password[0]
        : error.response.data?.email
        ? error.response.data?.email[0]
        : error.response.data.detail

      switch (error.response.status) {
        case 500:
          message = 'Internal Server Error'
          break
        case 404:
          message = 'Not found'
          break
        case 401:
          message = 'Invalid credentials'
          break
        case 400:
          message = errorMessage
          break
        default:
          message = error.response.statusText
      }
    } else if (error.message) {
      message = error.message
    }
    console.log(message)
    yield put(inviteClientError(message))
  }
}

function * getTag () {
  try {
    const response = yield Axios.get(`/client/tag/user`, {
      //   auth: {
      //     Username: 'damitee868@gmail.com',
      //     Password: 'H1de&seek'
      //     // 'authorization': `Basic ${token}`
      //   }
    })
    console.log(response)
    console.log(response.status)
    console.log(response.statusText)
    console.log(response.headers)
    console.log(response.config)
    if (response.status === 200) {
      yield put(getTagSuccess(response.data))
      // window.location.reload();
    } else {
      yield put(getTagError(response.data.message))
    }
  } catch (error) {
    console.log(error)
    console.log(error.response)
    // console.log(error.response.data.proj[0].tags)
    console.log(error.response.status)
    console.log(error.response.statusText)
    console.log(error.response.headers)
    console.log(error.response.config)

    let message
    if (error.response) {
      const errorMessage = error.response.data?.detail

      switch (error.response.status) {
        case 500:
          message = 'Internal Server Error'
          break
        case 404:
          message = 'Not found'
          break
        case 401:
          message = 'Unauthorized'
          break
        case 400:
          message = errorMessage
          break
        default:
          message = error.response.statusText
      }
    } else if (error.message) {
      message = error.message
    }
    console.log(message)
    yield put(getTagError(message))
  }
}

function * createTag ({ payload }) {
  const { tag } = payload
  console.log(tag)
  try {
    const response = yield Axios.post(`/client/tags/`, tag)
    console.log(response)
    console.log(response.status)
    console.log(response.statusText)
    console.log(response.headers)
    console.log(response.config)
    if (response.status === 201) {
      yield put(createTagSuccess('Tag Created'))
      yield call(getTag)
      // window.relocation.reload();
    } else {
      yield put(createTagError(response.data.message))
    }
  } catch (error) {
    console.log(error)
    console.log(error.response)
    console.log(error.response.status)
    console.log(error.response.statusText)
    console.log(error.response.headers)
    console.log(error.response.config)

    let message
    if (error.response) {
      const errorMessage = error.response.data?.detail

      switch (error.response.status) {
        case 500:
          message = 'Internal Server Error'
          break
        case 404:
          message = 'Not found'
          break
        case 401:
          message = 'Invalid credentials'
          break
        case 400:
          message = errorMessage
          break
        default:
          message = error.response.statusText
      }
    } else if (error.message) {
      message = error.message
    }
    console.log(message)
    yield put(createTagError(message))
  }
}

export function * watchCreateClient () {
  yield takeEvery(CREATE_CLIENT, createClient)
}
export function * watchInviteClient () {
  yield takeEvery(INVITE_CLIENT, inviteClient)
}
export function * watchGetTag () {
  yield takeEvery(GET_TAG, getTag)
}
export function * watchCreateTag () {
  yield takeEvery(CREATE_TAG, createTag)
}

export default function * rootSaga () {
  yield all([
    fork(watchCreateClient),
    fork(watchGetTag),
    fork(watchCreateTag),
    fork(watchInviteClient)
  ])
}
