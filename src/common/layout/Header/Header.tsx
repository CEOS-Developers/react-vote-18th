import { styled } from "styled-components";
import AuthButton from "../../ui/buttons/AuthButton/AuthButton";
import theme from "@/styles/theme";
import { useNavigate } from "react-router-dom";
import useBlurWhenScroll from "@/common/hooks/useBlurWhenScroll";
export default function Header() {
  const navigate = useNavigate();
  const { ref } = useBlurWhenScroll();
  return (
    <HeaderLayout ref={ref}>
      <HeaderText />
      <HeaderBtn>
        <AuthButton
          width="9.6rem"
          bgColor={theme.colors.white}
          addClass="margin-right:2rem;"
          onClick={() => navigate("/login")}
        >
          로그인
        </AuthButton>
        <AuthButton
          width="11.4rem"
          bgColor={theme.colors.mainColor}
          onClick={() => navigate("/register")}
        >
          회원가입
        </AuthButton>
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
