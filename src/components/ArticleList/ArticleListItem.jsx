/* eslint-disable react/prop-types */
import styled from "styled-components";

const ArticleContent = styled.div`
    font-size: 2.5em;
    line-height: 1.5;
    padding: 1.2em 0;
    .content::first-letter {
        color: gray;
        font-size: 6em;
        word-wrap: break-word;
        float: left;
        line-height: 1;
        margin-right: 0.2em;
    }

    .date {
        width: 100%;
        color: gray;
    }
    .image {
        width: 100%;
    }
`;

const Continue = styled.p`
    color: red;
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
            <hr />
        </ArticleContent>
    );
}
export default ArticleListItem;
