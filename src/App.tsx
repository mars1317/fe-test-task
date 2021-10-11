import React, {useEffect, useState} from 'react';
import { hot } from 'react-hot-loader';
import { getGroupsPage } from 'api/getGroupsPage';
import Loader from 'components/Loader';
import UserList from 'components/UserList';
import Pagination from 'components/Pagination';

import {DropdownPropsType} from 'types/Dropdown';
import {DropdownOptionType} from 'types/Dropdown';
import {PaginationPropsType} from 'types/Pagination';
import {fetchedData} from 'types/UserList';

import './styles.css';

const App: React.FC = () => {
  const initialPage:number = 1;
  const dropdownTitle:string = 'Choose Country';
  
  const [data, setData] = useState<fetchedData>({})
  const [currentPage, setCurrentPage] = useState<number>(initialPage);
  const [isLoading, setLoading] = useState<Boolean>(true);

  const dropdownOptions:DropdownOptionType[] = [
    { value: 'USA', label: 'USA' },
    { value: 'CANADA', label: 'CANADA' },
    { value: 'GB', label: 'GB' }
  ]
  
  const dropdownData:DropdownPropsType = {
    dropdownTitle,
    dropdownOptions
  }

  const paginationData:PaginationPropsType = {
    currentPage,
    totalPages: data.totalPages!==undefined ? data.totalPages : initialPage,
    setCurrentPage: setCurrentPage
  }

  useEffect(() => {
    setLoading(true)
    getGroupsPage(currentPage).then(response=>response).then(data=> {
      if(data!==undefined) {
        setData(data)
      }
      setLoading(false)
    })
  }, [currentPage])

  return (
    isLoading ? 
    <Loader/> :
    <main>
      <UserList userData = {data.result} dropdownData={dropdownData}/>
      <Pagination paginationData = {paginationData}/>
    </main> 
  )
};


export default hot(module)(App);