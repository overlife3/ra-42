import React from "react";
import { SelectFile } from "./SelectFile";
import { ViewPhotos } from "./ViewPhotos";

export function ProfilePhoto() {
	return (
		<div className="profile-photo">
			<SelectFile />
			<ViewPhotos />
		</div>	
	)
}