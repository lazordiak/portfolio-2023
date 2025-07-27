import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "@/store/store";

/**
 * Typed version of useDispatch hook for Redux store
 */
export const useAppDispatch: () => AppDispatch = useDispatch;

/**
 * Typed version of useSelector hook for Redux store  
 */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
