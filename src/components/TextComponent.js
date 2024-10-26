import { useSelector, useDispatch } from "react-redux";
import { ChangeText } from '../actions/textAction' 

const TextCompoonent = () => {

    const text = useSelector((state) => state.text);
    const dispatch = useDispatch();

    const changeTextFun = () => {
        dispatch(ChangeText());
    }

    return (
        <>
            <h1>hello, {text}</h1>
            <button onClick={changeTextFun}>Change Text</button>
        </>
    )
}

export default TextCompoonent;