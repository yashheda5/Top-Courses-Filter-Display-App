import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar';
import { Filter } from './Components/Filter';
import { Cards } from './Components/Cards'; // Make sure the path and name match
import { Spinner } from './Components/Spinner';
import { filterData, apiUrl } from './data';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

function App() {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category,setCategory]=useState(filterData[0].title);
  async function fetchData(params) {
    setLoading(true);
    try {
      const res = await fetch(apiUrl);
      const output = await res.json();
      console.log(output);
      setCourses(output.data);
    } catch (e) {
      toast.error("Something went wrong");
    }
    setLoading(false);
  }
  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div className='min-h-screen flex flex-col bg-[#33374A]'>
      <div><Navbar /></div>
      <div className='bg-[#33374A]'>
        <div><Filter filterData={filterData} category={category} setCategory={setCategory} />
</div>
        <div className="w-11/12 max-w-[1200px] 
        mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
        {loading ? (<Spinner />) : (<Cards courses={courses} category={category} />)}</div>

      </div>
    </div>

  );
}

export default App;
