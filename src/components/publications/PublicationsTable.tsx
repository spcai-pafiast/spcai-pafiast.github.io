import DebouncedInput from "@site/src/components/common/DebouncedInput";
import React, { useMemo, useState } from "react";
import {
  ColumnDef,
  FilterFn,
  SortingState,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Publication } from "@site/src/types";
import { rankItem } from "@tanstack/match-sorter-utils";

import styles from "./PublicationsTable.module.css";

type PublicationsTableProps = {
  data: Publication[];
};

const fuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
  // Rank the item
  const itemRank = rankItem(row.getValue(columnId), value);

  // Store the itemRank info
  addMeta({
    itemRank,
  });

  // Return if the item should be filtered in/out
  return itemRank.passed;
};

export default function PublicationsTable({ data }: PublicationsTableProps) {
  const [globalFilter, setGlobalFilter] = useState("");
  const [sorting, setSorting] = useState<SortingState>([]);

  const columns = useMemo<ColumnDef<Publication>[]>(() => {
    const columnHelper = createColumnHelper<Publication>();
    return [
      columnHelper.accessor("authors", {
        cell: (info) => info.getValue(),
        enableSorting: false,
        header: "Authors",
      }),
      columnHelper.accessor("title", {
        cell: (info) => info.getValue(),
        header: "Title",
      }),
      columnHelper.accessor("venue", {
        cell: (info) => info.getValue(),
        header: "Venue",
      }),
      columnHelper.accessor("type", {
        cell: (info) => info.getValue(),
        header: "Type",
      }),
      columnHelper.accessor("date", {
        cell: (info) => info.getValue(),
        header: "Date",
      }),
      columnHelper.accessor("tags", {
        cell: (info) => info.getValue(),
        enableSorting: false,
        header: "Tags",
      }),
      // columnHelper.accessor("links", {
      //   cell: (info) => info.getValue(),
      //   header: "Links",
      // }),
    ];
  }, []);

  const table = useReactTable({
    data,
    debugAll: true,
    columns,
    getCoreRowModel: getCoreRowModel<Publication>(),
    getFilteredRowModel: getFilteredRowModel<Publication>(),
    getSortedRowModel: getSortedRowModel<Publication>(),
    // globalFilterFn: fuzzyFilter,
    onGlobalFilterChange: setGlobalFilter,
    onSortingChange: setSorting,
    state: {
      globalFilter,
      sorting,
    },
  });

  return (
    <div>
      <div className={styles.inputContainer}>
        <DebouncedInput
          className={styles.input}
          value={globalFilter ?? ""}
          onChange={(value) => setGlobalFilter(String(value))}
          placeholder="Seach publications"
        />
      </div>
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} scope="col">
                  <div
                    {...{
                      onClick: header.column.getToggleSortingHandler(),
                      style: { cursor: header.column.getCanSort() ? "pointer" : "default" },
                    }}
                  >
                    {flexRender(header.column.columnDef.header, header.getContext())}
                    {{
                      asc: " 🔼",
                      desc: " 🔽",
                    }[header.column.getIsSorted() as string] ?? null}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="bg-white border-b hover:bg-gray-50">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="px-6 py-4">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
