import * as React from "react";
import { useState } from "react";
import { Image } from "expo";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontFamily, Border } from "../GlobalStyles";

const maxDepth = 30;
const maxHeight = 450;
//esma aba newHeight ma distance between water and ultrasonic sound chainxa form wifi module
//anmd maxDepth ma distance from untrasonic sound to bottom of tank
const GuestModePage = () => {
  const [amount, setAmount] = useState(0);
  const [height, setHeight] = useState(0);

  function adjustAmount(){
    setAmount(100 - (newHeight/maxDepth*100))
  }
  function adjustHeight(){
    setHeight(450 - (newHeight/maxDepth*450)) //newHeight ko satta distance from water level rakhne
  }
  return (
    <View style={styles.guestModePage}>
      <Image
        style={styles.imageIcon}
        resizeMode="cover"
        source={require("../assets/image.png")}
      />
      <Image
        style={styles.guestModePageChild}
        resizeMode="cover"
        source={require("../assets/ellipse-24.png")}
      />
      <LinearGradient
        style={styles.guestModePageItem}
        locations={[0, 1]}
        colors={["#000", "rgba(167, 167, 167, 0)"]}
      />
      <Text style={[styles.motorControl, styles.textTypo]}>Motor Control</Text>
      <View style={styles.control}>
        <View style={[styles.controlChild, styles.controlLayout]} />
        <LinearGradient
          style={[styles.controlItem, styles.controlPosition]}
          locations={[0, 1]}
          colors={["#90caff", "#b4ffff"]}
        />
      </View>
      <View style={styles.percent}>
        <View style={[styles.ellipseParent, styles.frameChildLayout]}>
          <Image
            style={[styles.frameChild, styles.frameChildLayout]}
            resizeMode="cover"
            source={require("../assets/ellipse-27.png")}
          />
          <Text style={[styles.text, styles.textTypo]}>{height}</Text>
        </View>
        <View style={styles.percentChild} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    position: "absolute",
  },
  controlLayout: {
    width: 49,
    left: 5,
  },
  controlPosition: {
    bottom: 0,
    position: "absolute",
  },
  frameChildLayout: {
    width: 96,
    height: 96,
    top: 0,
    position: "absolute",
  },
  imageIcon: {
    top: -140,
    left: -92,
    width: 642,
    height: 1067,
    position: "absolute",
  },
  guestModePageChild: {
    top: 169,
    left: 281,
    height: 151,
    width: 147,
    position: "absolute",
  },
  guestModePageItem: {
    top: -176,
    left: -11,
    width: 450,
    height: 635,
    backgroundColor: "transparent",
    position: "absolute",
  },
  motorControl: {
    top: 58,
    left: 33,
    fontSize: 30,
  },
  controlChild: {
    backgroundColor: "rgba(0, 0, 0, 0.34)",
    borderRadius: Border.br_5xl,
    top: 0,
    left: 5,
    height: 446,
    position: "absolute",
  },
  controlItem: {
    borderRadius: 25,
    height: amount,
    width: 49,
    left: 5,
    backgroundColor: "transparent",
  },
  controlInner: {
    height: 58,
    left: 0,
    width: 58,
    top: 223,
  },
  control: {
    top: 199,
    left: 40,
    height: 446,
    width: 58,
    position: "absolute",
  },
  frameChild: {
    left: 0,
    borderRadius: Border.br_5xl,
  },
  text: {
    top: 31,
    left: 21,
    fontSize: 25,
  },
  ellipseParent: {
    left: 51,
  },
  percentChild: {
    top: 49,
    left: -1,
    borderStyle: "dashed",
    borderColor: Color.colorWhite,
    borderRadius: 0.001,
    borderTopWidth: 2,
    width: 54,
    height: 2,
    position: "absolute",
  },
  percent: {
    top: 403,
    left: 106,
    height: 96,
    width: 147,
    position: "absolute",
  },
  guestModePage: {
    borderRadius: 40,
    backgroundColor: "#e5ffca",
    shadowColor: "#dcb68c",
    shadowOffset: {
      width: 20,
      height: 40,
    },
    shadowRadius: 80,
    elevation: 80,
    shadowOpacity: 1,
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
  },
});

export default GuestModePage;
