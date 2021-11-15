import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../state/index'
import { StoreData } from '../types/index'

function ReduxDemo() {
  const bank = useSelector((state: StoreData) => state.bank)
  const dispatch = useDispatch()
  const { depositMoney, withdrawMoney } = bindActionCreators(
    actionCreators,
    dispatch
  )
  return (
    <div style={{ background: 'lightgreen' }}>
      redux-demo
      <h1>{bank}</h1>
      <button onClick={() => depositMoney(1000)}>Deposit</button>
      <button onClick={() => withdrawMoney(1000)}>Withdraw</button>
      123
    </div>
  )
}

export default ReduxDemo
