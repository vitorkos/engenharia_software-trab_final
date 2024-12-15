/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as AuthenticatedRouteImport } from './routes/_authenticated/route'
import { Route as AuthenticatedIndexImport } from './routes/_authenticated/index'
import { Route as AuthenticatedStudentsIndexImport } from './routes/_authenticated/students/index'
import { Route as AuthenticatedBooksIndexImport } from './routes/_authenticated/books/index'

// Create/Update Routes

const AuthenticatedRouteRoute = AuthenticatedRouteImport.update({
  id: '/_authenticated',
  getParentRoute: () => rootRoute,
} as any)

const AuthenticatedIndexRoute = AuthenticatedIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => AuthenticatedRouteRoute,
} as any)

const AuthenticatedStudentsIndexRoute = AuthenticatedStudentsIndexImport.update(
  {
    id: '/students/',
    path: '/students/',
    getParentRoute: () => AuthenticatedRouteRoute,
  } as any,
)

const AuthenticatedBooksIndexRoute = AuthenticatedBooksIndexImport.update({
  id: '/books/',
  path: '/books/',
  getParentRoute: () => AuthenticatedRouteRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_authenticated': {
      id: '/_authenticated'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AuthenticatedRouteImport
      parentRoute: typeof rootRoute
    }
    '/_authenticated/': {
      id: '/_authenticated/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof AuthenticatedIndexImport
      parentRoute: typeof AuthenticatedRouteImport
    }
    '/_authenticated/books/': {
      id: '/_authenticated/books/'
      path: '/books'
      fullPath: '/books'
      preLoaderRoute: typeof AuthenticatedBooksIndexImport
      parentRoute: typeof AuthenticatedRouteImport
    }
    '/_authenticated/students/': {
      id: '/_authenticated/students/'
      path: '/students'
      fullPath: '/students'
      preLoaderRoute: typeof AuthenticatedStudentsIndexImport
      parentRoute: typeof AuthenticatedRouteImport
    }
  }
}

// Create and export the route tree

interface AuthenticatedRouteRouteChildren {
  AuthenticatedIndexRoute: typeof AuthenticatedIndexRoute
  AuthenticatedBooksIndexRoute: typeof AuthenticatedBooksIndexRoute
  AuthenticatedStudentsIndexRoute: typeof AuthenticatedStudentsIndexRoute
}

const AuthenticatedRouteRouteChildren: AuthenticatedRouteRouteChildren = {
  AuthenticatedIndexRoute: AuthenticatedIndexRoute,
  AuthenticatedBooksIndexRoute: AuthenticatedBooksIndexRoute,
  AuthenticatedStudentsIndexRoute: AuthenticatedStudentsIndexRoute,
}

const AuthenticatedRouteRouteWithChildren =
  AuthenticatedRouteRoute._addFileChildren(AuthenticatedRouteRouteChildren)

export interface FileRoutesByFullPath {
  '': typeof AuthenticatedRouteRouteWithChildren
  '/': typeof AuthenticatedIndexRoute
  '/books': typeof AuthenticatedBooksIndexRoute
  '/students': typeof AuthenticatedStudentsIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof AuthenticatedIndexRoute
  '/books': typeof AuthenticatedBooksIndexRoute
  '/students': typeof AuthenticatedStudentsIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/_authenticated': typeof AuthenticatedRouteRouteWithChildren
  '/_authenticated/': typeof AuthenticatedIndexRoute
  '/_authenticated/books/': typeof AuthenticatedBooksIndexRoute
  '/_authenticated/students/': typeof AuthenticatedStudentsIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '' | '/' | '/books' | '/students'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/books' | '/students'
  id:
    | '__root__'
    | '/_authenticated'
    | '/_authenticated/'
    | '/_authenticated/books/'
    | '/_authenticated/students/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  AuthenticatedRouteRoute: typeof AuthenticatedRouteRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  AuthenticatedRouteRoute: AuthenticatedRouteRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/_authenticated"
      ]
    },
    "/_authenticated": {
      "filePath": "_authenticated/route.tsx",
      "children": [
        "/_authenticated/",
        "/_authenticated/books/",
        "/_authenticated/students/"
      ]
    },
    "/_authenticated/": {
      "filePath": "_authenticated/index.tsx",
      "parent": "/_authenticated"
    },
    "/_authenticated/books/": {
      "filePath": "_authenticated/books/index.tsx",
      "parent": "/_authenticated"
    },
    "/_authenticated/students/": {
      "filePath": "_authenticated/students/index.tsx",
      "parent": "/_authenticated"
    }
  }
}
ROUTE_MANIFEST_END */
