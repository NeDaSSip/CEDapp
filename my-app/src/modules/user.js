import axios from "axios";

const kakaoLogin = (code) => {
    return function (dispatch, getState, { history }) {
        axios({
            method: "GET",
            url: `http://34.215.66.235:8000/auth/kakao/callback?code=${code}`,
        })
            .then((res) => {
                console.log(res);

                const ACCESS_TOKEN = res.data.accessToken;

                localStorage.setItem("token", ACCESS_TOKEN);

                history.replace("/");
            })
            .catch((err) => {
                console.log(err);
            })
    }
};

export function actionCreators() {
    return { type: kakaoLogin };
}