import React from 'react';
import { NavbarBox, HumbleBox, Author, Logo, LogoBox, LogoPos, NavbarRest, Emoji, ReactLogo } from '../styles/Navbar'
import logo from '../assets/logo.svg';
import tsLogo from '../assets/ts-logo.png'

export const Navbar: React.FC = () => {
  return (
    <NavbarBox>
      <HumbleBox><p>by</p><Author>alvaroha</Author></HumbleBox>
      <LogoBox><p>with</p>
        <LogoPos>
          <ReactLogo src={logo} alt="React Logo" />
          <p>+</p>
          <Logo src={tsLogo} alt="Typescript Logo" />
          <p>+</p>
          <Emoji>💅</Emoji>
        </LogoPos>
      </LogoBox>
      <NavbarRest></NavbarRest>
    </NavbarBox>
  )
};