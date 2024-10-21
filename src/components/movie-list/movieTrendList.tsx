import { Box, Grid2, Paper } from '@mui/material';
import React from 'react';
import { MovieDataType } from '../../assets/data';
import MovieTrendCard from '../movie-card/movieTrend';

interface MovieTrendListProps {
    trendingList: MovieDataType[];
}

const MovieTrendList = ({trendingList}: MovieTrendListProps) => {

    return (
        <Grid2 container spacing={2}>
          {trendingList.map((movie) => (
            <Grid2 key={movie.id}>
              <Paper elevation={0} sx={{ backgroundColor: "transparent" }}>
                <MovieTrendCard movie={movie} />
              </Paper>
            </Grid2>
          ))}
        </Grid2>
      );
};

export default MovieTrendList;