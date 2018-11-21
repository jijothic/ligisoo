import React, { Component } from 'react';
import { Box, Text } from 'react-native-design-utility';
import { TouchableOpacity } from 'react-native';

import OnBoardingLogo from '../commons/OnBoardingLogo';

class LoginScreen extends Component {
    state = {  }
    render() {
        return (
            <Box f={1} center bg="white">
                <Box f={1} center>
                    <OnBoardingLogo />
                </Box>

                <Box f={0.9} bg="red" w="{1}">
                    <TouchableOpacity>
                        <Box bg="green" w="80%" self="center" padding="xs">
                            <Text>Continue with Google</Text>
                        </Box>

                        <Box bg="green" w="80%" self="center" padding="xs">
                            <Text>Continue with Facebook</Text>
                        </Box>
                    </TouchableOpacity>
                </Box>
                
            </Box>
            
        );
    }
}

export default LoginScreen;