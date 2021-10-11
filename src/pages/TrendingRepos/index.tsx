import React, { useState } from 'react';
import { useQuery } from 'react-query';
// import githubTrends from 'github-trends-api';
import axios from 'axios';
import TrendingHeader from '../../components/TrendingHeader';
import { RepoType } from '../../types';
import Repo from '../../components/Repo';

const getRepos = async (page: number) => {
  const res = await axios.get(`https://gh-trending-api.herokuapp.com/repositories`);
  return res.data;
}

const TrendingRepos = () => {
  const [ page, setPage ] = useState(1);
  const getReposResponse = useQuery(['repos', page], () => getRepos(page), { keepPreviousData : true });
  const { status, isLoading, isError, error, data, isFetching, isPreviousData } = getReposResponse;
  const response: any = getReposResponse.data;
  return (
    <div className="container page-wrap">
      <TrendingHeader />
      {status === 'loading' && ( <div>Loading data</div> )}
      {status === 'error' && ( <div>Error fetching data</div> )}
      {status === 'success' && (
        <div>
          { response.map((repo: RepoType) => <Repo key={repo.rank} repo={repo} /> ) }
        </div>
      )}
    </div>
  )
}

export default TrendingRepos;