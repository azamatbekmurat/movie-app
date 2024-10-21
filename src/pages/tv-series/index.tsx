import { SetStateAction, useContext, useState } from 'react';
import Layout from "../../Layout";
import { Box, Paper, InputBase, InputAdornment, Typography } from "@mui/material";
import SearchIcon from '../../assets/icons/icon-search.svg';
import MovieList from "../../components/movie-list";
import { MovieDataType } from "../../assets/data";
import { MovieContext } from "../../context/movie-context";

const TvSeries = () => {
    const [search, setSearch] = useState("");
    const [searchList, setSearchList] = useState<MovieDataType[]>([]);

    const {state} = useContext(MovieContext);
    const {movies} = state;

    const tvSeries = movies.filter(movie => movie.category === "TV Series")

    const handleSearch = (e: {target: {value: SetStateAction<string>}}) => {
        setSearch(e.target.value);
        const newList = tvSeries.filter((serie) => 
            serie.title.toLowerCase().includes(search.toLocaleLowerCase())
        )
    
        setSearchList(newList);
      }
    
    return (
        <Layout>
            <Box>
                <Paper
                component="form"
                sx={{
                    display: "flex",
                    alignItems: "center",
                    borderRadius: "default",
                    p: 1,
                    backgroundColor: "#10141f",
                    border: "none",
                }}
                >
                <InputBase
                    sx={{ ml: 1, flex: 1, color: "white", border: "none" }}
                    placeholder="Search movies and Tv series"
                    value={search}
                    onChange={handleSearch}
                    startAdornment={
                        <InputAdornment position="start">
                            <img
                                src={SearchIcon} 
                                alt="search icon"
                                width={20}
                            />
                        </InputAdornment>
                    }
                />
                </Paper>
            </Box>
            <Box py={2} px={4}>
                    {search === "" ? (
                        <Box width="100%">
                            <Typography variant="h5" component="h1" my={6} fontWeight={400}>
                                TV Series
                            </Typography>
                            <MovieList recommendList={search === "" ? tvSeries : searchList}/>
                            
                        </Box>
                    ): (
                        <Box width="100%">
                            <Typography>
                            Found {searchList.length} results for "{search}"{" "}
                            </Typography>
                            <MovieList recommendList={searchList} />
                        </Box>
                    )}  

            </Box>
            
        </Layout>
    )
};

export default TvSeries;