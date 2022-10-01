import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text_2};
    transition: all 400ms ease;
    font: 400 18px "Josefin Sans", sans-serif;
  }

  .field {
    box-shadow: 0px 20px 50px ${({ theme }) => theme.shadows};

    border-radius: 5px;
    background-color: ${({ theme }) => theme.inputBg};
    
    .task-item {
      font-size: 14px;
      color: ${({ theme }) => theme.text};
      cursor: pointer;
      padding: 1.5rem 1rem;
      border-bottom: 1px solid ${({ theme }) => theme.line};

      display: flex;
      align-items: center;
      gap: 10px;

      .task-body {
        position: relative;

        &.checked {
          color: ${({ theme }) => theme.text_crossed};

          &:before {
            content: "";
            background: ${({ theme }) => theme.text_crossed};

            position: absolute;
            top: 50%;

            width: 100%;
            height: 1px;
          }
        }
      }

      .cancel-task {
        width: 17px;
        height: 17px;
        margin-left: auto;

        display: flex;
        justify-content:center;
        align-items: center;

        img {
          width: 80%;
        }
      }
    }

    .field-footer {
      display: flex;
      justify-content: space-between;
      padding: 1rem 1rem;
    }
  }

  .input-field {
    padding: 1.5rem 1rem;
    
    display: flex;
    align-items: center;
    gap: 10px;

    label {
      flex: 0 1 90%;
    }
    
    input {
      width: 100%;
      color: ${({ theme }) => theme.text};
      background: transparent;
      border: none;
      outline: none;

      ::placeholder {
        color: ${({ theme }) => theme.text_2};
      }
    }
  }

  .tabs {
    display: none;
    justify-content: center;
    gap: 30px;

    @media only screen and (min-width: 768px) {
      display: flex;
    }
    
    &.field {
      display: flex;
      padding: 1rem;

      @media only screen and (min-width: 768px) {
        display: none;
      }
    }
  }

  .check-circle {
    cursor: pointer;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.line};
    
    width: 17px;
    height: 17px;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const lightTheme = {
  bg: "hsl(0, 0%, 98%)",
  inputBg: "rgb(250, 250, 250)",
  line: "rgb(228, 229, 241)",
  shadows: "hsl(236, 33%, 92%)",
  circleHash: "rgb(147, 148, 165)",
  text: "hsl(235, 19%, 35%)",
  text_2: "hsl(236, 9%, 61%)",
  text_crossed: "hsl(233, 11%, 84%)",
};

export const darkTheme = {
  bg: "hsl(235, 21%, 11%)",
  inputBg: "hsl(235, 24%, 19%)",
  line: "hsl(237, 14%, 26%)",
  shadows: "hsl(240, 20%, 10%)",
  circleHash: "hsl(236, 33%, 92%)",
  text: "hsl(234, 39%, 85%)",
  text_2: "hsl(234, 11%, 52%)",
  text_crossed: "hsl(234, 11%, 52%)",
};
