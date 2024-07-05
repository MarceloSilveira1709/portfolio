import styled from "styled-components";

export const GithubSecao = styled.div`
  display: grid;
  margin-top: 32px;
  margin-bottom: 64px;

  .git {
    height: 25px;
    margin-bottom: 5px;
  }

  img {
    height: 157px;
  }

  @media (max-width: 768px) {
    img {
      height: auto;
      width: 100%;
    }

    .git {
      max-height: 50px;
      max-width: 50px;
    }
  }
`;

