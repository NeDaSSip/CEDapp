import React from "react";
import axios from "axios";

const kakaoSocial = () => {
    let code = new URL(window.location.href).searchParams.get("code");

    axios.get(`http://34.215.66.235:8000/auth/kakao/callback?code=${code}`)
    .then((response) => {
        console.log(response);
    })
    .catch((err) => {
        console.log(err);
    })

    return <div></div>;
};

export default kakaoSocial;