import React from "react";
import styled from "styled-components";
import PostListItem from "./PostListItem";

const Wrapper = styled.div`
    display : flex;
    flex-direction : column;
    align-items : flex-start;
    justify-content : center;

    & > * {
        :not(:last-child) {
            margin-bottom : 16px;
        }
    }
`;

function PostList(props) {
    const {posts, onClickItem} = props;

// map 함수로 렌더링 한 모습 
// postListItem 컴포넌트를 불러와 작업하였다.

    return (
        <Wrapper>
            {posts.map((post, index) => {
                return (
                    <PostListItem 
                        key = {post.id}
                        post = {post}
                        onClick = {() => {
                            onClickItem(post)
                        }}
                    />
                )
            })}
        </Wrapper>
    )
}

export default PostList;