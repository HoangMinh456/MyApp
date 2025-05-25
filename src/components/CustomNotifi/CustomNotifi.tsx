import { useSelector } from "react-redux";
import CustomLoading from "./CustomLoading";
import CustomModal from "./CustomModal";


export default function CustomNotifi() {
    const notifiType = useSelector((state: any) => state.notifi.type);
    console.log('notifiType của CustomNofifi: ', notifiType);

    if (notifiType === 'idle') { return null; }

    if (notifiType === 'loading') {
        return (<CustomLoading />);
    }

    if (notifiType === 'notifi') {
        return (<CustomModal />);
    }

};