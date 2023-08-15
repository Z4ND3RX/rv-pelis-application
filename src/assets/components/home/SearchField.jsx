import React, { useContext, useEffect, useMemo, useRef } from "react";
import { Box, Button, TextField } from "@mui/material";
import PelisContext from "../../../context/PelisContext";
import { Form } from "react-router-dom";

function SearchField() {
    const { searchMovies, setSearchKey } = useContext(PelisContext);

    const searchKeyRef = useRef("");

    const memoizedSetSearchKey = useMemo(() => (value) => {
        setSearchKey(value);
        searchKeyRef.current = value;
    }, []);

    useEffect(() => {
        searchKeyRef.current = setSearchKey();
      }, [setSearchKey]);

    return (
        <Box component="form" onSubmit={searchMovies} display="flex" justifyContent="flex-end" marginBottom={2}>
            <TextField id="outlined-basic" label="Título Película" variant="outlined"
                onChange={(e) => memoizedSetSearchKey(e.target.value)} />
            <Button type="submit" variant="outlined">Buscar</Button>
        </Box>
    );
}

export default SearchField;

