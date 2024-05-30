import styled from "styled-components";
import Navbar from "../Navbar/Navbar";

const HeaderTitle = styled.h1`
    color: tomato;
    font-size: 7em;
`;

const HeaderSubTitle = styled.h2`
    font-size: 3em;
`;

const navLinks = [
    { id: 1, title: "Women's" },
    { id: 2, title: "Men's" },
    { id: 3, title: "On the Street" },
    { id: 4, title: "The Catwalk" },
    { id: 5, title: "Adwatch" },
    { id: 6, title: "About" },
];

function Header() {
    return (
        <div>
            <HeaderTitle>Sartre&apos;s List</HeaderTitle>
            <HeaderSubTitle>Better-Dressed People</HeaderSubTitle>
            <Navbar links={navLinks} />
        </div>
    );
}
export default Header;
