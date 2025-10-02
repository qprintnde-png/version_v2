import { lazy } from 'react'

// Lazy load all major route components
export const Home = lazy(() => import('./Home'))
export const Products = lazy(() => import('./Products'))
export const Services = lazy(() => import('./Services'))
export const About = lazy(() => import('./About'))
export const Contact = lazy(() => import('./Contact'))
export const Contract = lazy(() => import('./Contract'))
export const BlogList = lazy(() => import('./BlogList'))
export const BlogPost = lazy(() => import('./BlogPost'))
export const GetStarted = lazy(() => import('./GetStarted'))
export const AdminDashboard = lazy(() => import('./AdminDashboard'))