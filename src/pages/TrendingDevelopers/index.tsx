import React, { useState } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import TrendingHeader from '../../components/TrendingHeader';
import { DeveloperType } from '../../types';
import Developer from '../../components/Developer';

const getDevelopers = async (page: number) => {
  const res = await axios.get(`https://gh-trending-api.herokuapp.com/developers`);
  return res.data;
}

const TrendingDevelopers = () => {
  const [ page, setPage ] = useState(1);
  const getDevelopersResponse = useQuery(['developers', page], () => getDevelopers(page), { keepPreviousData : true });
  const { status, isLoading, isError, error, data, isFetching, isPreviousData } = getDevelopersResponse;
  const response: any = getDevelopersResponse.data;
  return (
    <div className="container page-wrap">
      <TrendingHeader />
      {status === 'loading' && ( <div>Loading data</div> )}
      {status === 'error' && ( <div>Error fetching data</div> )}
      {status === 'success' && (
        <div>
          { response.map((dev: DeveloperType) => <Developer key={dev.rank} developer={dev} /> ) }
        </div>
      )}
    </div>
  )
}

export default TrendingDevelopers;