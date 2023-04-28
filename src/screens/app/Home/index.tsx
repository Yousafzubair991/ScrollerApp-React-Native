import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../../styles/colors';
import {RW} from '../../../styles/responsive';
import {GlobalTextStyles} from '../../../styles/globalStyles/headings';
import CustomButton from '../../../components/CustomButton';
import {GetAllUsers} from '../../../api/user.get';
import {TUser} from '../../../constants/types';

const ITEM_HEIGHT = 50;
const PAGE_SIZE = 10;

const Home: React.FC = () => {
  const [users, setUsers] = useState<TUser[]>([]);
  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [limit, setlimit] = useState<number>(100);
  const [isLoading, setisLoading] = useState<boolean>(false);

  // Mock data fetching
  const fetchData = async () => {
    setisLoading(true);
    try {
      const response = await GetAllUsers(limit);
      let data = response?.data?.results;
      setUsers(data);
      setTotal(data.length);
      setisLoading(false);
    } catch (error) {
      console.log(error);
      setisLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
    return;
  }, [limit]);

  //when reached end
  const handleEndReached = () => {
    if (users.length < total) {
      const nextPage = currentPage + 1;
      const startIndex = nextPage * PAGE_SIZE;
      const endIndex = Math.min(startIndex + PAGE_SIZE, total);
      setUsers([...users, ...data.slice(startIndex, endIndex)]);
      setCurrentPage(nextPage);
    }
  };
  // check scroll position
  const handleScroll = (event: any) => {
    const {contentOffset, contentSize} = event.nativeEvent;
    const {height} = Dimensions.get('window');
    const maxScrollPosition = contentSize.height - height;
    const actualPosition = contentOffset.y / maxScrollPosition;
    setScrollPosition(actualPosition);
  };
  // item tile for flatlist
  const renderItem = ({item, index}: {item: TUser; index: number}) => (
    <View style={styles?.ItemTile}>
      <Text style={GlobalTextStyles?.P}>
        {index + 1}: {item.name?.title} {item?.name?.first} {item?.name?.last}
      </Text>
    </View>
  );
  //will add more 100 entires
  const UpdateLimit = () => {
    setlimit(limit + 100);
  };

  return isLoading ? (
    <Text style={[GlobalTextStyles?.H2, styles?.lodadingText]}>LOADING...</Text>
  ) : (
    <>
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString() + Math.random()}
        onEndReached={handleEndReached}
        onScroll={handleScroll}
        onEndReachedThreshold={0.5}
        scrollIndicatorInsets={{right: 10}}
        ListFooterComponent={
          <CustomButton //will add more 100 entires
            title={'Load More'}
            disabled={false}
            onPress={() => UpdateLimit()}
          />
        }
      />
      {/* Progress Bar */}
      <View style={styles?.progressBar}>
        <View style={[styles?.inner, {width: `${scrollPosition * 100}%`}]} />
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  Root: {
    flex: 1,
  },
  ItemTile: {
    height: ITEM_HEIGHT,
    justifyContent: 'center',
    backgroundColor: colors?.lightTransparent,
    marginHorizontal: RW(2),
    marginVertical: RW(1),
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors?.lightGray,
    paddingHorizontal: RW(2),
  },
  inner: {
    height: '100%',
    backgroundColor: colors?.lightBlue4,
  },
  progressBar: {
    height: 5,
    backgroundColor: 'gray',
  },
  lodadingText: {
    textAlign: 'center',
  },
});
