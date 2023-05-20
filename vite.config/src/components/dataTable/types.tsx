export interface IData {
  [key: string]: any;
}

export interface colDataType {
field: string;
headerName: string;
id: string,
width?: string,
renderCell?: (row: IData)=> JSX.Element;
}