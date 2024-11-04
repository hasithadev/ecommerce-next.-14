import React from 'react';
import Container from '../Container';
import Link from 'next/link';

const Navbar = () => {
  return (
  <>
  <div className='sticky top-0nw-full bg-slate-200 z-30 shadow-sm '>
    <div className='py-4 border-b-[1px]'>
      <Container>
        <div className='flex items-center justify-between gap-3 md:gap-0'>
       <Link className='font-bold text-2xl ' href='/'>E Shop</Link>
       <div>Search</div>
       <div className='flex items-center gap-8 md:gap-12'>
        <div>CartCount</div>
        <div>UserMenu</div>
       </div>
        </div>
      </Container>
    </div>
  </div>
  </>
  );
}

export default Navbar;
