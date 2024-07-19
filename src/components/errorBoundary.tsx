'use client'

import React from 'react'
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary'

type ErrorBoundaryProps = {
  errorMessage?: string
}

const ErrorFallback = ({ errorMessage }: ErrorBoundaryProps) => (
  <span
    aria-label="Error on component"
    className="text-center text-sm font-semibold text-red-600"
  >
    {errorMessage}
  </span>
)

export const ErrorBoundary: React.FC<
  React.PropsWithChildren<ErrorBoundaryProps>
> = ({ children, errorMessage }) => {
  return (
    <ReactErrorBoundary
      FallbackComponent={() => <ErrorFallback errorMessage={errorMessage} />}
      onError={(error, errorInfo) => {
        console.error(error, errorInfo)
      }}
    >
      {children}
    </ReactErrorBoundary>
  )
}
