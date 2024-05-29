import styled from "styled-components";
import ArticleListItem from "./ArticleListItem";
import { Articles } from "../../data/data";

const ListContainer = styled.div``;

function ArticleList() {
    return (
        <ListContainer>
            {Articles.map(function (article) {
                return (
                    <ArticleListItem
                        key={article.id}
                        date={article.date}
                        title={article.title}
                        image={article.image}
                        content={article.content}
                    />
                );
            })}
        </ListContainer>
    );
}
export default ArticleList;
