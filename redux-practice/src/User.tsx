import { useDispatch, useSelector } from "react-redux";
import { incrementAge } from "./features/userSlice";
import { RootState } from './store';

const User = () => {
    const dispatch = useDispatch();
    const { firstname, lastname, age } = useSelector((state: RootState) => state.user);

    return (
        <div>
            <h1>User Information</h1>
            <p>First Name : {firstname}</p>
            <p>Last Name: {lastname}</p>
            <p>Age : {age}</p>
            <button onClick={() => dispatch(incrementAge())}> Increment age</button>

        </div>

    );
};

export default User;