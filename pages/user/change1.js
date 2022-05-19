import React from "react";

function Change(){
    return (<>
     <h3 >회원정보수정 </h3> 
       <table border="1">
      <thead>
        <tr>
          <th>사진</th>
                    <th>image: 
                         회원님을 알릴 수 있는 사진을 등록해 주세요.
                        등록된 사진은 회원님의 게시물이나 댓글들에 사용됩니다.
                    </th>
          <th><button type='button'>사진 변경</button></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>아이디</th>
          <td>정보</td>
          <td><button type='button'>아이디 변경</button></td>
        </tr>
        <tr>
          <th>비밀번호</th>
          <td>정보</td>
          <td><button type='button'>비밀번호 변경</button></td>
        </tr>
        <tr>
          <th>이름(실명)</th>
          <td>정보</td>
          <td><button type='button'>이름수정</button></td>
                </tr>
                <tr>
          <th>닉네임</th>
          <td>정보</td>
          <td><button type='button'>닉네임 변경</button></td>
                </tr>
                <tr>
          <th>이메일</th>
          <td>정보</td>
          <td><button type='button'>이메일 변경</button></td>
                </tr>
                <tr>
          <th>전화번호</th>
          <td>정보</td>
          <td><button type='button'>전화번호 변경</button></td>
        </tr>
      </tbody>
      </table>
      <button type='button'>회원탈퇴</button>
        </>
    

)
}
export default Change