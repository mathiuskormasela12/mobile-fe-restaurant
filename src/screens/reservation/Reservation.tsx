// ========== Reservation
// import all packages
import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {Controller} from 'react-hook-form';

// import styles
import style from './style';

// import all components
import {Container, Title, Button, Input} from '../../components';

// import all hooks
import {useReservation} from './hooks/useReservation';

export const Reservation: React.FC = () => {
  const {
    onSubmit,
    handleSubmit,
    goBack,
    errors,
    control,
    error,
    loading,
    success,
    goToReservation,
  } = useReservation();

  return (
    <SafeAreaView style={style.hero}>
      <Container fullHeight>
        <View style={style.main}>
          <View style={style.header}>
            <Title>Reservation</Title>
          </View>
          <View style={style.form}>
            <View style={style.control}>
              <View style={style.field}>
                <Text style={style.text}>First Name</Text>
              </View>
              <Controller
                control={control}
                render={({field: {onChange, onBlur, value}}) => (
                  <Input
                    type="default"
                    placeholder="First Name"
                    error={errors.firstName?.message}
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                  />
                )}
                name="firstName"
              />
            </View>
            <View style={style.control}>
              <View style={style.field}>
                <Text style={style.text}>Last Name</Text>
              </View>
              <Controller
                control={control}
                render={({field: {onChange, onBlur, value}}) => (
                  <Input
                    type="default"
                    placeholder="Last Name"
                    error={errors.lastName?.message}
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value ?? ''}
                  />
                )}
                name="lastName"
              />
            </View>
            <View style={style.control}>
              <View style={style.field}>
                <Text style={style.text}>Email</Text>
              </View>
              <Controller
                control={control}
                render={({field: {onChange, onBlur, value}}) => (
                  <Input
                    type="email-address"
                    placeholder="Email"
                    error={errors.email?.message}
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                  />
                )}
                name="email"
              />
            </View>
            <View style={style.control}>
              <View style={style.field}>
                <Text style={style.text}>Phone Number</Text>
              </View>
              <Controller
                control={control}
                render={({field: {onChange, onBlur, value}}) => (
                  <Input
                    type="phone-pad"
                    placeholder="Phone Number"
                    error={errors.phoneNumber?.message}
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                  />
                )}
                name="phoneNumber"
              />
            </View>
          </View>
          <View>
            {success && (
              <Text style={style.message}>
                Reservation has been created. Click{' '}
                <Text onPress={goToReservation} style={style.link}>
                  here
                </Text>{' '}
                to check your reservation
              </Text>
            )}
            {error && (
              <Text style={style.errorMessage}>Something Went Wrong</Text>
            )}
          </View>
        </View>
        <View style={style.footer}>
          <Button disabled={loading} onPress={handleSubmit(onSubmit)}>
            {loading ? 'Loading...' : 'Submit'}
          </Button>
          <Text style={style.back} onPress={goBack}>
            Back
          </Text>
        </View>
      </Container>
    </SafeAreaView>
  );
};
