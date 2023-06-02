import { Dispatch } from "react";

export type ValueSetter<Type> = Dispatch<React.SetStateAction<Type>>;
