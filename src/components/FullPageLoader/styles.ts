import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 142px;
  height: 40px;
  filter: contrast(20);
`;

export const Dot = styled.div`
  position: absolute;
  width: 16px;
  height: 16px;
  top: 12px;
  left: 15px;
  filter: blur(2px);
  background: #000;
  border-radius: 50%;
  transform: translateX(0);
  animation: dot 2.8s infinite;

  @keyframes dot {
    50% {
      transform: translateX(96px);
    }
  }
`;

export const Dots = styled.div`
  transform: translateX(0);
  margin-top: 12px;
  margin-left: 31px;
  animation: dots 2.8s infinite;

  span {
    display: block;
    float: left;
    width: 16px;
    height: 16px;
    margin-left: 16px;
    filter: blur(2px);
    background: #000;
    border-radius: 50%;
  }

  @keyframes dots {
    50% {
      transform: translateX(-31px);
    }
  }
`;
