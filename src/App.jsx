import "./App.css";
import styled from "styled-components";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import ArticleList from "./components/ArticleList/ArticleList";
import Footer from "./components/Footer/Footer";

const Container = styled.div`
    margin: auto;
    width: 93.75rem;
`;

function App() {
    return (
        <>
            <Container>
                <Header />
                <ArticleList />
                <Footer />
            </Container>
        </>
    );
}

export default App;
