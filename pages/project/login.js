import React from "react";

function Login() {
     return(
        <div>
            <h2>CLOZET 로그인</h2>
            <div>
                <label htmlFor='input_id'>아이디 : </label>
                <input type='text' name='input_id'   />
            </div>
            <div>
                <label htmlFor='input_pw'>비밀번호 : </label>
                <input type='password' name='input_pw'  />
            </div>
            <div>
                <button type='button'>로그인</button>
                <button type='button'>회원가입</button>
                <button type='button'>아이디 찾기</button>
                <button type='button'>비밀번호 찾기</button>
            </div>
        </div>
    )
}
export default Login;