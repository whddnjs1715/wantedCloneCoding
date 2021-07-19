import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import { NavigationMenu } from '../Content/NavigationMenu';
import { NavigationJobList } from '../Content/NavigationJobList';
import NavigationLists from '../Content/NavigationLists';

function Nav() {
    const history = useHistory();
    const [setWindowPath] = useState(null);
    const handleExplore = (idx) => {
        idx === 1 ? setDisplayExplore(true) : setDisplayExplore(false);
    };
    const [ displayExplore, setDisplayExplore ] = useState(false);
    const [ displayRecommend, setDisplayRecommend ] = useState(false);

    return (
        <>
            <Navigation
                displayExplore={displayExplore}
                displayRecommend={displayRecommend}
            >
                <NavDiv>
                  <WantedLogo
                    src="/Images/wanted.PNG"
                    alt="Logo"
                    onClick={() => {
                    history.push('/');
                    }}
                  />
                  <SignButton>회원가입하기</SignButton>
                </NavDiv>
                <NavContainer>
                  <LogoFlat
                    src="/Images/wanted.PNG"
                    alt="Logo"
                    onClick={() => {
                    history.push('/');
                    }}
                  />
                    <NavMenu
                        onClick={() => {
                            setWindowPath(window.location.pathname);
                        }}
                    >
                        {NavigationMenu?.map(({ id, link, url, name }, idx) => (
                        <Link
                            key={id}
                            to={link}
                            onMouseOver={() => {
                            handleExplore(idx);
                            }}
                            style={{
                            borderBottom: `${
                                window.location.pathname === url ? '2px solid #258bf7' : ''
                            }`,
                            }}
                        >
                            <li>{name}</li>
                        </Link>
                        ))}

                    </NavMenu>
                    <NavAside>
                        <UserAsideList>
                            <UserAsideListLi>
                                <SignAndLogin>회원가입/로그인</SignAndLogin>
                            </UserAsideListLi>
                            <UserAsideListLi>
                                <CompanyServ>기업 서비스</CompanyServ>
                            </UserAsideListLi>
                        </UserAsideList>
                        <Fasfabars>
                          <i class="fas fa-search"></i>
                        </Fasfabars>
                        <Fasfabars>
                          <i className="fas fa-bars"></i>
                        </Fasfabars>
                    </NavAside>
                    <ExpContent
                        displayExplore={displayExplore}
                        onMouseOver={() => setDisplayExplore(true)}
                        onMouseOut={() => setDisplayExplore(false)}
                    >
                        <ExpContainer>
                            {NavigationJobList.map((el) => (
                            <NavigationLists
                                key={el.id}
                                title={el.category}
                                subcategory={el.name}
                            />
                        ))}
                        </ExpContainer>
                    </ExpContent>
                </NavContainer>
            </Navigation>
        </>
    );
}

const Navigation = styled.nav`
  display: ${(props) => (props.displayRecommend ? 'none' : 'block')};
  width: 100%;
  position: fixed;
  top: 0;
  font-size: 14px;
  font-weight: bold;
  background-color: white;
  color: #333333;
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);
  z-index: 10;
`;

const NavContainer = styled.div`
  max-width: 1060px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoFlat = styled.img`
  @media (max-width: 767px) {
    display: none;
  }

  @media screen and (min-width: 768px) and (max-width: 974px){
    display: none;
  }
`;

const Fasfabars = styled.li`
  display: inline-flex;
  font-size: 18px;
  padding-right : 8px;

  @media (min-width: 1200px) {
    display: none;
  }

  @media screen and (min-width: 768px) and (max-width: 974px){
    display: none;
  }
`;

const NavDiv = styled.div`
  @media (max-width: 767px) {
    width: 100%;
    padding: 15px 20px 0;
  }

  @media (min-width: 1200px) {
      display: none;
    }

  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
`;

const WantedLogo = styled.img`
  width: 80px;
  height: 30px;
  cursor: pointer;
`;

const SignButton = styled.button`
  @media (max-width: 767px){
    display: block;
  }

    display: none;
    color: #36f;
    font-size: 14px;
    line-height: 32px;
    height: 34px;
    border: 1px solid #36f;
    border-radius: 17px;
    padding: 0 14px;
`;

const NavMenu = styled.ul`
  display: flex;

  a {
    text-decoration: none;
    color: #333333;
    padding: 17px 13px;
    cursor: pointer;
    border-bottom: ${({ idx, tabActive }) =>
      idx !== tabActive && '1px solid blue'};

    &:hover {
      border-bottom: 1px solid ${(props) => props.theme.borderColor};
    }
  }

  @media (min-width: 1200px) {
    a:nth-child(1) {
      display: none;
    }
  }

  @media (max-width: 767px){
    a:nth-child(4) {
      display: none;
    }

    a:nth-child(5) {
      display: none;
    }

    a:nth-child(6) {
      display: none;
    }

    a:nth-child(7) {
      display: none;
    }

    a:nth-child(8) {
      display: none;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 974px){
    a:nth-child(4) {
      display: none;
    }

    a:nth-child(5) {
      display: none;
    }

    a:nth-child(6) {
      display: none;
    }

    a:nth-child(7) {
      display: none;
    }

    a:nth-child(8) {
      display: none;
    }
  }
}
`;

const NavAside = styled.aside`
  padding: 17px 13px;

  li {
    margin-right: 10px;
    cursor: pointer;
  }
`;

const UserAsideList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 15px;

  i {
    margin-right: 15px;
  }

  button {
    padding: 0;
  }
`;

const  UserAsideListLi = styled.li``;

const SignAndLogin = styled.span`
  @media (max-width: 767px){
    display: none;
  }
`;

const CompanyServ = styled.span`
  font-size: 13px;
  color: #666;
  line-height: 30px;
  height: 30px;
  border: 1px solid #e1e2e3;
  border-radius: 15px;
  padding: 0 10px;
  margin: 0 0 0 15px;
  font-weight: 400;
  display: inline-flex;

  @media (max-width: 767px){
    display: none;
  }
`;

const AsideList = styled.ul`
display: flex;

i {
  height: 15px;
  margin-right: 20px;
  padding: 0 10px;
  border-right: 1px solid gray;
  cursor: pointer;
}
`;

const ExpContent = styled.div`
  width: 100%;
  max-height: ${(props) => (props.displayExplore ? '2000px' : '0px')};
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  overflow: hidden;
  transition: ${(props) =>
    props.displayExplore ? 'max-height 0.8s ease-in-out' : 'none'};
`;

const ExpContainer = styled.div`
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  max-width: 1060px;
  margin: 0 auto;

  div:nth-child(2) {
    padding-top: 71.8px;
  }

  div:last-child {
    margin-bottom: 20px;
  }
`;

export default Nav;