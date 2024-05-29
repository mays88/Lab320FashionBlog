import styled from "styled-components";

const NavLinks = styled.ul`
    color: gray;
    display: flex;
    justify-content: space-between;
    font-size: 2.5em;
    text-decoration: underline;
    list-style: none;
`;

function Navbar() {
    return (
        <NavLinks>
            <li>
                <a>Women&apos;s</a>
            </li>
            <li>
                <a>Men&apos;s</a>
            </li>
            <li>
                <a>On the Street</a>
            </li>
            <li>
                <a>The Catwalk</a>
            </li>
            <li>
                <a>AdWatch</a>
            </li>
            <li>
                <a>About</a>
            </li>
        </NavLinks>
    );
}
export default Navbar;
