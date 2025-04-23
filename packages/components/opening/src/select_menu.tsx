import React from "react";

export type SelectMenuProps = {
    label: string;
};

export const SelectMenu: React.FC<SelectMenuProps> = ({ label }) => {
    return <div>{label}</div>;
};
