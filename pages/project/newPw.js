import React from "react";

function NewPw() {
    return (<div>
            <h3 id='signup_title'>CLOZET 새로운 비밀번호 발급</h3>
        <div>
            <label  htmlFor='input_pw'>비밀번호 : </label>
            <input placeholder="비밀번호" type='password' name='input_pw' />
        </div>
    <div>
              <h5> 비밀번호 확인 </h5>
              <input type='password' placeholder="비밀번호 확인" maxLength='15' name='signup_pswCheck'/>
        </div>
          <input type='button' value='확인' name='sigunup_submit'/>
    </div>)
}
export default NewPw;
