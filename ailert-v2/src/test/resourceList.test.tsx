import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import ResourceList from '../components/ResourceList'

describe('ResourceList', () => {
  it('deve renderizar os recursos', () => {
    render(<ResourceList search="" />)
    
    expect(screen.getByText('CVV · 188')).toBeInTheDocument()
    expect(screen.getByText('Delegacia da Mulher')).toBeInTheDocument()
    expect(screen.getByText('Ligue 180')).toBeInTheDocument()
  })

  it('deve filtrar recursos pela busca', () => {
    render(<ResourceList search="CVV" />)
    
    expect(screen.getByText('CVV · 188')).toBeInTheDocument()
    expect(screen.queryByText('Delegacia da Mulher')).not.toBeInTheDocument()
    expect(screen.queryByText('Ligue 180')).not.toBeInTheDocument()
  })

  it('deve mostrar todos os recursos quando busca está vazia', () => {
    render(<ResourceList search="" />)
    
    const cards = screen.getAllByText(/ligar|ver/)
    expect(cards).toHaveLength(3)
  })
})