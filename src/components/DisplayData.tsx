import {Text} from 'react-native';

export default function DisplayData ({route, navigation} : any) {
  const {userName, userEmail} = route.params;

  return (
    <div>
      <Text>{userName}</Text>
      <Text>{userEmail}</Text>
    </div>
  );
};