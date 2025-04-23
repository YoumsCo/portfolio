"use client"

import { useState } from "react";

export const useToggle = () => {
    const [value, setValue] = useState<boolean>(false);

    const handleValue = (val?: boolean) => {
        if (val) {
            return setValue(val);
        }
        return setValue(!value);
    }

    return { value, setValue, handleValue };
}