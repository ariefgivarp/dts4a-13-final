import React from 'react'
import { useNewsTokenQuery } from "../services/newsAPI";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Stack } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
const PostCard = ({ content }) => {
    return (
        <Box sx={{ width: '100%' }}>
            <Stack spacing={2}>
                <Item>
                    <div className="col-lg-12 mb-5 mt-5" key={content.uuid}>
                        <div className="card">
                            <div className="card-body">
                            <h5 className="card-title">{content.title}</h5>
                            <CardMedia
                                    component="img"
                                    sx={{
                                        height: 233,
                                        width: 350,
                                        maxHeight: { xs: 233, md: 167 },
                                        maxWidth: { xs: 350, md: 250 },
                                    }}
                                    src={content.image_url}
                                />
                                
                                <p className="card-text">{content.description}</p>
                                <p className="card-text">Publish at: {content.published_at}</p>
                                <p className="card-text">categories: {content.categories}</p>
                                {/* <img src={} /> */}
                                <a
                                    href={content.url}
                                    className="text-blue-400 hover:text-blue-500 underline"
                                    style={{ color: 'inherit', textDecoration: 'inherit' }}
                                >
                                    See more...
                                </a>{" "}
                                
                            </div>
                        </div>
                    </div>
                </Item>
            </Stack>
        </Box>

    )
}
function NewsList() {
    
    const {
        data: posts,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useNewsTokenQuery()
    let postContent
    if (isLoading) {
        postContent = (
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    } else if (isSuccess) {
        postContent = posts.data.map((item) => {
            return <PostCard content={item} key={item.uuid} />
        })
    } else if (isError) {
        postContent = (
            <div className="alert alert-danger" role="alert">
                {error}
            </div>
        )
    }
    return <div>{postContent}</div>
}
export default NewsList;
