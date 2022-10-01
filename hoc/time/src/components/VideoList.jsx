import React from "react";
import Video from "./Video";

export default function VideoList(props) {
	return props.list.map(item => <Video url={item.url} key={item.url} date={item.date} />);
}