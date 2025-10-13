import { Outlet, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const AppContainer = styled.div`
    display:flex;
    height: 100vh;
    background-color:#f4f7fa;
`

const Sidebar = styled.aside`
    width: 250px;
    background-color: #f4f7fa;
    color: white;
    padding: 20px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`
const NavList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`

const NavItem = styled.li`
    margin-bottom: 15px;
`

const StyledNavLink = styled(NavLink)`
    color: #000000;
    text-decoration:none;
    font-size:18px;
    display:block;
    padding:10px;
    border-radius:4px;
    font-family: "Montserrat", sans-serif;

    &.active {
    background-color: #440986;
    color: white;
    font-weight: bold;
    }

    &:hover {
    background-color: #440986;
    color: white;
    }
`;

const MainContent = styled.main`
    flex-grow: 1;
    padding:40px;
    overflow-y:auto;
`;

function Layout() {
    return (
        <AppContainer>
            <Sidebar>
                <br /><br /><br />
                <nav>
                    <NavList>
                        <NavItem>
                            <StyledNavLink to="/">Peças</StyledNavLink>
                        </NavItem>
                        <NavItem>
                            <StyledNavLink to="/visualizer">Visualização</StyledNavLink>
                        </NavItem>
                    </NavList>
                </nav>
            </Sidebar>
            <MainContent>
                <Outlet />
            </MainContent>
        </AppContainer>
    );
}

export default Layout;



