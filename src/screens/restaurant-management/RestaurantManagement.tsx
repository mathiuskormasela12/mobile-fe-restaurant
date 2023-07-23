// ========== Restaurant Management
// import all packages
import React from 'react';
import {SafeAreaView, Text, View, FlatList} from 'react-native';

// import styles
import style from './style';

// import all components
import {
  Container,
  Title,
  Button,
  EmptyState,
  Loading,
  ErrorState,
  Card,
} from '../../components';
import {useRestaurantManagenet} from './hooks/useRestaurantManagement';

export const RestaurantManagement: React.FC = () => {
  const {
    loading,
    error,
    restaurantManagements,
    handleNavigate,
    handleDeleteReservation,
  } = useRestaurantManagenet();

  return (
    <SafeAreaView style={style.hero}>
      <Container fullHeight>
        <View style={style.main}>
          <View style={style.header}>
            <Title>Restaurant Management</Title>
          </View>
          <View style={style.cardList}>
            {error ? (
              <ErrorState />
            ) : loading ? (
              <Loading />
            ) : restaurantManagements.length === 0 ? (
              <EmptyState />
            ) : (
              <FlatList
                data={restaurantManagements}
                renderItem={({item}) => (
                  <View style={style.cardContainer}>
                    <Text style={style.title}>{item.tableCode}</Text>
                    <FlatList
                      data={item.reservations}
                      renderItem={({item: reservations}) => (
                        <Card
                          disabled={true}
                          title={reservations.firstName.concat(
                            ' ',
                            reservations?.lastName ?? '',
                          )}
                          subtitle={reservations.phoneNumber}
                          description={reservations.lastName}
                          secondaryText={reservations.email}
                          variant="danger"
                          badgeTitle="Remove"
                          badgeOnpress={() =>
                            handleDeleteReservation(reservations.id)
                          }
                        />
                      )}
                      keyExtractor={reservations => reservations.id}
                    />
                  </View>
                )}
                keyExtractor={item => item.id}
              />
            )}
          </View>
        </View>
        <View style={style.footer}>
          <Button onPress={() => handleNavigate('TableAvailability')}>
            Back
          </Button>
        </View>
      </Container>
    </SafeAreaView>
  );
};
