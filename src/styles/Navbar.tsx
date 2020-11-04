import styled from "styled-components";

export const Logo = styled.img`
  width: 20px;
`;

export const ReactLogo = styled.img`
  width: 30px;
`;

export const Emoji = styled.p`
  font-size: 1.6rem;
`;

export const Anchor = styled.a`
  text-decoration: none;
`;

export const Author = styled.p`
  cursor: pointer;
  font-weight: 700;
`;

export const NavbarBox = styled.div`
  display: flex;
  justify-content: start;
  margin: 0px 20px;
`;

export const HumbleBox = styled.div`
  align-items: center;
  border: solid var(--primary) 1px;
  background-color: var(--white);
  box-shadow: 0 0 20px var(--blackShadow1), 0 0px 40px var(--blackShadow2);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  font-size: 0.6rem;
  height: 80px;
  justify-content: space-evenly;
  margin: 5px;
  width: 80px;
`;

export const LogoBox = styled.div`
  align-items: center;
  border: solid var(--primary) 1px;
  background-color: var(--white);
  box-shadow: 0 0 20px var(--blackShadow1), 0 0px 40px var(--blackShadow2);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  font-size: 0.6rem;
  height: 80px;
  justify-content: space-evenly;
  margin: 5px;
  width: 160px;
`;

export const LogoPos = styled.div`
  align-items: center;
  align-self: stretch;
  display: flex;
  justify-content: space-evenly;
`;

export const NavbarRest = styled.div`
  align-items: center;
  border: solid var(--primary) 1px;
  background-color: var(--white);
  box-shadow: 0 0 20px var(--blackShadow1), 0 0px 40px var(--blackShadow2);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  font-size: 0.6rem;
  height: 80px;
  justify-content: space-evenly;
  margin: 5px;
  width: 100%;
`;
