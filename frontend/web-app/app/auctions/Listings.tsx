import React, { useEffect, useState } from 'react';
import AuctionCard from './AuctionCard';
import { Auction, PagedResult } from '../types';
import AppPagination from '../components/AppPagination';
import { getData } from '../actions/auctioActions';

export default function Listings() {
  const [auctions, setAuctions] = useState<Auction[]>([]);
  const [pageCount, setPageCount] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);

  useEffect(() => {
    getData(pageNumber).then((data) => {
      setAuctions(data.results);
      setPageCount(data.pageCount);
    });
  }, [pageNumber]);

  return (
    <>
      <div className='grid grid-cols-4 gap-6'>
        {data &&
          data.results.map((auction) => (
            <AuctionCard auction={auction} key={auction.id} />
          ))}
      </div>
      <div className='flex justify-center mt-4'>
        <AppPagination currentPage={1} pageCount={data.pageCount} />
      </div>
    </>
  );
}
