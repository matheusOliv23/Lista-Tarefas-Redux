import styled from "styled-components";


import { MdDelete } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";

interface TarefaStyleType {
  complete?: boolean;
}

export const ContainerGeral = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 520px;
  min-height: 500px;
  background: #161a2b;
  text-align: center;
  margin: 10% auto;
  border-radius: 10px;
  padding-bottom: 32px;
`;

export const Container = styled.div``;

export const ContainerTarefa = styled.div<TarefaStyleType>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 4px auto;
  color: #fff;
  background: linear-gradient(
    90deg,
    rgba(255, 118, 20, 1) 0%,
    rgba(255, 84, 17, 1) 100%
  );

  padding: 16px;
  border-radius: 5px;
  width: 90%;

  transition: all 0.5s ease-in-out;

  opacity: ${(props) => (props.complete ? 0.4 : 1)};

  &:hover {
    cursor: pointer;
  }

  &:nth-child(4n + 1) {
    background: linear-gradient(
      90deg,
      rgba(93, 12, 255, 1) 0%,
      rgba(155, 0, 250, 1) 100%
    );
  }
  &:nth-child(4n + 2) {
    background: linear-gradient(
      90deg,
      rgba(255, 12, 241, 1) 0%,
      rgba(250, 0, 135, 1) 100%
    );
  }
  &:nth-child(4n + 3) {
    background: linear-gradient(
      90deg,
      rgba(20, 159, 255, 1) 0%,
      rgba(17, 122, 255, 1) 100%
    );
  }
`;

export const FormContainer = styled.form`
  margin-bottom: 32px;
`;

export const Titulo = styled.h1`
  margin: 32px 0;
  color: #fff;
  font-size: 24px;

  &:hover {
    color: blue;
    cursor: pointer;
  }
`;

export const Icones = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;
  cursor: pointer;
`;

export const Deletar = styled(MdDelete)`
  margin-right: 5px;
  color: #fff;
`;

export const Editar = styled(AiOutlineEdit)`
  color: #fff;
`;

export const Button = styled.button`
  padding: 16px;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  outline: none;
  background: linear-gradient(
    90deg,
    rgba(93, 12, 255, 1) 0%,
    rgba(155, 0, 250, 1) 100%
  );
  color: #fff;
  text-transform: capitalize;
  transition: all 0.5s ease-in-out;

  &:hover {
    color: black;
  }
`;

export const Input = styled.input`
  padding: 14px 32px 14px 16px;
  border-radius: 4px 0 0 4px;
  border: 2px solid #5d0cff;
  outline: none;
  width: 320px;
  background: transparent;
  color: #fff;

  &::placeholder {
    color: #e2e2e2;
  }
`;