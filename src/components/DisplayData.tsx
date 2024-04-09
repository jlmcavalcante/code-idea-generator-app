import {Text} from 'react-native';

type DisplayProps = {
  userName: string,
  email: string,
}

const DisplayData = ({ route }) => {

  return (
    <div>
      <Text>{route.params.formData.name}</Text>
      <Text>{route.params.formData.email}</Text>
    </div>
  );
};

export default DisplayData;
