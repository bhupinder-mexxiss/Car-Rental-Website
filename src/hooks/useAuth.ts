import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/Slices/AuthSlice";
import { useGetMeQuery } from "../redux/api/user";

export const useAuthReady = () => {
    const dispatch = useDispatch();
    const { data: user, isLoading, isSuccess } = useGetMeQuery({});

    useEffect(() => {
        if (!isLoading && isSuccess && user) {
            dispatch(setUser(user));
        }
    }, [user, isLoading, isSuccess, dispatch]);

    return { user, isLoading: isLoading && !user };
};
