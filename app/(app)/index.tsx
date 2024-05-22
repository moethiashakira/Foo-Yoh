import { Text, View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { useState } from 'react';
import { useSession } from '../ctx';

export default function Index() {
  const { signOut } = useSession();
  const [ searchQuery, setSearchQuery ] = useState('');
  return (
    <View style={{ flex: 1, justifyContent: 'start', alignItems: 'center' }}>
      <Text
        onPress={() => {
          // The `app/(app)/_layout.tsx` will redirect to the sign-in screen.
          signOut();
        }}>
        Sign Out
      </Text>
      <Searchbar placeholder='Search' onChangeText={setSearchQuery} value = {searchQuery}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
