import {
  Box,
  Button,
  Center,
  FormControl,
  Heading,
  Image,
  Input,
  Pressable,
  Row,
  ScrollView,
  Text,
  VStack,
} from 'native-base';
import React, {useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {IMAGES} from '../../assets';
import {COLORS} from '../../styles';
import Octicons from 'react-native-vector-icons/Octicons';

const HomeScreen = () => {
  const [ponds, setPonds] = useState<any>();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  console.log({ponds});

  return (
    <Box flex={1} bg={'white'}>
      <Box shadow={3} bg={'white'}>
        <Row
          justifyContent={'space-between'}
          alignItems={'center'}
          py={3}
          px={4}>
          <Box>
            <Image
              source={IMAGES.LOGO}
              style={{
                height: 32,
                width: 35,
              }}
              alt="logo"
            />
          </Box>
          <Box>
            <Image
              source={IMAGES.LOGO2}
              style={{
                height: 36,
                width: 160,
              }}
              alt="logo2"
            />
          </Box>
        </Row>
      </Box>
      <ScrollView>
        <Box>
          <Center mt={3}>
            <Text bold fontSize={17} color={COLORS.primary}>
              (Please gives us some information)
            </Text>
          </Center>
          <Box px={4} mt={7}>
            <VStack space={2}>
              <Text fontWeight={'medium'} fontSize={15}>
                Area Name
              </Text>
              <FormControl isRequired isInvalid={'areaName' in errors}>
                <Controller
                  control={control}
                  render={({field: {onChange, onBlur, value}}) => (
                    <Input
                      placeholder="Enter Area Name"
                      borderRadius={8}
                      onChangeText={onChange}
                      onBlur={onBlur}
                      value={value}
                      placeholderTextColor={'#000'}
                      fontSize={14}
                      backgroundColor={'#fff'}
                      borderWidth={2}
                      mt={1}
                    />
                  )}
                  name="areaName"
                  rules={{
                    required: '*Area Name is required',
                  }}
                  defaultValue=""
                />
                <FormControl.ErrorMessage>
                  {errors.areaName?.message}
                </FormControl.ErrorMessage>
              </FormControl>
            </VStack>
            <VStack space={2} mt={4}>
              <Text fontWeight={'medium'} fontSize={15}>
                No. Of Ponds
              </Text>

              <Input
                placeholder="Enter No. Of Ponds"
                borderRadius={8}
                onChangeText={pn => setPonds(pn)}
                // onBlur={onBlur}
                value={ponds}
                placeholderTextColor={'#000'}
                fontSize={14}
                backgroundColor={'#fff'}
                borderWidth={2}
                mt={1}
                keyboardType={'numeric'}
              />
            </VStack>
            {ponds && (
              <VStack mt={3} space={2} bg={'blue.50'} borderRadius={5}>
                <Text bold fontSize={15} px={1} mt={1}>
                  Upload Ponds Images
                </Text>
                <Row flexWrap={'wrap'}>
                  {Array(+ponds)
                    .fill('')
                    .map((pond, index) => (
                      <VStack key={index} alignItems={'center'} mb={2}>
                        <Pressable
                          borderWidth={1}
                          m={1}
                          borderRadius={7}
                          borderColor={'gray.400'}>
                          <Image
                            source={{
                              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKteJt4yIuQOY8dv1-oknm_gx4IRimwZ_rzOT0LY7NiFnd5JsBD8ofiiPhMGeaYpXEr-0&usqp=CAU',
                            }}
                            alt="image"
                            style={{
                              height: 90,
                              width: 99,
                            }}
                            borderRadius={7}
                          />
                        </Pressable>
                        <Text bold color={COLORS.primary}>
                          Pond {index + 1}
                        </Text>
                      </VStack>
                    ))}
                </Row>
              </VStack>
            )}
            <VStack space={2} mt={ponds ? 4 : 0}>
              <Text fontWeight={'medium'} fontSize={15}>
                Name Of Data Collector
              </Text>
              <FormControl isRequired isInvalid={'areaName' in errors}>
                <Controller
                  control={control}
                  render={({field: {onChange, onBlur, value}}) => (
                    <Input
                      placeholder="Enter name of data collector"
                      borderRadius={8}
                      onChangeText={onChange}
                      onBlur={onBlur}
                      value={value}
                      placeholderTextColor={'#000'}
                      fontSize={14}
                      backgroundColor={'#fff'}
                      borderWidth={2}
                      mt={1}
                    />
                  )}
                  name="areaName"
                  rules={{
                    required: '*Area Name is required',
                  }}
                  defaultValue=""
                />
                <FormControl.ErrorMessage>
                  {errors.areaName?.message}
                </FormControl.ErrorMessage>
              </FormControl>
            </VStack>
            {/* <VStack space={2} mt={4}>
            <Text fontWeight={'medium'} fontSize={15} mb={1}>
              GPS Location
            </Text>
            <Image
              source={IMAGES.LOCATION}
              style={{
                height: 160,
                width: '100%',
              }}
              alt="map"
              borderRadius={5}
            />
          </VStack> */}
            <VStack space={3} mt={5}>
              <Row space={2}>
                <Octicons name="dot-fill" size={22} color={'blue'} />
                <Text fontWeight={'semibold'}>Current Latitude : 132.1235</Text>
              </Row>
              <Row space={2}>
                <Octicons name="dot-fill" size={22} color={'blue'} />
                <Text fontWeight={'semibold'}>
                  Current Longitude : 133.1235
                </Text>
              </Row>
            </VStack>
          </Box>
        </Box>
      </ScrollView>
      <Box px={4}>
        <Button bgColor={COLORS.primary} borderRadius={10} mt={6}>
          <Text bold color={'white'}>
            Confirm
          </Text>
        </Button>
      </Box>
    </Box>
  );
};

export default HomeScreen;
