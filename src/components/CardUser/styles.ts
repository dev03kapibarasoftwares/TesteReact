import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: 120,
    width: '96%',
    backgroundColor: '#000',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#E3E3E3',
    borderWidth: 1,
    paddingLeft: 22,
    margin: 8,
    borderRadius: 4
  },
  content: {
    flex: 1,
    padding: 5,
    color:'#32CD32'
  },
  title: {
    fontSize: 15,
    lineHeight: 18,
    color: '#32CD32',
    fontWeight: 'bold',
  },
  email: {
    color: '#888D97',
    fontSize: 13,
  },
  password: {
    color: '#1967FB',
    fontSize: 15,
    fontWeight: 'bold',
  },
  button: {
    height: 80,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderLeftWidth: 1,
    borderLeftColor: '#E3E3E3',
  }
});