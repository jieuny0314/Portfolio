import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

const ProjectCardContainer = styled.article`
  width: 100%;
  flex-shrink: 0;
  position: absolute;
  right: ${(props) =>
    props.$curpr === 0
      ? "0%"
      : props.$curpr === 1
      ? "100%"
      : props.$curpr === 2
      ? "200%"
      : props.$curpr === 3
      ? "300%"
      : ""};
  transition: all 1s ease-in-out;
  top: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
  background-image: url(${(props) => props.$backImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: ${(props) =>
    props.$index === 2
      ? (props) => (props.$ismobile ? "62.5% 0" : "49.5% 0")
      : "49.5% 0"};
  position: relative;
  z-index: 2;
  overflow-y: hidden;

  .background {
    position: absolute;
    top: 0;
    left: 0;
    background-color: #ffffff;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    opacity: 0;
    transition: all 0.5s;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
    z-index: 3;
  }

  &:hover .background {
    opacity: 0.9;
    transition: all 0.5s;
  }

  &:hover .contentsBox {
    opacity: 1;
    transition: all 0.5s;
  }

  &:hover .contentsBox .learnMore {
    right: ${(props) => (props.$ismobile ? "2px" : "15px")};
    transition: 0.5s all;
  }

  .contentsBox {
    height: 100%;
    opacity: 0;
    position: relative;
    z-index: 5;
    padding: ${(props) => (props.$ismobile ? "10px" : "60px")};
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-evenly;

    .learnMore {
      position: absolute;
      right: -100%;
      bottom: ${(props) => (props.$ismobile ? "" : "2%")};
      top: ${(props) => (props.$ismobile ? "8%" : "")};
      font-size: ${(props) => (props.$ismobile ? "1rem" : "1.2rem")};
      border: none;
      background-color: transparent;
      font-family: "Sriracha", cursive;
      cursor: pointer;
      z-index: 20;
      color: black;
      &:active,
      &:focus {
        outline: none;
        box-shadow: none;
      }
    }
  }

  h3,
  p {
    margin: 0;
    margin-bottom: 10px;
    padding: 0;
  }

  .contents,
  .period,
  .stacks {
    width: 100%;
    font-size: ${(props) => (props.$ismobile ? "0.8rem" : "")};
  }

  .title {
    height: 15%;
    position: relative;
    z-index: 10;
    width: 100%;
    font-family: "Sriracha", cursive;
    font-size: 1.2rem;

    h2 {
      margin: 0;
    }
  }

  .title::before {
    content: "";
    width: ${(props) =>
      props.$index === 0
        ? "95px"
        : (props) =>
            props.$index === 1
              ? "65px"
              : (props) =>
                  props.$index === 2
                    ? "110px"
                    : (props) => (props.$index === 3 ? "100px" : "")};
    height: 20%;
    background-color: ${(props) =>
      props.$index === 0
        ? "#ffcd4a"
        : (props) =>
            props.$index === 1
              ? "#bfb0de"
              : (props) =>
                  props.$index === 2
                    ? "#e1d8d4"
                    : (props) => (props.$index === 3 ? "#f9a698" : "#fffff")};
    position: absolute;
    top: 20px;
    opacity: 0.6;
    z-index: -1;
  }

  .contents {
    height: 25%;
    flex-direction: column;
    justify-content: center;
  }

  .period {
    height: 20%;
    flex-direction: column;
  }

  .stacks {
    height: 30%;
    align-items: center;
    flex-wrap: wrap;

    .badgeBox {
      transform: scale(${(props) => (props.$ismobile ? "0.8" : "")});
      margin-left: ${(props) => (props.$ismobile ? "-10%" : "0%")};
    }

    .stackBadge {
      margin-right: 10px;
      margin-bottom: 5px;
    }
    .stackTitle {
      display: inline-block;
      width: 100%;
      margin-bottom: ${(props) => (props.$ismobile ? "10px" : "20px")};
    }
  }
`;

function ProjectCard({ project, index, popUp, setPopUp, currentPr }) {
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });

  return (
    <>
      <ProjectCardContainer
        $backImg={project.backgroundImg}
        $index={index}
        $curpr={currentPr}
        $ismobile={isMobile}
      >
        <div className="background" />
        <div className="contentsBox">
          <div className="title">
            <h2>{project.title}</h2>
          </div>
          <div className="contents">
            <h3>서비스 소개</h3>
            <p>{project.service}</p>
          </div>
          <div className="period">
            <h3>기간</h3>
            <p>{project.period}</p>
          </div>
          <div className="stacks">
            <h3 className="stackTitle">사용한 기술 스택</h3>
            <div className="badgeBox">
              {project.stacks.map((el, i) => {
                return (
                  <img
                    className="stackBadge"
                    src={project.stacks[i]}
                    key={i}
                    alt="skillBadge"
                  />
                );
              })}
            </div>
          </div>
          <Link to={`/project/${index}`}>
            <button className="learnMore">Learn More</button>
          </Link>
        </div>
      </ProjectCardContainer>
    </>
  );
}

export default ProjectCard;
