import { DropdownPropsType } from "./Dropdown";

export interface UserItemProps {
  creationDateTime: string;
  id: string;
  lastUpdateTime: string;
  name: string;
}
export interface UserListProps {
   userData?: Array<UserItemProps>;
   dropdownData: DropdownPropsType;
}

export interface fetchedData {
  result?: UserItemProps[];
  totalElements?: number;
  currentPage?: number;
  totalPages?: number;
}
