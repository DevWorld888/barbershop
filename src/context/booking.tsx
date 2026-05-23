'use client'

import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'
import BookingModal from '@/components/ui/BookingModal'

interface BookingContextValue {
  open: () => void
}

const BookingContext = createContext<BookingContextValue>({ open: () => {} })

export function useBooking(): BookingContextValue {
  return useContext(BookingContext)
}

export function BookingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const open  = useCallback(() => setIsOpen(true),  [])
  const close = useCallback(() => setIsOpen(false), [])

  return (
    <BookingContext.Provider value={{ open }}>
      {children}
      <BookingModal isOpen={isOpen} onClose={close} />
    </BookingContext.Provider>
  )
}
