import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import ChameleonMode from '../components/ChameleonMode'

describe('ChameleonMode', () => {
  it('deve renderizar o logo luna', () => {
    render(<ChameleonMode onExit={() => {}} />)
    expect(screen.getByText(/luna/i)).toBeInTheDocument()
  })

  it('deve renderizar o calendário', () => {
    render(<ChameleonMode onExit={() => {}} />)
    expect(screen.getByText(/abril 2026/i)).toBeInTheDocument()
  })

  it('deve renderizar os botões de registro', () => {
    render(<ChameleonMode onExit={() => {}} />)
    expect(screen.getByText(/humor e energia/i)).toBeInTheDocument()
    expect(screen.getByText(/sintomas físicos/i)).toBeInTheDocument()
  })

  it('deve chamar onExit ao clicar 3 vezes no logo', () => {
    const onExit = vi.fn()
    render(<ChameleonMode onExit={onExit} />)
    
    const logo = screen.getByText(/luna/i)
    fireEvent.click(logo)
    fireEvent.click(logo)
    fireEvent.click(logo)
    
    expect(onExit).toHaveBeenCalled()
  })
})