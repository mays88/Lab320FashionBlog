import styled from "styled-components";
import Navbar from "../Navbar/Navbar";

const FooterCC = styled.p`
    color: lightgray;
    font-size: 2em;
    padding-top: 1em;
`;

const navLinks = [
    { id: 1, title: "Home" },
    { id: 2, title: "Women's" },
    { id: 3, title: "Men's" },
    { id: 4, title: "On the Street" },
    { id: 5, title: "The Catwalk" },
    { id: 6, title: "Adwatch" },
    { id: 7, title: "About" },
    { id: 8, title: "Tips" },
];

function Footer() {
    return (
        <>
            <Navbar links={navLinks} />
            <FooterCC>&copy; 2013 Valet Industries, Inc</FooterCC>
        </>
    );
}
export default Footer;
