import React from 'react'
import { Redirect, Route } from 'react-router-dom'

function PrivateRoute(props) {
  return (
      <Route {...props.route}>
          props.auth 
            {/* Если пользователь есть */}
            ? props.children
            : <Redirect to="/login" /> 
            {/* если пользователя нет, то перенаправляем */}
      </Route>
  )
}

export default PrivateRoute