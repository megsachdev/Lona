import React from "react"
import { Text, View, StyleSheet, TextStyles } from
  "@mathieudutour/react-sketchapp"

import colors from "../colors"
import shadows from "../shadows"
import textStyles from "../textStyles"

export let ITEM_TYPE = { STANDARD: "standard", ERROR: "error" };

export default class InlineVariantTest extends React.Component {
  render() {

    let View$backgroundColor
    View$backgroundColor = colors.blue100

    if (this.props.type === "error") {
      View$backgroundColor = colors.red100
    }
    return (
      <View style={[ styles.view, { backgroundColor: View$backgroundColor } ]}>
        <Text style={styles.text}>
          {"Text"}
        </Text>
      </View>
    );
  }
};

let styles = StyleSheet.create({
  view: {
    alignItems: "flex-start",
    alignSelf: "stretch",
    backgroundColor: colors.blue100,
    flex: 0,
    flexDirection: "column",
    justifyContent: "flex-start",
    paddingTop: 4,
    paddingRight: 8,
    paddingBottom: 4,
    paddingLeft: 8
  },
  text: {
    ...TextStyles.get("body1"),
    alignItems: "flex-start",
    alignSelf: "stretch",
    flex: 0,
    flexDirection: "column",
    justifyContent: "flex-start"
  }
})