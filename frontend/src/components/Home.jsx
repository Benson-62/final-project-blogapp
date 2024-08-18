import React, { useState, useEffect } from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Button, CardActions } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    const deleteBlog = (id) => {
        axios.delete(`http://localhost:3001/delete/${id}`).then(() => {
            setData(prevData => prevData.filter(d => d._id !== id));
        }).catch((error) => {
            console.log(error);
        });
    };

    const editBlog = (data) => {
        navigate('/add', { state: { val: data } });
    };

    useEffect(() => {
        axios.get('http://localhost:3001/get').then((response) => {
            setData(response.data);
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    return (
        <div style={{ marginTop: '3%' }}>
            <Grid container spacing={2} justifyContent="center">
                {data.map((d) => (
                    <Grid item xs={6} md={3} key={d._id}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                alt="img not loaded!"
                                height="140"
                                image={d.img_url}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h" component="div">
                                    {d.title}
                                </Typography>
                                <Typography variant="body5" color="text.primary">
                                    {d.content}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button
                                    onClick={() => deleteBlog(d._id)}
                                    size="small"
                                    variant="contained"
                                    sx={{ backgroundColor: 'purple', color: 'white', '&:hover': { backgroundColor: 'darkpurple' } }}
                                >
                                    Delete
                                </Button>
                                <Button
                                    onClick={() => editBlog(d)}
                                    size="small"
                                    variant="contained"
                                    sx={{ backgroundColor: 'purple', color: 'white', '&:hover': { backgroundColor: 'darkpurple' } }}
                                >
                                    Edit
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default Home;
