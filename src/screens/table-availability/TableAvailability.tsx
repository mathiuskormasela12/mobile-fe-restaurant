// ========== Table Availability
// import all packages
import React from 'react';
import {SafeAreaView, View, FlatList} from 'react-native';

// import styles
import style from './style';

// import all components
import {
  Container,
  Title,
  Button,
  Card,
  EmptyState,
  Loading,
  ErrorState,
} from '../../components';

// import all hooks
import {useTableAvailability} from './hooks/useTableAvailability';

export const TableAvailability: React.FC = () => {
  const {handleNavigate, loading, tableAvailbilities, error} =
    useTableAvailability();

  return (
    <SafeAreaView style={style.hero}>
      <Container fullHeight>
        <View style={style.main}>
          <View style={style.header}>
            <Title>Table Availability</Title>
          </View>
          <View style={style.cardList}>
            {error ? (
              <ErrorState />
            ) : loading ? (
              <Loading />
            ) : tableAvailbilities.length === 0 ? (
              <EmptyState />
            ) : (
              <FlatList
                data={tableAvailbilities}
                renderItem={({item}) => (
                  <View style={style.cardContainer}>
                    <Card
                      disabled={!item.isAvailable}
                      title={item.tableCode}
                      subtitle={item.location}
                      badgeTitle={
                        item.isAvailable ? 'Available' : 'Unavailable'
                      }
                      variant={item.isAvailable ? 'primary' : 'danger'}
                    />
                  </View>
                )}
                keyExtractor={item => item.id}
              />
            )}
          </View>
        </View>
        <View style={style.footer}>
          <Button onPress={() => handleNavigate('RestaurantManagement')}>
            Restaurant Management
          </Button>
        </View>
      </Container>
    </SafeAreaView>
  );
};
