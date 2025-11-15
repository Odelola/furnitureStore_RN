import React from 'react'
import Screen from '../../components/Screen'
import { AppScreenNavSingleNavigator } from '../../shared'
import { MyOrderView } from '../../components'
import { useWindowDimensions } from 'react-native';
import { TabBar, TabView } from 'react-native-tab-view';

const MyOrders = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);

  const routes = [
    // { key: 'first', title: 'Delivered' },
    { key: 'first', title: 'First' },
    // { key: 'second', title: 'Processing' },
    { key: 'second', title: 'Second' },
    // { key: 'third', title: 'Cancelled' },
    { key: 'third', title: 'Third' },
  ];

  const renderScene = ({ route }) => {
    switch (route.key) {
      case 'first':
        return <MyOrderView />;
      case 'second':
        return <MyOrderView />;
      case 'third':
        return <MyOrderView />;
      default:
        return null;
    }

  };

  return (
    <Screen>
      <AppScreenNavSingleNavigator screenName="My order" />
      <TabView
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderTabBar={props => <TabBar {...props} />}
        renderScene={renderScene}
        initialLayout={{ width: layout.width }}

      />
    </Screen>
  )
}

export default MyOrders