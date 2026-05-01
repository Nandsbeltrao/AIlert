import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Header from '../components/Header'

describe('Header', () => {
  it('deve renderizar o logo AIlert', () => {
    render(<Header />)
    expect(screen.getByText('AIlert')).toBeInTheDocument()
  })

  it('deve renderizar o botão sair rápido', () => {
    render(<Header />)
    expect(screen.getByText('Sair rápido')).toBeInTheDocument()
  })
})