import styled from "styled-components";
import Navbar from "../Navbar/Navbar";

const HeaderTitle = styled.h1`
    color: red;
    font-size: 7em;
`;

const HeaderSubTitle = styled.h2`
    font-size: 3em;
`;

function Header() {
    return (
        <div>
            <HeaderTitle>Sartre&apos;s List</HeaderTitle>
            <HeaderSubTitle>Better-Dressed People</HeaderSubTitle>
            <Navbar />
        </div>
    );
}
export default Header;
