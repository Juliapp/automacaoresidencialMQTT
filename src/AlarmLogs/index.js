import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { getAlarmLogs } from '../api';
import { usePagination, useTable } from 'react-table';
import './styles.css';

const AlarmLogs = () => {
  const [data, setData] = useState();

  useEffect(() => {
    getAlarmLogs().then((data) => {
      setData(
        data.map((value) => {
          const { date, hour, peopleAlarm, doorsAlert, windowsAlert } = value;

          return {
            date,
            hour,
            peopleAlarm: peopleAlarm ? 'ON' : 'OFF',
            doorsAlert: doorsAlert ? 'ON' : 'OFF',
            windowsAlert: windowsAlert ? 'ON' : 'OFF',
          };
        })
      );
    });
  }, []);

  const columns = [
    {
      Header: 'Data',
      accessor: 'date',
    },
    {
      Header: 'Hora',
      accessor: 'hour',
    },
    {
      Header: 'Alarme Pessoa',
      accessor: 'peopleAlarm',
    },
    {
      Header: 'Alerta Porta',
      accessor: 'doorsAlert',
    },
    {
      Header: 'Alerta Janela',
      accessor: 'windowsAlert',
    },
  ];

  const RcTable = ({ data, columns }) => {
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      prepareRow,
      page, // Instead of using 'page', we'll use page,
      // which has only the page for the active page

      // The rest of these things are super handy, too ;)
      canPreviousPage,
      canNextPage,
      pageOptions,
      pageCount,
      gotoPage,
      nextPage,
      previousPage,
      setPageSize,
      state: { pageIndex, pageSize },
    } = useTable(
      {
        columns,
        data,
        initialState: { pageIndex: 0 },
      },
      usePagination
    );

    return (
      <>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        {/* 
        Pagination can be built however you'd like. 
        This is just a very basic UI implementation:
      */}
        <div className="pagination">
          <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
            {'<<'}
            {'\u00A0'}
          </button>
          <button onClick={() => previousPage()} disabled={!canPreviousPage}>
            {'<'}
            {'\u00A0'}
          </button>
          <button onClick={() => nextPage()} disabled={!canNextPage}>
            {'>'}
            {'\u00A0'}
          </button>
          <button
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            {'>>'}
            {'\u00A0'}
          </button>
          <span>
            Page{'\u00A0'}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>
          </span>
          <span>
            {'\u00A0'}| Go to page:{'\u00A0'}
            <input
              type="number"
              defaultValue={pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                gotoPage(page);
              }}
              style={{ width: '100px' }}
            />
          </span>{' '}
          <select
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
            }}
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>
      </>
    );
  };

  return (
    <div className="container gap-4 mx-auto flex flex-col px-2">
      <Header />
      {!data?.length ? (
        <div>Loading..</div>
      ) : (
        <RcTable columns={columns} data={data} />
      )}
    </div>
  );
};

export default AlarmLogs;
