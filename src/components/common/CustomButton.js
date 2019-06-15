import React from "react";
import { Text, TouchableOpacity } from "react-native";
const CustomButton = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;
  return (
    // <TouchableOpacity onPress={() => console.log('pressed')} style={buttonStyle}>
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};
const styles = {
  buttonStyle: {
    flex: 1,
    alignSelf: "stretch",
    //backgroundColor: "#FFF",
    borderRadius: 0,
    borderWidth: 0,
    //borderColor: "#2980b9",
    marginLeft: 5,
    //backgroundColor: '#2980b9',
    magrinRight: 5
  },
  textStyle: {
    alignSelf: "center",
    //color: "#007aff",
    fontSize: 26,
   // fontWeight: "600",
    paddingTop: 10,
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '700',
    paddingBottom: 10
  }
};
// export default CustomButton;
export { CustomButton };
