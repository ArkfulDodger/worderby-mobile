import React, { useState, useEffect } from "react";
import { Pressable } from "react-native";
import { Avatar, IconButton } from "react-native-paper";
import OffsetEditIcon from "../atoms/OffsetEditIcon";

const AvatarEditable = ({ userInfo }) => {
  const defaultInfo = {
    picture: "https://ca.slack-edge.com/T02MD9XTF-U02TC8XDF3L-84d65a18df17-72",
  };
  userInfo = userInfo || defaultInfo;

  return (
    <Pressable onPress={() => console.log("edit avatar!")}>
      <Avatar.Image size={100} source={{ uri: userInfo.picture }} />
      <OffsetEditIcon size={24} />
    </Pressable>
  );
};

export default AvatarEditable;