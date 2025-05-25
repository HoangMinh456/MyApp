import { showLoading, ShowNotifi, showOff } from "../reducers/notifiSlice";
import { useAppDispatch } from "../store/store";

const useNotifi = () => {
    const dispatch = useAppDispatch();

    const hidden = () => {
        dispatch(showOff());
    };

    const loading = () => {
        dispatch(showLoading());
    };

    const notifi = (message: string) => {
        console.log('notifi mess: ', message);
        dispatch(ShowNotifi({ message: message }));
        console.log('dispatch active');
    };

    return { hidden, loading, notifi };
};

export default useNotifi;