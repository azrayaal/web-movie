// import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';

// export default function Pagination(props) {
//   const { page, setPage, numOfPages = 10 } = props;

//   const handlePageChange = (page) => {
//     setPage(page);
//   };

//   return (
//     <div className="flex items-center justify-between  border-gray-200  px-4 py-3 sm:px-6">
//       <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
//         <div onChange={(e) => handlePageChange(e.target.textContent)} count={numOfPages}>
//           <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
//             <a href="#" className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">
//               <span className="sr-only">Previous</span>
//               <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
//             </a>
//             <a href="#" aria-current="page" className="relative z-10 inline-flex items-center border border-indigo-500 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20">
//               1
//             </a>
//             <a href="#" className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">
//               <span className="sr-only">Next</span>
//               <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
//             </a>
//           </nav>
//         </div>
//       </div>
//     </div>
//   );
// }

import * as React from 'react';
import { Pagination } from '@mui/material';
// import { Typography } from '@mui/material';

import { createTheme, ThemeProvider } from '@mui/material/styles';

function Pagee({ page, setPage, numOfPages = 10 }) {
  const theme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  const handlePageChange = (page) => {
    setPage(page);
  };
  return (
    <ThemeProvider theme={theme}>
      <Pagination onChange={(e) => handlePageChange(e.target.textContent)} count={numOfPages} hideNextButton hidePrevButton variant="outlined" shape="rounded" color="primary" theme={theme} />
    </ThemeProvider>
  );
}

export default Pagee;
