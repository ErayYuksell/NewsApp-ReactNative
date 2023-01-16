import React from 'react';
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
  Text,
} from 'react-native';
import news_data from './news_data.json';
import NewsCard from './components/NewsCard';
import newsbannerdata from './news_banner_data.json';
const App = () => {
  const renderNews = ({item}) => <NewsCard news={item} />;
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>News</Text>
      <FlatList
        ListHeaderComponent={() => (
          <ScrollView style={styles.scroll} horizontal={true} showsHorizontalScrollIndicator={false}>
            {newsbannerdata.map(bannernews => (
              <Image
                style={styles.banner_image}
                source={{uri: bannernews.imageUrl}}
              />
            ))}
          </ScrollView>
        )}
        keyExtractor={item => item.u_id.toString()}
        data={news_data}
        renderItem={renderNews}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1',
  },
  banner_image: {
    height: Dimensions.get('window').height / 5,
    width: Dimensions.get('window').width / 2,
  },
  headerText: {
    fontSize: 50,
    fontweight: 'bold',
    marginLeft: 10,
  },
  scroll: {
    marginLeft: 10,
    marginRight: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});

export default App;
