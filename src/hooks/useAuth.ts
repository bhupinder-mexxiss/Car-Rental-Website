import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLoading, setUser } from "../redux/Slices/AuthSlice";
import { useGetMeQuery } from "../redux/api/user";

export const useAuthReady = () => {
    const dispatch = useDispatch();
    const { data: user, isLoading, isSuccess } = useGetMeQuery({});

    useEffect(() => {
        dispatch(setLoading(isLoading));
    }, [isLoading, dispatch]);

    useEffect(() => {
        if (!isLoading && isSuccess && user) {
            dispatch(setUser(user));
        }
    }, [user, isLoading, isSuccess, dispatch]);

    return { user, isLoading: isLoading && !user };
};
