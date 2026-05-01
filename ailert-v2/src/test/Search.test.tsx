import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import Search from '../components/Search'

describe('Search', () => {
  it('deve renderizar o input de busca', () => {
    render(<Search search="" setSearch={() => {}} />)
    expect(screen.getByPlaceholderText(/buscar tipo de apoio/i)).toBeInTheDocument()
  })

it('deve renderizar as tags de filtro', () => {
  render(<Search search="" setSearch={() => {}} />)
  expect(screen.getByText(/emergência/i)).toBeInTheDocument()
  expect(screen.getByText(/apoio emocional/i)).toBeInTheDocument()
  expect(screen.getByText(/jurídico/i)).toBeInTheDocument()
  expect(screen.getByText(/abrigo/i)).toBeInTheDocument()
})

  it('deve chamar setSearch quando digitar', () => {
    const setSearch = vi.fn()
    render(<Search search="" setSearch={setSearch} />)
    
    const input = screen.getByPlaceholderText(/buscar tipo de apoio/i)
    fireEvent.change(input, { target: { value: 'CVV' } })
    
    expect(setSearch).toHaveBeenCalledWith('CVV')
  })
})