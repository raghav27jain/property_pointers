import { TextField, Button, Autocomplete } from '@mui/material';

const SearchBar = ({ onSearch }) => {
  const options = ['Delhi', 'Mumbai', 'Noida']; 

  return (
    <div style={{ padding: '2rem', background: '#f8f9fa' }}>
      <Autocomplete options={options} renderInput={(params) => 
        <TextField {...params} label="City/Locality" variant="outlined" fullWidth />
      } />
      <Button variant="contained" onClick={onSearch}>Search Properties</Button>
    </div>
  );
};

export default SearchBar;
