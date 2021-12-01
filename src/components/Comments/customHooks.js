import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { initComments } from "store/slices/comments";
import { useGetCommentsQuery } from "store/services/comments";
export const useGetCommentsOnInit = () => { 
	const {data}  = useGetCommentsQuery();       
	const dispatch = useDispatch();

	useEffect(() => {
		data && dispatch(initComments([...data].reverse()));
	}, [data, dispatch]);
}