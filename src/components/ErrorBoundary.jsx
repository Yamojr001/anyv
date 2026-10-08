import React from 'react'
import { WarningCircle, ArrowsClockwise, House } from '@phosphor-icons/react'

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error('[ANYV Application Error Boundary]', error, errorInfo)
  }

  handleReload = () => {
    window.location.reload()
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[70vh] flex items-center justify-center p-6 bg-[#faf7ef]">
          <div className="max-w-md w-full bg-[#fffdf7] border-2 border-[#10241f] p-8 rounded-[2px] shadow-[6px_6px_0px_rgba(182,132,42,0.6)] text-center space-y-5">
            <div className="w-14 h-14 mx-auto rounded-full bg-[#fdf5f5] text-[#b93838] flex items-center justify-center">
              <WarningCircle size={32} weight="fill" />
            </div>

            <div>
              <span className="font-mono text-[10px] text-[#b6842a] uppercase tracking-wider block font-bold">
                SYSTEM RECOVERY NOTIFICATION
              </span>
              <h2 className="font-display text-2xl font-bold text-[#10241f] mt-1">
                Notice in Registry Interface
              </h2>
              <p className="text-xs text-[#666c5c] mt-2 leading-relaxed">
                A temporary display error occurred while rendering this view. Your saved data in the registry remains secure.
              </p>
            </div>

            {this.state.error && (
              <div className="p-3 bg-[#faf7ef] border border-[#cfc6a6] rounded-[2px] text-left font-mono text-[11px] text-[#b93838] overflow-x-auto">
                {this.state.error.message || 'Unknown runtime error'}
              </div>
            )}

            <div className="pt-2 flex flex-col sm:flex-row gap-2 justify-center">
              <button
                onClick={this.handleReload}
                className="px-4 py-2.5 rounded-[2px] bg-[#10241f] text-[#f1ecde] font-mono text-xs uppercase tracking-wider font-semibold hover:bg-[#16302b] flex items-center justify-center gap-1.5 shadow-sm"
              >
                <ArrowsClockwise size={14} />
                <span>Reload Page</span>
              </button>
              <a
                href="/"
                className="px-4 py-2.5 rounded-[2px] border border-[#cfc6a6] hover:bg-[#faf7ef] text-[#10241f] font-mono text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-1.5"
              >
                <House size={14} />
                <span>Return Home</span>
              </a>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
