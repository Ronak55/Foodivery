import { View, Text } from 'react-native'
import React from 'react'

import { auth } from "./../authentication/api";

const changePassword = () => {

    auth.sendPasswordResetEmail(auth.currentUser.email)
    .then(() => {

    alert("Password reset email sent !")
      console.log('Password reset email sent successfully');
    })
    .catch((error) => {
      console.log('Error sending password reset email:', error);
    });
}

export default changePassword