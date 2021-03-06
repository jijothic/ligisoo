import React from 'react';
import { Box, Text } from 'react-native-design-utility';
import { Image } from 'react-native';

import { images } from '../constants/images';

const OnboardingLogo = () => (
  <Box center>
    <Box mb="sm">
      <Image source={images.logo} />
    </Box>
    <Box mb="sm">
      <Text size="2xl">
        Ligi
        <Text color="green" size="2xl">
          Soo
        </Text>
      </Text>
    </Box>
    <Text size="sm">Lets beat the Bookies.</Text>
  </Box>
);

export default OnboardingLogo;