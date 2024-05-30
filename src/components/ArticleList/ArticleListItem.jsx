/* eslint-disable react/prop-types */
import styled from "styled-components";

const ArticleContent = styled.div`
    font-size: 2.5em;
    line-height: 1.5;
    padding: 1.2em 0;
    border-bottom: 1px solid lightgray;
    margin-bottom: 4rem;

    .content::first-letter {
        color: lightgray;
        font-size: 6em;
        word-wrap: break-word;
        float: left;
        line-height: 1;
        margin-right: 0.1em;
    }

    .date {
        width: 100%;
        color: lightgray;
    }
    .image {
        width: 100%;
        margin-bottom: 25px;
    }
`;

const Continue = styled.p`
    color: tomato;
    text-align: right;
    padding-bottom: 1.75em;
`;

function ArticleListItem({ id, date, title, content, image }) {
    return (
        <ArticleContent key={id}>
            <p className="date">{date}</p>
            <h1>{title}</h1>
            <img src={image} className="image" />
            <p className="content">{content}</p>
            <Continue>
                <a src="#">Continues ...</a>
            </Continue>
        </ArticleContent>
    );
}
export default ArticleListItem;
