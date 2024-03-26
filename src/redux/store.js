import { configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { catalogReducer } from "./catalog/catalogSlice";
import { filterReducer } from "./filters/filtersSlice";
import { favoritesReducer } from "./favorites/favoritesSlice";

const favoritesPersistConfig = {
  key: "favorites",
  storage,
};

export const store = configureStore({
  reducer: {
    catalog: catalogReducer,
    filter: filterReducer,
    favorites: persistReducer(favoritesPersistConfig, favoritesReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
