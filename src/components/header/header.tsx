"use client";

import React from "react";
import * as S from "./headerStyled";
import Logo from "../../img/logo.png";
import Image from "next/image";
import { Input } from "./pesquisa";
import { Carrinho } from "./carrinho";

const Header = () => {
  return (
    <div>
      <S.StyledHeader>
        <div>
          <S.StyledLogo>
            <div>
              <Image
                src={Logo}
                alt="Logo da Loja de Sapatos"
                width={120}
                height={60}
              />
            </div>
          </S.StyledLogo>
        </div>
        <div>
          <S.StyledNavegacao>
            <Input placeholder="O que você esta procurando?" />
            <Carrinho />
          </S.StyledNavegacao>
        </div>
      </S.StyledHeader>
    </div>
  );
};

export default Header;
