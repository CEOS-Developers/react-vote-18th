import { styled } from "styled-components";
import AuthButton from "../../ui/buttons/AuthButton/AuthButton";
import theme from "@/styles/theme";
import { useNavigate } from "react-router-dom";
import useBlurWhenScroll from "@/common/hooks/useBlurWhenScroll";
import { useGetMemberInfo } from "@/features/member/queries/useGetMemberInfo";
import { useQueryClient } from "@tanstack/react-query";
export default function Header() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { ref } = useBlurWhenScroll();
  const { user } = useGetMemberInfo();
  const navigateLogin = () => {
    navigate("/login");
  };
  const navigateRegister = () => {
    navigate("/register");
  };
  const navigateHome = () => {
    navigate("/");
  };
  const logoutClicked = () => {
    if (window.confirm("로그아웃 하시겠습니까?")) {
      alert("로그아웃 되었습니다.");
      localStorage.removeItem("token");
      queryClient.invalidateQueries({
        queryKey: ["getMemberInfo"],
      });
      queryClient.clear();
      navigate("/");
    }
  };
  return (
    <HeaderLayout ref={ref}>
      <HeaderText onClick={navigateHome} />
      <HeaderBtn>
        {!user ? (
          <>
            <AuthButton
              width="9.6rem"
              bgColor={theme.colors.white}
              addClass="margin-right:2rem;"
              onClick={navigateLogin}
            >
              로그인
            </AuthButton>
            <AuthButton
              width="11.4rem"
              bgColor={theme.colors.mainColor}
              onClick={navigateRegister}
            >
              회원가입
            </AuthButton>
          </>
        ) : (
          <AuthButton
            width="11.4rem"
            bgColor={theme.colors.mainColor}
            onClick={logoutClicked}
          >
            로그아웃
          </AuthButton>
        )}
      </HeaderBtn>
    </HeaderLayout>
  );
}

const HeaderLayout = styled.header`
  position: fixed;
  background-color: white;
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 2rem;
  padding: 4rem;
  min-width: 375px;
`;

const HeaderText = styled.div`
  width: 17.2rem;
  height: 7.3rem;
  background-image: url("/img/headerText.jpg");
  background-size: cover;
  cursor: pointer;
`;

const HeaderBtn = styled.div`
  display: flex;
  align-items: center;
`;
