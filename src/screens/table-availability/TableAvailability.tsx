// ========== Table Availability
// import all packages
import React from 'react';
import {SafeAreaView, View, FlatList} from 'react-native';

// import styles
import style from './style';

// import all components
import {Container, Title, Button, Card} from '../../components';

// import all hooks
import {useTableAvailability} from './hooks/useTableAvailability';

export const TableAvailability: React.FC = () => {
  const {handleNavigate} = useTableAvailability();

  const data = [
    {
      id: 'dkdkd0101011',
      tableCode: 'FG394',
      location: 'Near Door',
      isAvailable: true,
    },
    {
      id: 'dkdkd0131011',
      tableCode: 'FX394',
      location: 'Near Door 2',
      isAvailable: false,
    },
    {
      id: '3j92d0131011',
      tableCode: 'TS294',
      location: 'Near Door 2',
      isAvailable: true,
    },
    {
      id: '1kdkd0101011',
      tableCode: 'FG394',
      location: 'Near Door',
      isAvailable: true,
    },
    {
      id: '44kdkd0131011',
      tableCode: 'GF394',
      location: 'Near Door 2',
      isAvailable: true,
    },
    {
      id: '320392d0131011',
      tableCode: 'JS294',
      location: 'Near Door 2',
      isAvailable: true,
    },
  ];

  return (
    <SafeAreaView style={style.hero}>
      <Container fullHeight>
        <View style={style.main}>
          <View style={style.header}>
            <Title>Table Availability</Title>
          </View>
          <View style={style.cardList}>
            <FlatList
              data={data}
              renderItem={({item}) => (
                <View style={style.cardContainer}>
                  <Card
                    tableCode={item.tableCode}
                    location={item.location}
                    isAvailable={item.isAvailable}
                  />
                </View>
              )}
              keyExtractor={item => item.id}
            />
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
