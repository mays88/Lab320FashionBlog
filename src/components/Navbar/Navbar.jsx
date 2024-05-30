import styled from "styled-components";

const NavLinks = styled.ul`
    color: lightgray;
    display: flex;
    justify-content: space-between;
    font-size: 2.5em;
    text-decoration: underline;
    list-style: none;
    margin: 50px 0;
`;

function Navbar({ links }) {
    return (
        <NavLinks>
            {links.map((link) => {
                return (
                    <li key={link.id}>
                        <a>{link.title}</a>
                    </li>
                );
            })}
        </NavLinks>
    );
}
export default Navbar;
