import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  container:{
    flexDirection:'row'
  },

  keyboardAvoidingContainer: {
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    borderColor: '#000000',
    borderWidth: 2,
    width: '70%',
    margin: 10,
    marginStart: '8%',
    paddingVertical: 5,
    minHeight: 60,
  },
  input: {
    flex: 1,
    fontSize:15
  },
  sendIcon: {
    marginStart:'10%',
    marginTop:'8%',    
    color: '#E67918'
  },

   cameraIcon: {
    marginStart:'10%',
    marginTop:'36%',
    color: '#E67918'
  },

  imageIcon: {
    marginTop:'90%',
    color: '#E67918'
  },
});

export default styles;