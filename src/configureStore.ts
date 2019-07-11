import { applyMiddleware, combineReducers, compose, createStore, StoreEnhancer } from 'redux';
import { connectRoutes } from 'redux-first-router';

import routesMap from './routesMap';

import actionCreators from './modules';

const { enhancer, middleware, reducer, thunk } = connectRoutes(routesMap);
const rootReducer = combineReducers({ ...actionCreators, location: reducer });
const middlewares = applyMiddleware(middleware);
const enhancers: StoreEnhancer = compose(
  enhancer,
  middlewares
);

export const store = createStore(rootReducer, {}, enhancers);
export type RootState = ReturnType<typeof rootReducer>;
export type RootAction = ReturnType<typeof thunk>;
