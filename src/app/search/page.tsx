import { Suspense } from 'react'
import SearchPage from './Container/SearchPage'

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchPage />
    </Suspense>
  )
}
