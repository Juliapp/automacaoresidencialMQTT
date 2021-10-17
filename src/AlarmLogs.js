import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import { getAlarmLogs } from './api';
import { useTable } from 'react-table';

const AlarmLogs = () => {
  const [data, setData] = useState();

  useEffect(() => {
    getAlarmLogs().then((data) => {
      console.log(data);
      setData(data);
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
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
      useTable({
        columns,
        data,
      });

    return (
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
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
