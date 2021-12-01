import React from "react";
import { useSelector } from "react-redux";
import { useGetCommentsOnInit } from "./customHooks";
import { getComments } from "store/slices/comments";
import { setInitial } from "shared/helpers";

export const Comments = () => {
	useGetCommentsOnInit();
	const comments = useSelector(getComments);

	return (
		<div className="Comments">
			{comments.map(({id, name: fullName, body}) => (
				<div className="" key={id}>
					<div className="avatar">{setInitial(fullName)}</div>
					<div className="name">{fullName}</div>
					<div className="comment">{body}</div>
				</div>
			))}
		</div>
	)
}; 