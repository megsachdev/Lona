import React from "react"
import styled from "styled-components"

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
      <View style={{ backgroundColor: View$backgroundColor }}>
        <Text>
          {"Text"}
        </Text>
      </View>
    );
  }
};

let View = styled.div({
  alignItems: "flex-start",
  backgroundColor: colors.blue100,
  display: "flex",
  flex: "1 1 0%",
  flexDirection: "column",
  justifyContent: "flex-start",
  paddingTop: "4px",
  paddingRight: "8px",
  paddingBottom: "4px",
  paddingLeft: "8px"
})

let Text = styled.span({
  textAlign: "left",
  ...textStyles.body1,
  alignItems: "flex-start",
  alignSelf: "stretch",
  display: "block",
  flex: "0 0 auto",
  flexDirection: "column",
  justifyContent: "flex-start"
})