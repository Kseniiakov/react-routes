import React from 'react'
import { Redirect } from 'react-router-dom'

function PrivateRoute(props) {
  return (
    props.auth 
    //Если пользователь есть
    ? props.children
    : <Redirect to="/login" /> 
    //если пользователя нет, то перенаправляем
  )
}

export default PrivateRoute