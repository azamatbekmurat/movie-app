import { Box, Grid2, Paper } from '@mui/material';
import React from 'react';
import { MovieDataType } from '../../assets/data';
import MovieCard from '../movie-card';

interface MovieListProps {
    recommendList: MovieDataType[]
}

const MovieList = ({ recommendList }: MovieListProps) => {
    return (
      <Grid2 container spacing={2}>
        {recommendList.map((item) => (
          <Grid2 key={item.id} size={{xs: 12, sm: 6, md: 4, lg: 3}}>
            <Paper elevation={0} sx={{ backgroundColor: "transparent" }}>
              <MovieCard movie={item} />
            </Paper>
          </Grid2>
        ))}
      </Grid2>
    );
  };

export default MovieList;