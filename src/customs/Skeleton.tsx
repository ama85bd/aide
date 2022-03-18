import React from 'react';
import {
  IoAppsOutline,
  IoHeartOutline,
  IoCalendarOutline,
} from 'react-icons/io5';

export const getSkeleton = () => {
  return (
    <div className='skeleton_view' style={{ display: 'block' }}>
      <IoHeartOutline height={150} style={{ margin: '0 2rem' }} />

      <IoHeartOutline style={{ margin: '0 1rem' }} />
      <IoHeartOutline style={{ margin: '0 3rem' }} height={40} />
      <IoHeartOutline
        style={{
          display: 'inline-block',
          float: 'left',
          marginLeft: '1rem',
          width: '40%',
        }}
        height={30}
      />
      <IoHeartOutline
        style={{
          display: 'inline-block',
          float: 'right',
          marginRight: '1rem',
          width: '40%',
        }}
        height={30}
      />
    </div>
  );
};

export const CategorySkeleton = () => {
  return (
    <div style={{ display: 'block' }}>
      <IoHeartOutline
        style={{
          display: 'inline-block',
          float: 'left',
          marginLeft: '1rem',
          padding: '0.4rem',
          width: '90%',
        }}
        height={40}
      />
    </div>
  );
};
export const BrandSkeleton = () => {
  return (
    <div className='grid grid-cols-6'>
      <div className=' col-span-2'>
        <IoHeartOutline
          style={{
            display: 'inline-block',
            float: 'left',
            width: '80%',
            margin: ' 1rem',
          }}
          height={60}
        />
      </div>
      <div className=' col-span-4'>
        <div className=' grid grid-cols-3'>
          <div className=' col-span-2'>
            <IoHeartOutline
              style={{
                display: 'inline-block',
                float: 'right',
                margin: '1rem',
                width: '80%',
              }}
            />
          </div>
          <div className=' col-span-1'>
            <IoHeartOutline
              style={{
                display: 'inline-block',
                float: 'right',
                margin: '1rem',
                width: '20%',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export const CompanySkeleton = () => {
  return (
    <div className='grid grid-cols-6'>
      <div className=' col-span-2'>
        <IoHeartOutline
          style={{
            display: 'inline-block',
            float: 'left',
            width: '80%',
            margin: ' 1rem',
          }}
          height={70}
        />
      </div>
      <div className=' col-span-4 h-20'>
        <div className='flex flex-col justify-center h-full'>
          <IoHeartOutline style={{ width: '80%' }} height={30} />
          <IoHeartOutline style={{ width: '50%' }} height={20} />
        </div>
      </div>
    </div>
  );
};
