import styled from "styled-components";

const NavLinks = styled.ul`
    color: red;
    display: flex;
    justify-content: space-between;
    font-size: 2.5em;
    list-style: none;
    padding-top: 2em;
`;
const FooterCC = styled.p`
    color: gray;
    font-size: 2em;
    padding-top: 1em;
`;

function Footer() {
    return (
        <>
            <NavLinks>
                <li>
                    <a>Home</a>
                </li>
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
                <li>
                    <a>Tips</a>
                </li>
            </NavLinks>
            <FooterCC>&copy; 2013 Valet Industries, Inc</FooterCC>
        </>
    );
}
export default Footer;
