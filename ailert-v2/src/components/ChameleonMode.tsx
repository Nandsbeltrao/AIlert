import { useRef } from 'react'

interface Props {
  onExit: () => void
}

function ChameleonMode({ onExit }: Props) {
  const clicks = useRef(0)
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleLogoClick = () => {
    clicks.current += 1

    if (timer.current) clearTimeout(timer.current)

    timer.current = setTimeout(() => {
      clicks.current = 0
    }, 1000)

    if (clicks.current === 3) {
      clicks.current = 0
      onExit()
    }
  }

  return (
    <div className="chameleon">
      <div className="chameleon-topbar">
        <div className="chameleon-logo" onClick={handleLogoClick}>
          <div className="chameleon-logo-icon"></div>
          <span className="chameleon-logo-text">Luna</span>
        </div>
      </div>

      <div className="chameleon-calendar">
        <p className="chameleon-month">Abril 2026</p>
        <div className="chameleon-days">
          <span>D</span><span>S</span><span>T</span>
          <span>Q</span><span>Q</span><span>S</span><span>S</span>
        </div>
        <div className="chameleon-nums">
          <span></span><span></span><span className="period">1</span>
          <span className="period">2</span><span className="period">3</span>
          <span className="period">4</span><span className="period">5</span>
          <span>6</span><span>7</span><span>8</span>
          <span className="fertile">9</span><span className="fertile">10</span>
          <span className="fertile">11</span><span>12</span>
          <span>13</span><span>14</span><span>15</span>
          <span>16</span><span>17</span><span>18</span><span>19</span>
          <span>20</span><span>21</span><span>22</span>
          <span>23</span><span>24</span><span>25</span><span>26</span>
          <span className="today">27</span><span>28</span>
          <span>29</span><span className="predicted">30</span>
        </div>
      </div>

      <div className="chameleon-stats">
        <div className="chameleon-stat">
          <p className="stat-label">Próxima menstruação</p>
          <p className="stat-value">3 dias</p>
          <p className="stat-sub">30 de abril</p>
        </div>
        <div className="chameleon-stat">
          <p className="stat-label">Fase atual</p>
          <p className="stat-value">Lútea</p>
          <p className="stat-sub">Dia 23 do ciclo</p>
        </div>
      </div>

      <div className="chameleon-logs">
        <p className="chameleon-logs-label">Registrar hoje</p>
        
        <div className="chameleon-log-btn">
          <div className="log-icon" style={{ background: '#3D1A5A' }}>
            <div className="log-dot" style={{ background: '#E040A0' }}></div>
          </div>
          <div>
            <p className="log-name">Humor e energia</p>
            <p className="log-desc">Como você está se sentindo?</p>
          </div>
        </div>

        <div className="chameleon-log-btn">
          <div className="log-icon" style={{ background: '#1A2A3A' }}>
            <div className="log-dot" style={{ background: '#4FC3F7' }}></div>
          </div>
          <div>
            <p className="log-name">Sintomas físicos</p>
            <p className="log-desc">Dor, inchaço, cólica...</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ChameleonMode;