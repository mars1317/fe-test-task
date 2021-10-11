export interface DropdownOptionType {
  value: string;
  label: string;
}

export interface DropdownPropsType {
  dropdownTitle: string,
  dropdownOptions: DropdownOptionType[],
  setDropdownTitle?: (optionValue: string) => void;
}
