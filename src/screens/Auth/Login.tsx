import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Controller, useForm} from 'react-hook-form';
import React, {useState} from 'react';
import {
  Box,
  Button,
  Center,
  FormControl,
  Image,
  Input,
  Text,
  VStack,
  ScrollView,
} from 'native-base';

import {PublicRoutesTypes} from '../../types/AllRoutes';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../../styles';
import {IMAGES} from '../../assets';

type Props = NativeStackScreenProps<PublicRoutesTypes, 'Login'>;
const Login = ({navigation}: Props) => {
  const [showPassword, setShowPassword] = useState(true);
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSubmit = async (numberData: any) => {
    console.log('object');
  };

  return (
    <Box style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView
        _contentContainerStyle={{pb: 7}}
        keyboardShouldPersistTaps={'always'}>
        <Box mt={8} px={1}>
          <Center>
            <Image
              source={IMAGES.LOGIN}
              alt="logo"
              style={{
                width: 230,
                height: 200,
              }}
            />
          </Center>
          <Box mt={10} bgColor={'blue.50'} px={5} borderRadius={30}>
            <Box>
              <Text fontSize={30} fontFamily={'Montserrat-Bold'}>
                Welcome,
              </Text>
              <Text fontFamily={'Montserrat-Medium'}>
                Please enter your credential to continue.
              </Text>
            </Box>
            <VStack mt={7} space={2}>
              <Text fontWeight={'medium'} fontSize={15}>
                Email
              </Text>
              <FormControl isRequired isInvalid={'email' in errors} mt={1}>
                <Controller
                  control={control}
                  render={({field: {onChange, onBlur, value}}) => (
                    <Input
                      placeholder="Enter your Email"
                      borderRadius={8}
                      onChangeText={onChange}
                      onBlur={onBlur}
                      value={value}
                      placeholderTextColor={'#000'}
                      fontSize={14}
                      backgroundColor={'#fff'}
                      borderWidth={2}
                      autoCapitalize={'none'}
                      mt={1}
                      // keyboardType="number-pad"
                    />
                  )}
                  name="email"
                  rules={{
                    required: '*Email is required',
                  }}
                  defaultValue=""
                />
                <FormControl.ErrorMessage>
                  {errors.email?.message}
                </FormControl.ErrorMessage>
              </FormControl>
            </VStack>
            <VStack mt={7} space={2}>
              <Text fontWeight={'medium'} fontSize={15}>
                Password
              </Text>
              <FormControl isRequired isInvalid={'password' in errors} mt={1}>
                <Controller
                  control={control}
                  render={({field: {onChange, onBlur, value}}) => (
                    <Input
                      placeholder="Enter your Password"
                      borderRadius={8}
                      onChangeText={onChange}
                      onBlur={onBlur}
                      value={value}
                      placeholderTextColor={'#000'}
                      fontSize={14}
                      backgroundColor={'#fff'}
                      borderWidth={2}
                      autoCapitalize={'none'}
                      secureTextEntry={showPassword ? true : false}
                      mt={1}
                      InputRightElement={
                        <Box mr={2}>
                          <Ionicons
                            name={showPassword ? 'eye' : 'eye-off'}
                            size={25}
                            onPress={() => setShowPassword(!showPassword)}
                          />
                        </Box>
                      }
                    />
                  )}
                  name="password"
                  rules={{
                    required: '*Password is required',
                  }}
                  defaultValue=""
                />
                <FormControl.ErrorMessage>
                  {errors.password?.message}
                </FormControl.ErrorMessage>
              </FormControl>
            </VStack>
            <Box mt={9} pb={10}>
              <Button
                // colorScheme={COLORS.primary}
                bgColor={COLORS.primary}
                borderRadius={8}
                _text={{fontWeight: 'bold', color: '#fff'}}
                onPress={handleSubmit(onSubmit)}>
                Continue
              </Button>
            </Box>
          </Box>
        </Box>
      </ScrollView>

      {/* Modal */}
      {/* <Modal
      isOpen={modalVisible}
      onClose={() => setModalVisible(false)}
      avoidKeyboard
      justifyContent="flex-end"
      bottom="4"
      size="lg">
      <Modal.Content>
        <Modal.CloseButton />
        <Modal.Header>Forgot Password?</Modal.Header>
        <Modal.Body>
          Enter email address and we'll send a link to reset your password.
          <FormControl mt="3">
            <FormControl.Label>Email</FormControl.Label>
            <Input />
          </FormControl>
        </Modal.Body>
      </Modal.Content>
    </Modal> */}
    </Box>
  );
};

export default Login;
