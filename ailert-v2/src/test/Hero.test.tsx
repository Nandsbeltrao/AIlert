import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Hero from '../components/Hero'

describe('Hero', () => {
  it('deve renderizar o título', () => {
    render(<Hero />)
    expect(screen.getByText('Encontre ajuda perto de você')).toBeInTheDocument()
  })

  it('deve renderizar o subtítulo', () => {
    render(<Hero />)
    expect(screen.getByText('Recursos de apoio e emergência de forma discreta.')).toBeInTheDocument()
  })

  it('deve renderizar a label', () => {
    render(<Hero />)
    expect(screen.getByText(/você não está sozinha/i)).toBeInTheDocument()
  })
})