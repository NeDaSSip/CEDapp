import React from "react";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../modules/user";

const kakaoSocial = (props) => {
    const dispatch = useDispatch();

    let code = new URL(window.location.href).searchParams.get("code");

    React.useEffect(async () => {
        await dispatch(userActions.kakaoLogin(code));
    }, []);

    return <div></div>;
};

export default kakaoSocial;