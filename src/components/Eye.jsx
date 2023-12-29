import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";


const Eye = ({ hidden }) => {
    return <>
        {hidden ? <FaEye />:<FaEyeSlash /> }
    </>
}

export default Eye;